# Portfolio Design Specification

## Purpose

Define the visual and content direction for Jonathan Maynard's personal portfolio. The site should feel like a polished cyberpunk field interface: confident, precise, and welcoming to customers and business professionals.

## Core palette

| Role                | Name           | Hex       |
| ------------------- | -------------- | --------- |
| Primary background  | Midnight Blue  | `#0F3460` |
| Secondary surfaces  | Secondary Blue | `#16537E` |
| Primary text        | Ice Blue       | `#E8F4FD` |
| Accent and emphasis | Teal           | `#1ABC9C` |

## Usage

- Use Midnight Blue for the main page background and large background areas.
- Use Secondary Blue for cards, panels, navigation, and other surfaces layered above the background.
- Use Ice Blue for primary text and important icons on dark surfaces.
- Use Teal sparingly for calls to action, links, focus indicators, and other interactive emphasis.
- Create the cyberpunk atmosphere with grid lines, technical labels, fine rules, restrained glow, and terminal-inspired details—not with extra competing brand colors.
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
- Honor `prefers-reduced-motion` by removing positional movement and keeping content visible.
- Preserve keyboard navigation, visible focus, semantic headings, and readable contrast.

## Scope

These rules guide future portfolio changes and supersede the starter-template styling.
