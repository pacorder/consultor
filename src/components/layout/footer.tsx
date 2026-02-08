import Link from 'next/link';
import { Briefcase, Linkedin, Mail, Phone } from 'lucide-react';
import { navItems, profile } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="space-y-4 md:col-span-4">
            <Link href="/" className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">SEM Consultores</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              {profile.role}
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-2 font-semibold">Navegación</h3>
            <ul className="space-y-2">
              {navItems.slice(0, 5).map(item => (
                <li key={item.title}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
             <h3 className="mb-2 font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Política de Privacidad</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Términos de Servicio</Link></li>
            </ul>
          </div>
          <div className="space-y-4 md:col-span-4">
            <h3 className="font-semibold">Contacto Directo</h3>
            <div className="space-y-2">
              <a href="mailto:sady.maureria@semconsultores.cl" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary">
                <Mail className="h-4 w-4" />
                <span>sady.maureria@semconsultores.cl</span>
              </a>
              <a href="tel:+56912345678" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary">
                <Phone className="h-4 w-4" />
                <span>+56 9 1234 5678</span>
              </a>
            </div>
             <p className="text-sm text-muted-foreground">Santiago, Chile</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SEM Consultores. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
