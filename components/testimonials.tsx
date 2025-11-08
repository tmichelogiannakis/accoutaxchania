import { Quote } from 'lucide-react';
import test from 'node:test';

const testimonials = [
  {
    id: 1,
    quote:
      'AccouTaxChania transformed our financial processes. Their attention to detail and proactive advice have been invaluable to our growth.',
    author: 'Sarah L., CEO of Innovate Co.'
  },
  {
    id: 2,
    quote:
      'As a small business owner, I can finally focus on my work knowing my bookkeeping and taxes are in expert hands. Highly recommended!',
    author: 'Mike R., Owner of The Corner Cafe'
  },
  {
    id: 3,
    quote:
      'The team is professional, responsive, and incredibly knowledgeable. They made payroll a breeze for our company.',
    author: 'Emily C., HR Manager at Tech Solutions'
  }
];

export default function Testimonials() {
  return (
    <section id='testimonials' className='py-16 bg-secondary'>
      <div className='container mx-auto px-4'>
        <h2 className='text-center text-foreground text-3xl font-bold leading-tight tracking-tight mb-12 text-balance'>
          What Our Clients Say
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {testimonials.map(testimonial => (
            <div
              key={testimonial.id}
              className='bg-card p-6 rounded-xl border border-border'
            >
              <Quote className='text-primary h-10 w-10 mb-4' />
              <p className='text-muted-foreground mb-4 italic leading-relaxed'>
                "{testimonial.quote}"
              </p>
              <p className='font-bold text-card-foreground'>
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
