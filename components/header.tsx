import Link from 'next/link';
import { Building2 } from 'lucide-react';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-background/80 backdrop-blur-sm shadow-sm'>
      <div className='container mx-auto flex items-center p-4 justify-between'>
        <Link href='#' className='flex items-center gap-2'>
          <Building2 className='text-primary h-8 w-8' />
          <h2 className='text-primary text-xl font-bold tracking-tight'>
            AccouTaxChania
          </h2>
        </Link>
        <nav className='hidden md:flex items-center space-x-6'>
          <Link
            href='#services'
            className='text-sm font-bold text-foreground hover:text-primary transition-colors'
          >
            Services
          </Link>
          <Link
            href='#about'
            className='text-sm font-bold text-foreground hover:text-primary transition-colors'
          >
            About Us
          </Link>
          <Link
            href='#testimonials'
            className='text-sm font-bold text-foreground hover:text-primary transition-colors'
          >
            Testimonials
          </Link>
          <Link
            href='#contact'
            className='text-sm font-bold text-foreground hover:text-primary transition-colors'
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
