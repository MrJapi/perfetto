import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Products table
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  key: text("key").notNull(),
  category: text("category").notNull(),
  image: text("image").notNull(),
  description: text("description").notNull(),
  features: text("features").array().notNull(),
  specifications: text("specifications").array().notNull(),
  applications: text("applications").array().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

// Users table for authentication
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  isAdmin: boolean("is_admin").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});

// Contact messages table
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  resolved: boolean("resolved").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});

// Chat messages table
export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  role: text("role").notNull(), // 'user' or 'assistant'
  content: text("content").notNull(),
  metadata: jsonb("metadata"), // For storing additional AI-related data
  createdAt: timestamp("created_at").defaultNow().notNull()
});

// Create insert schemas using drizzle-zod
export const insertProductSchema = createInsertSchema(products).omit({ 
  id: true,
  createdAt: true,
  updatedAt: true 
});

export const insertUserSchema = createInsertSchema(users).omit({ 
  id: true,
  isAdmin: true,
  createdAt: true,
  updatedAt: true 
});

export const insertContactSchema = createInsertSchema(contacts).omit({ 
  id: true,
  resolved: true,
  createdAt: true 
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).omit({ 
  id: true,
  createdAt: true 
});

// Export types
export type Product = typeof products.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;

export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;