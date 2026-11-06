const highlights = [
  { metric: '300+', label: 'clients supported' },
  { metric: '5 yrs', label: 'U.S. Army service' },
  { metric: '1 goal', label: 'make technology work better' },
];

const capabilities = [
  'Network management',
  'Systems integration',
  'IT operations',
  'Incident response',
  'Information security',
  'Microsoft Azure',
  'Technical support',
  'Team leadership',
];

const experience = [
  {
    period: '2020 — 2025',
    organization: 'U.S. Army · 1st Special Forces Command',
    title: 'Systems & network support',
    location: 'Fort Bragg, North Carolina',
    details:
      'Supported more than 300 clients across base operations. Set up and maintained networks and systems, worked with Cisco routers, and trained and mentored fellow soldiers.',
    number: '01',
  },
  {
    period: '2019 — 2020',
    organization: 'Osmose Utilities',
    title: 'Experienced crew member',
    location: 'Peachtree City, Georgia',
    details:
      'Inspected transmission and power-line poles, then treated and tagged equipment after inspection.',
    number: '02',
  },
  {
    period: '2016 — 2019',
    organization: 'Vertiv',
    title: 'Brazer / wirer',
    location: 'Ironton, Ohio',
    details:
      'Assembled industrial air-conditioning equipment from wiring diagrams and work instructions, with a focus on quality and reliable builds.',
    number: '03',
  },
];

const projectStack = [
  'Next.js',
  'React',
  'TypeScript',
  'Responsive UI',
  'Accessible motion',
];

function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className='section-heading' data-reveal-stagger>
      <p className='eyebrow' data-reveal>
        <span className='eyebrow-index'>{index}</span>
        {eyebrow}
      </p>
      <h2 data-reveal>{title}</h2>
    </div>
  );
}

