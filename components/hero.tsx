import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id='home' className='relative'>
      <div className='container mx-auto p-4'>
        <div
          className='flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 md:p-12 text-balance'
          style={{
            backgroundImage: `linear-gradient(rgba(28, 27, 26, 0.7) 0%, rgba(28, 27, 26, 0.9) 100%), url("images/hero-bg.png")`
          }}
        >
          <div className='flex flex-col gap-4 text-center max-w-2xl'>
            <h1 className='text-white text-4xl md:text-5xl font-black leading-tight tracking-tight'>
              Expert Accounting for Your Business
            </h1>
            <h2 className='text-white/90 text-base md:text-lg font-normal leading-relaxed'>
              Reliable, professional, and tailored financial services to help
              you grow.
            </h2>
          </div>
          <Button
            asChild
            size='lg'
            className='mt-4 bg-primary hover:bg-primary/90 text-white'
          >
            <Link href='#contact'>Get a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
