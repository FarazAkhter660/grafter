# Grafterr Landing Page (React)

## Chosen stack
- React 18 with functional components and hooks
- Vite
- Plain CSS (no framework)

## Setup instructions
1. Install Node.js 18+.
2. Install dependencies:
   - `npm install`
3. Start dev server:
   - `npm run dev`
4. Build for production:
   - `npm run build`

## Approach
- Built the page using small reusable UI components and section composition.
- Loaded all textual and image content from `src/data/content.json`.
- Added an async API simulation in `src/services/api.js` with 1000-1500ms delay.
- Implemented two custom hooks:
  - `useContent` for data fetching, loading/error/retry management
  - `useCarousel` for responsive carousel state, arrows, and touch swipe
- Added skeleton placeholders while loading and fade-in animation for loaded content.
- Implemented responsive behavior for:
  - Desktop: 3 visible cards
  - Tablet: 2 visible cards
  - Mobile: 1 visible card + swipe support

## Assumptions
- Font family is `Inter`.
- Exact product images from Figma were unavailable, so vector placeholders are used under `public/images`.
- Breakpoints used:
  - Mobile: `<768px`
  - Tablet: `768px - 1099px`
  - Desktop: `>=1100px`

## Screenshot placeholders
- Add desktop screenshot here after running locally.
- Add mobile screenshot here after running locally.

## Deliverables checklist
- [ ] Live deployed URL
- [ ] Screenshot comparison: implementation vs Figma