export default function Portfolio() {
  return (
    <main>
      <section className='hero shell' id='home'>
        <div className='hero-copy' data-reveal-stagger>
          <p className='eyebrow' data-reveal>
            <span className='status-light' />
            FULL-STACK DEVELOPER <span className='eyebrow-divider'>/</span>{' '}
            IRONTON, OH
          </p>
          <h1 data-reveal>
            I build useful
            <br />
            things for the
            <br />
            <span>real world.</span>
          </h1>
          <p className='hero-description' data-reveal>
            I&apos;m Jonathan Maynard—a full-stack developer with a
            systems-first mindset, shaped by supporting people and technology in
            demanding environments.
          </p>
          <div className='hero-actions' data-reveal>
            <a className='button button-primary' href='#work'>
              Explore my work <span aria-hidden='true'>↘</span>
            </a>
            <a className='text-link' href='#contact'>
              Let&apos;s talk <span aria-hidden='true'>↗</span>
            </a>
          </div>
        </div>

        <aside className='hero-console' aria-label='Developer profile'>
          <div className='console-topline'>
            <span>FIELD LOG / 001</span>
            <span className='console-lights' aria-hidden='true'>
              <i />
              <i />
              <i />
            </span>
          </div>
          <div className='console-body' data-reveal-stagger>
            <p className='console-comment' data-reveal>
              <span aria-hidden='true'>{'// '}</span> a little context
            </p>
            <p className='console-line' data-reveal>
              <span>name</span> <b>=</b> Jonathan Maynard
            </p>
            <p className='console-line' data-reveal>
              <span>focus</span> <b>=</b> full-stack development
            </p>
            <p className='console-line' data-reveal>
              <span>approach</span> <b>=</b> people first
            </p>
            <p className='console-line' data-reveal>
              <span>background</span> <b>=</b> systems &amp; networks
            </p>
            <div className='console-rule' />
            <p className='console-response' data-reveal>
              <span aria-hidden='true'>&gt;</span> Ready to build what&apos;s
              next.
            </p>
          </div>
          <div className='console-footer'>
            <span>38°32&apos;N 82°41&apos;W</span>
            <span>OHIO, USA</span>
          </div>
        </aside>

        <a
          className='scroll-cue'
          href='#work'
          aria-label='Scroll to selected work'
        >
          <span />
          FOLLOW THE TRAIL
        </a>
      </section>

      <section className='highlight-band' aria-label='Career highlights'>
        <div className='shell highlight-grid' data-reveal-stagger>
          {highlights.map((item, index) => (
            <div className='highlight' data-reveal key={item.label}>
              <span className='highlight-index'>0{index + 1}</span>
              <strong>{item.metric}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className='section shell work-section' id='work'>
        <SectionHeading
          index='01'
          eyebrow='Selected work'
          title='A practical build, from idea to interface.'
        />
        <article className='project-card' data-reveal>
          <div className='project-visual' aria-hidden='true'>
            <div className='project-window'>
              <div className='project-window-bar'>
                <span>JM / FIELD BUILD 001</span>
                <span>DIGITAL EXPERIENCE</span>
              </div>
              <div className='project-window-content'>
                <span className='project-kicker'>DIGITAL EXPERIENCE</span>
                <span className='project-title-line'>Clear thinking.</span>
                <span className='project-title-line project-title-accent'>
                  Solid systems.
                </span>
                <span className='project-action'>A thoughtful next step ↗</span>
              </div>
              <div className='project-grid-mark' />
            </div>
          </div>
          <div className='project-details'>
            <p className='eyebrow'>
              <span className='eyebrow-index'>01</span> PERSONAL PORTFOLIO
            </p>
            <h3>A digital home for the work ahead.</h3>
            <p>
              A responsive portfolio designed to bring together my full-stack
              direction, systems background, and work history in one clear,
              customer-friendly experience.
            </p>
            <ul className='tag-list' aria-label='Project technologies'>
              {projectStack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <a className='text-link' href='#contact'>
              Have a project in mind? <span aria-hidden='true'>↗</span>
            </a>
          </div>
        </article>
        <p className='project-note' data-reveal>
          This portfolio is a work in progress—more project case studies will
          appear here as they are ready to share.
        </p>
      </section>

      <section className='section section-tinted' id='experience'>
        <div className='shell'>
          <SectionHeading
            index='02'
            eyebrow='Experience'
            title='A foundation built on keeping things running.'
          />
          <div className='experience-list' data-reveal-stagger>
            {experience.map((role) => (
              <article
                className='experience-item'
                data-reveal
                key={role.number}
              >
                <span className='experience-number'>{role.number}</span>
                <div className='experience-main'>
                  <p className='experience-period'>{role.period}</p>
                  <h3>{role.title}</h3>
                  <p className='experience-org'>{role.organization}</p>
                  <p className='experience-location'>{role.location}</p>
                </div>
                <p className='experience-details'>{role.details}</p>
                <span className='experience-arrow' aria-hidden='true'>
                  ↗
                </span>
              </article>
            ))}
          </div>
          <p className='experience-footnote' data-reveal>
            Earlier experience includes utility inspection, industrial
            operations, and production work.
          </p>
        </div>
      </section>

      <section className='section shell about-section' id='about'>
        <div className='about-copy'>
          <SectionHeading
            index='03'
            eyebrow='How I work'
            title='Make the complex feel simple.'
          />
          <p className='about-description' data-reveal>
            My career began in hands-on operations and U.S. Army systems
            support. I learned to listen first, troubleshoot carefully, and take
            responsibility for the people who depend on the technology. That
            perspective guides how I approach software: clear communication,
            thoughtful details, and dependable results.
          </p>
          <p className='about-description' data-reveal>
            Outside of development, I&apos;m proud of the time I spent training
            and mentoring teammates. Good work is a team effort—and the best
            tools make that work easier.
          </p>
        </div>
        <div className='capability-panel' data-reveal>
          <div className='panel-heading'>
            <span>FIELD NOTES / CAPABILITIES</span>
            <span>08 ITEMS</span>
          </div>
          <ul className='capability-list' data-reveal-stagger>
            {capabilities.map((capability, index) => (
              <li data-reveal key={capability}>
                <span>0{index + 1}</span>
                {capability}
                <span className='capability-indicator' aria-hidden='true'>
                  +
                </span>
              </li>
            ))}
          </ul>
          <p className='panel-footnote'>
            Practical experience, built one problem at a time.
          </p>
        </div>
      </section>

      <section className='contact-section' id='contact'>
        <div className='shell contact-content' data-reveal-stagger>
          <p className='eyebrow' data-reveal>
            <span className='eyebrow-index'>04</span>
            THE NEXT WAYPOINT
          </p>
          <h2 data-reveal>
            Have a good problem
            <br />
            <span>to solve?</span>
          </h2>
          <p data-reveal>
            I&apos;d love to hear what you&apos;re working on. Tell me where
            you&apos;re headed and we can figure out the next step together.
          </p>
          <a
            className='button button-primary contact-button'
            data-reveal
            href='mailto:maynard6796@gmail.com'
          >
            Start a conversation <span aria-hidden='true'>↗</span>
          </a>
          <div className='contact-details' data-reveal>
            <a href='mailto:maynard6796@gmail.com'>maynard6796@gmail.com</a>
            <a href='tel:+17405506123'>+1 740 550 6123</a>
            <span>IRONTON, OHIO</span>
          </div>
          <a
            className='resume-link'
            href='/Jonathan_Maynard_Resume.pdf'
            download
            data-reveal
          >
            Download résumé <span aria-hidden='true'>↓</span>
          </a>
        </div>
      </section>
    </main>
  );
}
