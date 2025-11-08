import Image from 'next/image';

const team = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Lead Accountant, CPA',
    description:
      'With over 15 years of experience, Johnathan specializes in corporate tax and financial strategy, helping businesses thrive.',
    image: 'images/accountant.jpeg'
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Senior Bookkeeper',
    description:
      'Jane is a certified bookkeeper with a passion for organization and detail, ensuring your financial records are always perfect.',
    image: 'images/accountant2.jpeg'
  }
];

export default function Team() {
  return (
    <section className='py-16 bg-background' id='about'>
      <div className='container mx-auto px-4'>
        <h2 className='text-center text-foreground text-3xl font-bold leading-tight tracking-[-0.015em] mb-8'>
          Meet Our Team
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {team.map(member => (
            <div
              key={member.id}
              className='flex flex-col md:flex-row items-center text-center md:text-left gap-6 rounded-xl p-6'
            >
              <Image
                src={member.image || 'images/placeholder.svg'}
                alt={`Headshot of ${member.name}`}
                width={128}
                height={128}
                className='rounded-full object-cover shrink-0 border-4 border-border'
              />
              <div>
                <h3 className='text-foreground text-xl font-bold'>
                  {member.name}
                </h3>
                <p className='text-primary font-semibold mb-2'>{member.role}</p>
                <p className='text-muted-foreground text-sm'>
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
