# homepage-editorial-imagery Specification

## Purpose
Defines the visual presentation, responsive focal framing, and semantic accessibility requirements for the homepage's three editorial photographs across the Hero, Why, and Impact sections so visitors immediately grasp TAWAF's mission of building formalized enterprises, livelihoods, and assets across West Africa.

## Requirements

### Requirement: Hero section displays empowered founder atelier imagery with right-aligned focal framing
The homepage Hero section SHALL render an editorial photograph depicting a West African Muslim woman founder and apprentice in a modern leather-and-adire design atelier, framed on the right side of the hero container (`object-[75%_50%]` or right-anchored focal point) with dark negative space blending into the left headline gradient and descriptive `alt` text.

#### Scenario: Visitor loads the homepage Hero section
- **WHEN** a user navigates to the homepage (`/`)
- **THEN** the Hero section (`#top`) renders the atelier founder image with descriptive `alt` text and right-aligned focal positioning so the founder and product are clearly visible beside the headline

### Requirement: Why section displays intergenerational workshop imagery
The "Why TAWAF exists" section SHALL render a vertical (`aspect-[4/5]`) editorial portrait depicting a master woodworker and young apprentice operating precision woodworking machinery in a sunlit workshop, paired with descriptive `alt` text.

#### Scenario: Visitor views the Why section
- **WHEN** a user views the "Why TAWAF exists" section on the homepage
- **THEN** the section displays the intergenerational woodworking workshop portrait with descriptive `alt` text illustrating productive asset ownership and lasting family livelihood

### Requirement: Impact section displays formalized agro-industrial fulfillment banner
The "Impact & Ambition" section (`#impact`) SHALL render a wide (`h-[50vh]`) golden-hour photograph depicting a formalized West African agro-processing and export fulfillment warehouse with descriptive `alt` text above the impact metrics.

#### Scenario: Visitor views the Impact section
- **WHEN** a user scrolls to the "Impact & Ambition" section (`#impact`)
- **THEN** the top banner displays the formalized agro-processing and export fulfillment warehouse photograph with descriptive `alt` text
