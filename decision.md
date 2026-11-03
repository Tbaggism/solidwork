# Decision: Cyberpunk Portfolio Direction

## Status

Accepted

## Decision

Rebuild the site as a single-page personal portfolio for full-stack developer Jonathan Maynard, using a restrained cyberpunk visual language and the established four-color palette:

- Background: `#0F3460`
- Secondary: `#16537E`
- Text: `#E8F4FD`
- Accent: `#1ABC9C`

## Rationale

The original AI-tool starter content did not represent the owner's professional identity. A résumé-led portfolio better serves prospective customers and business professionals. The existing blue-and-teal palette supports a distinctive cyberpunk treatment without replacing the owner's chosen colors.

## Consequences

- Future site work should follow [spec.md](./spec.md) and [claude.md](./claude.md).
- Retire AI-tool, authentication, pricing, and documentation template routes that are not part of the portfolio.
- Keep biography and experience claims grounded in the résumé; represent additional projects only when details are available.
- Use subtle viewport-triggered text reveals with reduced-motion support.
