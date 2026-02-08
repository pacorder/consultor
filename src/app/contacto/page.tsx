import { PageHeader } from '@/components/shared/page-header';
import { ContactFormTabs } from '@/components/contact/contact-form-tabs';

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        title="Contacto"
        description="¿Listo para empezar? Envíe un mensaje o agende una asesoría directamente."
      />
      <div className="container mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-24">
        <ContactFormTabs />
      </div>
    </>
  );
}
