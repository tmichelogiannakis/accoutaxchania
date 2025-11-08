import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-secondary border-t border-border'>
      <div className='container mx-auto py-6 px-4 text-center lg:text-left text-muted-foreground text-sm flex flex-col lg:flex-row lg:justify-between'>
        <p>© {year} AccouTaxChania. All Rights Reserved.</p>
        <p className='mt-2'>
          <Link href='#' className='hover:text-primary transition-colors'>
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}
