# Styled HTML Website (Personal Portfolio)

This project builds on the previous HTML-only website by applying CSS to create a clean, responsive, and accessible portfolio. The focus is on layout, color, typography, and component styling across multiple pages (Home, Projects, Articles, Contact).

## Project Goals
- Convert an existing HTML structure into a fully styled, responsive website.
- Use CSS (Flexbox, media queries, box model) to build adaptive layouts.
- Apply a consistent color palette and typography system.
- Style shared components: navigation bar, hero, cards, lists, forms, and footer.
- Ensure accessibility and maintainability (semantic HTML + clean CSS).

## Implementation Notes
- Structure
  - Reused the multi-page HTML from the previous project.
  - Added semantic sections (header, main, section, article, footer) and consistent heading hierarchy.
- CSS Organization
  - CSS variables in :root for colors, typography, spacing, shadows, and transitions.
  - Component-based sections: navbar, hero, about cards, testimonials/reviews, contact form, footer.
  - Reusable utilities: container, section spacing, social links, focus styles.
- Responsiveness
  - Flexbox for layout, flex-wrap for grids, and gap for spacing.
  - Mobile-first media queries at 768px (and up) for text scaling and layout shifts.
- Visuals
  - Pastel color palette via CSS variables.
  - Google Fonts for headings/body.
  - Subtle hover and focus states; shadows for depth on cards.
- Accessibility
  - Sufficient color contrast for text over header/footer backgrounds.
  - Larger tap targets, visible focus outlines, aria-labels on social links.

## Skills Learned
- Designing responsive layouts with Flexbox and media queries.
- Building a scalable design system with CSS variables.
- Applying typography scales and spacing rhythm.
- Structuring semantic, accessible HTML with consistent class naming (BEM-ish).
- Managing multi-page consistency (shared nav/footer/components).

## Completion Checklist
- [x] Fully styled, responsive website matching the previous HTML structure
- [x] Consistent color scheme and typography across all pages
- [x] Proper use of Flexbox, media queries, and the box model
- [x] Responsive navigation bar
- [x] Well-styled contact form (labels, inputs, accessibility)
- [x] Google Fonts integrated (typography enhancement)
- [x] Dark mode via CSS variables (prefers-color-scheme + toggle)


## Screenshots

![Desktop screenshot of the portfolio](./Personal%20Portfolio%20-%20Screenshot%202025-10-03%20222310.png "Desktop")

![Tablet screenshot of the portfolio](./Personal%20Portfolio%20-%20Screenshot%202025-10-03%20222347.png "Tablet")

![Mobile screenshot of the portfolio](./Personal%20Portfolio%20Screenshot%202025-10-03%20222348.png "Mobile")
