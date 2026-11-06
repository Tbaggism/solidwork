'use client';

import { useEffect, type ReactNode } from 'react';

export default function ScrollReveal({ children }: { children: ReactNode }) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const staggerGroups = document.querySelectorAll<HTMLElement>(
      '[data-reveal-stagger]',
    );
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-revealed'));
      return;
    }

    staggerGroups.forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        if (child instanceof HTMLElement && child.hasAttribute('data-reveal')) {
          child.style.setProperty(
            '--reveal-delay',
            `${Math.min(index, 5) * 90}ms`,
          );
        }
      });
    });

    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;

      document.documentElement.style.setProperty(
        '--scroll-progress',
        String(Math.min(Math.max(progress, 0), 1)),
      );
    };

    let frame = 0;
    const scheduleScrollProgress = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        updateScrollProgress();
        frame = 0;
      });
    };

    document.documentElement.classList.add('scroll-reveal-ready');
    updateScrollProgress();
    window.addEventListener('scroll', scheduleScrollProgress, {
      passive: true,
    });
    window.addEventListener('resize', scheduleScrollProgress);

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', scheduleScrollProgress);
      window.removeEventListener('resize', scheduleScrollProgress);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.style.removeProperty('--scroll-progress');
      staggerGroups.forEach((group) => {
        Array.from(group.children).forEach((child) => {
          if (child instanceof HTMLElement) {
            child.style.removeProperty('--reveal-delay');
          }
        });
      });
      document.documentElement.classList.remove('scroll-reveal-ready');
    };
  }, []);

  return children;
}
