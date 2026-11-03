'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    return () => window.removeEventListener('scroll', updateScrollState);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className='shell header-inner'>
        <Link
          className='wordmark'
          href='/'
          aria-label='Jonathan Maynard home'
          onClick={() => setMenuOpen(false)}
        >
          JM<span>.</span>
        </Link>

        <button
          className='menu-toggle'
          type='button'
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls='primary-navigation'
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
          id='primary-navigation'
          aria-label='Primary navigation'
        >
          {navigation.map((item, index) => (
            <a
              href={item.href}
              key={item.label}
              onClick={() => setMenuOpen(false)}
              className={index === navigation.length - 1 ? 'nav-contact' : ''}
            >
              <span className='nav-index'>0{index + 1}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
