import { Calculator, BookOpen, CreditCard, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Calculator,
    title: 'Tax Preparation',
    description:
      'Maximize your returns with our expert tax filing services for individuals and businesses.'
  },
  {
    icon: BookOpen,
    title: 'Bookkeeping',
    description:
      'Accurate and timely bookkeeping to keep your finances in order and provide clear insights.'
  },
  {
    icon: CreditCard,
    title: 'Payroll Services',
    description:
      'Streamline your payroll process, ensuring compliance, accuracy, and timeliness.'
  },
  {
    icon: TrendingUp,
    title: 'Financial Consulting',
    description:
      'Strategic advice to help you make informed financial decisions and achieve your goals.'
  }
];

export default function Services() {
  return (
    <section id='services' className='py-16 bg-secondary'>
      <div className='container mx-auto px-4'>
        <h2 className='text-center text-foreground text-3xl font-bold leading-tight tracking-tight mb-12 text-balance'>
          Our Services
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map(service => (
            <div
              key={service.title}
              className='flex flex-col gap-4 rounded-xl border border-border bg-card p-6 items-center text-center'
            >
              <service.icon className='text-primary h-10 w-10' />
              <div className='flex flex-col gap-1'>
                <h3 className='text-card-foreground text-lg font-bold leading-tight'>
                  {service.title}
                </h3>
                <p className='text-muted-foreground text-sm leading-relaxed'>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
