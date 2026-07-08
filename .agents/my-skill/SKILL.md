---
name: vercel-design-system
description: >
  Vercel-inspired design language for all UI work in this project.
  Apply when building, styling, or reviewing any web UI, components,
  pages, or design system tokens. This skill defines the color palette,
  typography, spacing, elevation, border-radius, component specs, and
  dos/don'ts derived from Vercel's public design language.
---

# Vercel Design System Skill

Before writing any UI code, consult the full design reference in:
`./DESIGN.md` (project root)

## Quick Reference

### Core Principles
- **Stark monochrome base** — near-white `#fafafa` canvas, near-black `#171717` ink.
- **Mesh gradient = the only decoration** — used at hero scale only; never miniaturised.
- **Geist sans** (use Inter as substitute) for all text; **Geist Mono** (use JetBrains Mono) for code/labels.
- **Stacked shadows** — never a single heavy drop-shadow.
- **100 px pill** for marketing CTAs; **6 px radius** for nav-scale buttons.

### Key Colors
| Token | Value | Use |
|---|---|---|
| `--color-ink` | `#171717` | Primary text, primary CTA background |
| `--color-canvas` | `#ffffff` | Card surfaces |
| `--color-canvas-soft` | `#fafafa` | Page background |
| `--color-hairline` | `#ebebeb` | Borders, dividers |
| `--color-link` | `#0070f3` | Links, success state |
| `--color-body` | `#4d4d4d` | Secondary text |
| `--color-mute` | `#888888` | Placeholder, fine print |

### Gradient Pairs (hero scale only)
- **Develop**: `#007cf0` to `#00dfd8`
- **Preview**: `#7928ca` to `#ff0080`
- **Ship**: `#ff4d4d` to `#f9cb28`

### Typography Scale
- Display XL: 48px / weight 600 / -2.4px tracking
- Display LG: 32px / weight 600 / -1.28px tracking
- Body MD: 16px / weight 400
- Body SM: 14px / weight 400 / -0.28px tracking
- Code/Mono: 12-13px / weight 400 / JetBrains Mono

### Elevation (stacked shadows, never single drop)
- Level 1 Inset hairline: `0 0 0 1px #00000014`
- Level 2 Subtle drop: `0px 1px 1px #00000005, 0px 2px 2px #0000000a` + inset
- Level 3 Soft stack: `0px 2px 2px #0000000a, 0px 8px 8px -8px #0000000a` + inset
- Level 5 Modal: `0px 1px 1px #00000005, 0px 8px 16px -4px #0000000a, 0px 24px 32px -8px #0000000f` + inset

### Border Radius
- `sm` 6px: nav buttons, inputs
- `md` 8px: feature cards
- `lg` 12px: pricing cards
- `pill` 100px: marketing CTAs
- `full` 9999px: icon buttons, nav-link ghosts

## Rules
1. Always use the 4px spacing base unit (multiples of 4).
2. Headlines must be sentence-case with aggressive negative tracking.
3. Mono typeface for code blocks, terminal mockups, and technical eyebrow labels ONLY.
4. Max font weight is 600 — never use 700+ for the geometric sans.
5. The mesh gradient lives at hero scale only — never shrink it to icon/badge scale.
6. Use polarity-flipped dark bands (`#171717` bg) as the section depth cue.
7. For the full component spec, token set, and do's/don'ts, read `./DESIGN.md`.
