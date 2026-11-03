import '@/styles/site.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ScrollReveal from '@/components/ScrollReveal';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <ScrollReveal>
          <Header />
          {children}
          <Footer />
        </ScrollReveal>
      </body>
    </html>
  );
}
