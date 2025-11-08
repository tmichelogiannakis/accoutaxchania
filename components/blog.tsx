import Link from 'next/link';
import { Button } from '@/components/ui/button';

const posts = [
  {
    title: '5 Common Tax Mistakes Small Businesses Make',
    excerpt:
      'Learn how to avoid common pitfalls during tax season to save money and stay compliant. From mixing personal and business expenses to...'
  },
  {
    title: 'Understanding Financial Statements: A Guide',
    excerpt:
      "We break down the balance sheet, income statement, and cash flow statement into simple terms to help you understand your business's financial health."
  }
];

export default function Blog() {
  return (
    <section className='py-16 bg-neutral-bg' id='blog'>
      <div className='container mx-auto px-4'>
        <h2 className='text-center text-foreground text-3xl font-bold leading-tight tracking-[-0.015em] mb-8'>
          Recent Posts
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          {posts.map(post => (
            <div
              key={post.title}
              className='bg-card p-6 rounded-xl border border-border flex flex-col'
            >
              <h3 className='text-card-foreground text-xl font-bold mb-2'>
                {post.title}
              </h3>
              <p className='text-muted-foreground text-sm mb-4 flex-grow'>
                {post.excerpt}
              </p>
              <Link
                href='#'
                className='font-bold text-secondary hover:underline'
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <Button asChild size='lg'>
            <Link href='#'>Visit our Blog & Resources</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
