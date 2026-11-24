# Design

## Context

The homepage (`src/components/tawaf/Sections.tsx`) imports three static JPEG assets from `src/assets/`:
1. `hero-adire-market.jpg` in `Hero` (`#top`)
2. `kano-dye-pit.jpg` in `Why`
3. `lagos-market-aerial.jpg` in `Impact` (`#impact`)

In `Hero`, the image tag previously used `object-[15%_50%] md:w-[62%]` with a left-to-right gradient overlay (`bg-gradient-to-r from-band via-band/70 to-transparent`). See `proposal.md` for motivation.

## Goals / Non-Goals

**Goals:**
- Establish a cohesive three-stage visual narrative across the homepage:
  1. **Hero:** Female founder + apprentice in a modern leather & adire studio (studio enterprise & ownership).
  2. **Why:** Master woodworker + young apprentice at a precision lathe (intergenerational livelihood & productive machinery).
  3. **Impact:** Formalized cooperative agro-processing and export fulfillment facility (institutional scale & measurable jobs).
- Ensure the Hero image's dark espresso-umber negative space on the left blends seamlessly into `bg-band` while keeping the founder and apprentice framed on the right across desktop and mobile viewports.
- Preserve existing bundle conventions by replacing the three asset files in `src/assets/` directly so existing imports and Vite asset handling remain clean.

**Non-Goals:**
- Changing homepage copy, typography, color tokens, or interactive components (`Ladder`, `Journey`, `Governance`, `PathFinder`, `Partners`, `People`, `Join`).

## Decisions

- **Replace asset files in place (`src/assets/hero-adire-market.jpg`, `src/assets/kano-dye-pit.jpg`, `src/assets/lagos-market-aerial.jpg`)**:
  - *Rationale*: Keeps repository asset footprint clean without orphaned large binary files and preserves existing Vite module imports in `Sections.tsx`.
  - *Alternatives considered*: Adding new filenames and leaving old files unused in `src/assets/`. Rejected to avoid dead binary bloat.
- **Update Hero focal alignment in `Sections.tsx`**:
  - *Rationale*: The previous `object-[15%_50%]` anchored the left 15% of the image. The new art-directed 16:9 hero photograph places dark negative space on the left 35% and the founder on the right third (`65%–85%`), with the apprentice in the center-left (`40%–50%`). Expanding the desktop container width slightly (`md:w-[72%]`) and setting `object-[70%_50%]` ensures both the founder on the right and the apprentice in the middle-ground remain visible while the left edge melts smoothly into the `from-band via-band/70 to-transparent` gradient.

## Risks / Trade-offs

- **[Risk] Mobile viewport text contrast over Hero background** → **Mitigation**: On small screens, the gradient overlay covers the full width and the left/center of the new image is deep espresso-umber shadow, actually improving text legibility over the previous bright orange pillar.
