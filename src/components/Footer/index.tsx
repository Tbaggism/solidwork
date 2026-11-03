const Footer = () => (
  <footer className='site-footer'>
    <div className='shell footer-inner'>
      <p data-reveal>
        <span className='footer-mark'>JM.</span> Built with intention in Ohio.
      </p>
      <a data-reveal href='mailto:maynard6796@gmail.com'>
        maynard6796@gmail.com
      </a>
      <p data-reveal className='footer-copyright'>
        © {new Date().getFullYear()} Jonathan Maynard
      </p>
    </div>
  </footer>
);

export default Footer;
