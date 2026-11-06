# Portfolio Design Specification

## Purpose

Define the visual and content direction for Jonathan Maynard's personal portfolio. The site should feel like a polished cyberpunk city interface: energetic and atmospheric, while remaining clear and welcoming to customers and business professionals.

## Core palette

| Role                  | Name               | Hex       |
| --------------------- | ------------------ | --------- |
| Primary background    | Near black         | `#08090D` |
| Secondary surfaces   | Deep graphite      | `#11131B` |
| Primary text         | Ice white          | `#F2F2F6` |
| Primary accent       | Electric yellow    | `#F2EC07` |
| Secondary accent     | Hot magenta        | `#FF2AA1` |
| Highlight            | Electric cyan      | `#00E5FF` |

## Usage

- Use Near Black for the page foundation and Deep Graphite for interface panels.
- Use Electric Yellow for primary actions and key emphasis, Hot Magenta for secondary emphasis, and Electric Cyan for system details, focus indicators, and interactive accents.
- Use an original AI-generated futuristic city-at-night image with neon haze and layered skyline depth; keep overlays dark enough for readable content.
- Keep the cyberpunk influence atmospheric and professional. Do not use game logos, copied game UI, or official game artwork.
- Keep text and controls legible against their surfaces. Check contrast when combining palette colors, especially for small text.
- Avoid introducing new competing brand colors. Neutral colors may be used where necessary for borders, muted text, disabled states, and accessible status feedback.

## Content

- Present Jonathan Maynard as a full-stack developer, as stated by the site owner.
- Use verified résumé details for career history: U.S. Army systems and network support, experience supporting 300+ clients, team mentorship, utility inspection, and industrial manufacturing.
- Keep claims specific and factual. Do not invent clients, software roles, certifications, project outcomes, or external profile links.
- Treat the current portfolio implementation as the featured build. Add further project case studies only when the owner provides project details.

## Motion and accessibility

- Reveal text and content as they enter the viewport with a subtle upward fade and a short stagger.
- Use `IntersectionObserver`; reveal each item once and avoid animating layout-affecting properties.
- Add restrained drifting dust and subtle interface motion without distracting from content.
- Honor `prefers-reduced-motion` by removing positional movement, decorative animation, and keeping content visible.
- Preserve keyboard navigation, visible focus, semantic headings, and readable contrast.

## Scope

These rules guide future portfolio changes and supersede the starter-template styling.
