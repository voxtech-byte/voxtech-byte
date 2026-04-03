# Design System Documentation: VoxTech Editorial Experience

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Concierge"**

This design system moves beyond the "SaaS template" aesthetic to embrace a high-end, editorial feel. We are not just building a web greeting service; we are creating a digital vessel for sentiment. The system rejects rigid, boxed-in layouts in favor of **intentional asymmetry, expansive breathing room, and tonal depth.** 

By prioritizing "Negative Space as a Feature," we ensure that the user’s content (the greetings) remains the hero. We break the "template" look by layering surfaces rather than boxing them, using typography as a structural element, and employing a "soft-touch" interaction model that feels fluid and premium.

---

## 2. Colors & Tonal Architecture
The palette is rooted in a foundation of authoritative deep blues (`primary`) and sophisticated, warm neutrals (`surface`). The accent `tertiary` (Gold/Ochre) is used sparingly to denote premium value and celebration.

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined solely through:
1.  **Background Color Shifts:** Moving from `surface` to `surface-container-low`.
2.  **Tonal Transitions:** Using subtle shifts in the `surface-container` tiers to define logical groupings.
3.  **Negative Space:** Increasing padding to create "invisible" containers.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine stationery.
*   **Base Layer:** `surface` (#f8f9fa) for the main canvas.
*   **Lowered Sections:** `surface-container-low` (#f3f4f5) for background sections that wrap content.
*   **Raised Elements:** `surface-container-lowest` (#ffffff) for cards and interactive modules to provide "pop" against the lower tiers.

### The "Glass & Gradient" Rule
To avoid a flat, "web 1.0" feel:
*   **Glassmorphism:** For floating navbars or modal overlays, use `surface` at 80% opacity with a `backdrop-blur` of 20px. 
*   **Signature Textures:** Use a subtle linear gradient (from `primary` to `primary-container`) for Hero backgrounds or main CTAs. This creates a "light-source" effect that feels three-dimensional and bespoke.

---

## 3. Typography
The typography system uses a pairing of **Manrope** (Display/Headline) for its geometric, modern authority and **Inter** (Title/Body) for its unparalleled readability.

*   **Display (Manrope, 2.25rem - 3.5rem):** Used for "Greeting Moments." Large-scale, low-tracking (letter-spacing: -0.02em) headers that feel like a luxury magazine cover.
*   **Headlines (Manrope, 1.5rem - 2rem):** Used to introduce new features or pricing tiers.
*   **Body (Inter, 0.875rem - 1rem):** The workhorse. High line-height (1.6) is mandatory to maintain the "Editorial" feel.
*   **Labels (Inter, 0.6875rem - 0.75rem):** All-caps with increased tracking (+0.05em) for small metadata, ensuring even the smallest text feels intentional.

---

## 4. Elevation & Depth
In this system, depth is a whisper, not a shout.

### The Layering Principle
Hierarchy is achieved by stacking `surface-container` tiers. 
*   *Example:* A Pricing Card (`surface-container-lowest`) sitting on a Pricing Section (`surface-container-low`). This creates a soft, natural lift without the "dirty" look of heavy shadows.

### Ambient Shadows
Where floating effects are required (e.g., a hovered card or a dropdown):
*   **Blur:** 32px to 64px.
*   **Opacity:** 4% - 6% using the `on-surface` color.
*   **Tinting:** Never use pure black. The shadow should be a deep navy tint to harmonize with the `primary` palette.

### The "Ghost Border" Fallback
If a border is required for accessibility (e.g., Input fields), use the `outline-variant` token at **20% opacity**. 100% opaque borders are forbidden as they "trap" the eye and break the fluid editorial flow.

---

## 5. Components

### Buttons (The "Jewel" Interaction)
*   **Primary:** `primary` (#001944) background with `on-primary` text. Use `xl` (1.5rem) rounded corners. On hover, transition to `primary-container` with a subtle `primary_fixed_dim` outer glow.
*   **Tertiary (Accent):** Use for "Gift" or "Upgrade" actions. `tertiary_fixed` background with `on-tertiary-fixed` text.

### Clean Cards
*   **Rule:** No dividers. Use `body-lg` for the header and `body-sm` for the description, separated by a 24px vertical gap.
*   **Corner Radius:** `lg` (1rem) for standard cards; `xl` (1.5rem) for featured hero cards.

### Accordion (FAQ)
*   Do not use boxes. Use a single `outline-variant` (at 20% opacity) horizontal line *only* between items. The active state should shift the background of the expanded item to `surface-container-high`.

### Pricing Tables
*   Avoid the "Grid" look. Use `surface-container-lowest` for the "Recommended" tier to make it physically appear to float above the others. Use `display-sm` for the price point to give it editorial weight.

### Input Fields
*   Minimalist "Underline" style or very low-contrast containers (`surface-container-highest` at 50% opacity). Focus states should animate a 2px `primary` underline or a soft `primary_fixed` outer glow.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins (e.g., a wider left margin for text) to create a sophisticated, non-centered editorial look.
*   **Do** use "Micro-copy" in `label-sm` above headlines to provide context (e.g., "THE TECHNOLOGY" in gold above a "Voice Synthesis" header).
*   **Do** use `0.5s` ease-in-out transitions for hover states to mimic the slow, premium feel of luxury motion.

### Don't:
*   **Don't** use pure black (#000000) for text. Use `on-surface` (#191c1d) to maintain visual softness.
*   **Don't** use traditional dividers or lines to separate content. Use the spacing scale (32px, 48px, 64px) to let the layout breathe.
*   **Don't** use sharp 0px corners. Every element must have at least a `sm` (0.25rem) radius to maintain the "Premium/Soft" brand promise.