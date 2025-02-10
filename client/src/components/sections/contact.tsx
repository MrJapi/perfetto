import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: ""
    }
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: t('contact.success'),
        description: t('contact.successMessage')
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: t('contact.error'),
        description: t('contact.errorMessage'),
        variant: "destructive"
      });
    }
  });

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container pl-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{t('contact.title')}</h2>

          {/* Contact Information */}
          <div className="mb-12 flex flex-col items-center gap-2 text-muted-foreground">
            <div className="flex items-start gap-2">
              <Phone className="h-5 w-5 mt-1" />
              <div className="flex flex-col items-start">
                <span>{t('contact.phone.office')}</span>
                <span>{t('contact.phone.mobile1')}</span>
                <span>{t('contact.phone.mobile2')}</span>
              </div>
            </div>
          </div>

          <div className="bg-background rounded-lg shadow-md p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel>{t('contact.form.name')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('contact.form.namePlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel>{t('contact.form.company')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('contact.form.companyPlaceholder')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel>{t('contact.form.email')}</FormLabel>
                      <FormControl>
                        <Input placeholder={t('contact.form.emailPlaceholder')} type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel>{t('contact.form.message')}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder={t('contact.form.messagePlaceholder')}
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={mutation.isPending}>
                  {mutation.isPending ? t('contact.form.sending') : t('contact.form.send')}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}