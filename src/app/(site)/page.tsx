import Portfolio from '@/components/Portfolio';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jonathan Maynard | Full-Stack Developer',
  description:
    'Jonathan Maynard is a full-stack developer with a systems-first mindset, a background in U.S. Army network support, and a focus on useful digital experiences.',
  icons: { icon: '/favicon.svg' },
};

export default function Home() {
  return <Portfolio />;
}
