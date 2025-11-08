import { MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    id: 1,
    icon: MapPin,
    title: 'Address',
    content: '123 Finance Street, Chania, 73100, Greece'
  },
  {
    id: 2,
    icon: Phone,
    title: 'Phone',
    content: '(+30) 28210 12345'
  },
  {
    id: 3,
    icon: Mail,
    title: 'Email',
    content: 'contact@accoutaxchania.gr'
  }
];

export default function Contact() {
  return (
    <section id='contact' className='py-16 bg-background'>
      <div className='container mx-auto px-4'>
        <h2 className='text-center text-foreground text-3xl font-bold leading-tight tracking-tight mb-12 text-balance'>
          Get in Touch
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <div>
            <h3 className='text-foreground text-xl font-bold mb-6'>
              Send us a Message
            </h3>
            <form className='space-y-4'>
              <div>
                <Label htmlFor='name'>Name</Label>
                <Input id='name' name='name' type='text' className='mt-1' />
              </div>
              <div>
                <Label htmlFor='email'>Email</Label>
                <Input id='email' name='email' type='email' className='mt-1' />
              </div>
              <div>
                <Label htmlFor='phone'>Phone</Label>
                <Input id='phone' name='phone' type='tel' className='mt-1' />
              </div>
              <div>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  id='message'
                  name='message'
                  rows={4}
                  className='mt-1'
                />
              </div>
              <Button
                type='submit'
                className='w-full bg-primary hover:bg-primary/90 text-white'
              >
                Submit
              </Button>
            </form>
          </div>
          <div className='space-y-6'>
            <h3 className='text-foreground text-xl font-bold mb-6'>
              Contact Information
            </h3>
            {contactInfo.map(info => (
              <div key={info.id} className='flex items-start gap-4'>
                <info.icon className='text-primary h-6 w-6 mt-1 shrink-0' />
                <div>
                  <h4 className='font-bold text-foreground'>{info.title}</h4>
                  <p className='text-muted-foreground leading-relaxed'>
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
