import Link from 'next/link';

export default function NotFound() {
  return (
    <main className='not-found shell'>
      <p className='eyebrow' data-reveal>
        <span className='eyebrow-index'>404</span> SIGNAL NOT FOUND
      </p>
      <h1 data-reveal>
        This page
        <br />
        <span>is off the map.</span>
      </h1>
      <p data-reveal>
        The address may have changed. Head back to the portfolio and find
        another route.
      </p>
      <Link className='button button-primary' href='/'>
        Back to the portfolio <span aria-hidden='true'>↗</span>
      </Link>
    </main>
  );
}
