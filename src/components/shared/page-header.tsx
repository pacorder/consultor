import type { ReactNode } from 'react';

type PageHeaderProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <section className="border-b bg-card">
      <div className="container mx-auto px-4 py-16 text-center md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
