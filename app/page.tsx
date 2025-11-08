import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Team from '@/components/team';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import Blog from '@/components/blog';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Testimonials />
        <Contact />
        {/* <Blog /> */}
      </main>
      <Footer />
    </>
  );
}
