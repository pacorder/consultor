'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, Menu, Mountain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navItems } from '@/lib/data';

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">SEM Consultores</span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  pathname === item.href ? 'text-foreground' : 'text-foreground/60'
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="hidden lg:inline-flex" variant="outline">
            <Link href="/contacto">Agendar Asesoría</Link>
          </Button>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <Link href="/" className="mr-6 flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
                <Briefcase className="h-6 w-6 text-primary" />
                <span className="font-bold">SEM Consultores</span>
              </Link>
              <div className="my-4 h-px w-full bg-border" />
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setIsSheetOpen(false)}
                    className={cn(
                      'px-4 py-2 text-foreground/70 transition-colors hover:text-foreground',
                      pathname === item.href ? 'font-semibold text-foreground bg-muted rounded-md' : ''
                    )}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <Button asChild className="mt-6 w-full" onClick={() => setIsSheetOpen(false)}>
                <Link href="/contacto">Agendar Asesoría</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
