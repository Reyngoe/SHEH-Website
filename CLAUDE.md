# CLAUDE.md — standing rules for working on the SHEH website

These rules apply to every session working in this repository.

## Navigation menu rules

1. **Every page on this site must appear in the navigation menu, and the
   menu must be identical across all pages.** If you touch a page, verify
   its menu matches the others (same items, same order); the only
   per-page difference allowed is the `aria-current="page"` highlight.

2. **When a new page is created, ask the owner whether it should be added
   to the menu and where it should sit in the order — BEFORE adding it.**
   Never silently add or omit a menu item.

3. **Never remove or restructure the menu without asking the owner
   first.** This includes removing items, reordering, renaming labels,
   or changing how the mobile menu works.

## Context

- The responsive navigation menu (`.site-nav`, with hamburger toggle on
  mobile) exists on every page: `index.html`, `our-story.html`,
  `faq.html`, and `brochure.html` (screen-only there — it never prints).
  Preserve it in all future work.
- The owner is a non-technical founder: explain changes in plain
  language, never invent product/company facts (use `[PENDING: …]` and
  log them in `PENDING.md`), and follow the brand voice guide in the
  project brief (SHEH casual, S.H.E.H stylized, The S.H.E.H Company
  formal).
