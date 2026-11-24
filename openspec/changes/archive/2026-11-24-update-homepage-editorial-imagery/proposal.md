# Proposal

## Why

The homepage's three primary photographic assets (`hero-adire-market.jpg`, `kano-dye-pit.jpg`, and `lagos-market-aerial.jpg`) do not immediately communicate The TAWAF Collective's thesis of Islamic Venture Philanthropy—turning Zakat, Sadaqah, and Islamic finance into formalized enterprises, productive assets, and generational livelihoods. Visitors currently see an ambiguous orange pillar and an out-of-focus back in the hero, repetitive traditional indigo dyeing in the "Why" section, and chaotic subsistence tomato baskets in the "Impact" section rather than dignified, scalable West African Muslim enterprise.

## What Changes

- Replace the Hero background image (`src/assets/hero-adire-market.jpg`) with an art-directed chiaroscuro editorial image of a poised West African Muslim woman founder inspecting a handcrafted leather-and-adire bag in a modern design atelier alongside an apprentice at an industrial sewing machine, and adjust the Hero image focal crop and accessible `alt` text in `src/components/tawaf/Sections.tsx`.
- Replace the "Why TAWAF exists" section portrait (`src/assets/kano-dye-pit.jpg`) with an editorial vertical portrait of a master woodworker and his young apprentice calibrating a precision brass-fitted woodworking lathe in a sunlit furniture workshop, updating its accessible `alt` text.
- Replace the "Impact & Ambition" wide banner (`src/assets/lagos-market-aerial.jpg`) with a golden-hour high-angle photograph of a formalized West African cooperative agro-processing and export fulfillment facility, updating its accessible `alt` text.

## Capabilities

### New Capabilities
- `homepage-editorial-imagery`: Defines the visual presentation, semantic accessibility (`alt` text), and layout alignment requirements for the homepage editorial photography across the Hero, Why, and Impact sections.

### Modified Capabilities

## Impact

- `src/assets/hero-adire-market.jpg`
- `src/assets/kano-dye-pit.jpg`
- `src/assets/lagos-market-aerial.jpg`
- `src/components/tawaf/Sections.tsx`
