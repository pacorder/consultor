'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { services } from '@/lib/data';
import React from 'react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

const bookingFormSchema = z.object({
  name: z.string().min(2, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  company: z.string().optional(),
  service: z.string().min(1, 'Seleccione un servicio'),
  date: z.date({ required_error: 'Seleccione una fecha' }),
});

export function ContactFormTabs() {
  const { toast } = useToast();

  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const bookingForm = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: { name: '', email: '' },
  });

  const onContactSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log(values);
    toast({
      title: 'Mensaje Enviado',
      description: 'Gracias por contactarme. Le responderé a la brevedad.',
    });
    contactForm.reset();
  };

  const onBookingSubmit = (values: z.infer<typeof bookingFormSchema>) => {
    console.log(values);
    toast({
      title: 'Solicitud de Asesoría Enviada',
      description: 'He recibido su solicitud. Me pondré en contacto para confirmar la fecha y hora.',
    });
    bookingForm.reset();
  };

  return (
    <Tabs defaultValue="contact" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="contact">Mensaje Rápido</TabsTrigger>
        <TabsTrigger value="booking">Agendar Asesoría</TabsTrigger>
      </TabsList>
      <TabsContent value="contact">
        <Form {...contactForm}>
          <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6 pt-6">
            <FormField
              control={contactForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre Completo</FormLabel>
                  <FormControl>
                    <Input placeholder="Su nombre" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="su@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensaje</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Escriba su consulta aquí..." className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Enviar Mensaje</Button>
          </form>
        </Form>
      </TabsContent>
      <TabsContent value="booking">
        <Form {...bookingForm}>
          <form onSubmit={bookingForm.handleSubmit(onBookingSubmit)} className="space-y-6 pt-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField
                control={bookingForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Su nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={bookingForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="su@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={bookingForm.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empresa (Opcional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Nombre de su empresa" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={bookingForm.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Servicio de Interés</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione un servicio" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {services.map((service, index) => (
                        <SelectItem key={index} value={service.title}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={bookingForm.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Fecha Preferida</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn('w-full pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}
                        >
                          {field.value ? format(field.value, 'PPP', { locale: es }) : <span>Seleccione una fecha</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date() || date < new Date('1900-01-01')}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Solicitar Asesoría</Button>
          </form>
        </Form>
      </TabsContent>
    </Tabs>
  );
}
