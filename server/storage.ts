import { type User, type InsertUser, type Product, type InsertProduct, type Contact, type InsertContact, type ChatMessage, type InsertChatMessage } from "@shared/schema";
import session from "express-session";
import createMemoryStore from "memorystore";

const MemoryStore = createMemoryStore(session);

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Product operations
  getProduct(id: number): Promise<Product | undefined>;
  getProducts(category?: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Contact operations
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  markContactResolved(id: number): Promise<Contact>;

  // Chat operations
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatMessages(sessionId: string): Promise<ChatMessage[]>;

  // Session store
  sessionStore: session.Store;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private contacts: Map<number, Contact>;
  private chatMessages: Map<string, ChatMessage[]>;
  private currentId: { [key: string]: number };
  sessionStore: session.Store;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.contacts = new Map();
    this.chatMessages = new Map();
    this.currentId = {
      users: 1,
      products: 1,
      contacts: 1,
      chatMessages: 1
    };
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    });
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId.users++;
    const user = {
      ...insertUser,
      id,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  // Product operations
  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProducts(category?: string): Promise<Product[]> {
    const products = Array.from(this.products.values());
    if (category) {
      return products.filter(product => product.category === category);
    }
    return products;
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.currentId.products++;
    const product = {
      ...insertProduct,
      id,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.products.set(id, product);
    return product;
  }

  // Contact operations
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentId.contacts++;
    const contact = {
      ...insertContact,
      id,
      resolved: false,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async markContactResolved(id: number): Promise<Contact> {
    const contact = this.contacts.get(id);
    if (!contact) {
      throw new Error("Contact not found");
    }
    const updatedContact = { ...contact, resolved: true };
    this.contacts.set(id, updatedContact);
    return updatedContact;
  }

  // Chat operations
  async createChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = this.currentId.chatMessages++;
    const message = {
      ...insertMessage,
      id,
      createdAt: new Date()
    };

    const sessionMessages = this.chatMessages.get(message.sessionId) || [];
    sessionMessages.push(message);
    this.chatMessages.set(message.sessionId, sessionMessages);

    return message;
  }

  async getChatMessages(sessionId: string): Promise<ChatMessage[]> {
    return this.chatMessages.get(sessionId) || [];
  }
}

export const storage = new MemStorage();