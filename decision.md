# Decision: Post-Apocalyptic Portfolio Direction

## Status

Accepted

## Decision

Rebuild the site as a single-page personal portfolio for full-stack developer Jonathan Maynard, using a refined post-apocalyptic visual language and a sandy palette with deep rose accents:

- Background: `#181512`
- Secondary: `#28211A`
- Text: `#E8DDCB`
- Sand accent: `#D8BD91`
- Deep rose accent: `#A13D48`
- Ember highlight: `#D98B55`

## Rationale

The original AI-tool starter content did not represent the owner's professional identity. A résumé-led portfolio better serves prospective customers and business professionals. Warm charcoal, parchment, sand, and rose provide the requested weathered post-apocalyptic direction.

## Consequences

- Future site work should follow [spec.md](./spec.md) and [claude.md](./claude.md).
- Retire AI-tool, authentication, pricing, and documentation template routes that are not part of the portfolio.
- Keep biography and experience claims grounded in the résumé; represent additional projects only when details are available.
- Use subtle viewport-triggered text reveals with reduced-motion support.
