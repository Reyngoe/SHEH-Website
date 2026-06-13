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

## Copy and brand-saying rules

4. **All site copy addresses the reader directly in second person
   wherever it makes sense.** Exceptions: the Our Story page (founders
   speak as "we") and FAQ answers where "we" refers to the company.
   This rule gets enforced in the task 6 site-wide sweep.

5. **Flagship brand sayings** are (a) the full signature quote —
   "Start hard today, be harder than yesterday, for today is
   yesterday's tomorrow." — and (b) "Built not given." Use them where
   fitting across the brand. "Harder than yesterday" may be used as a
   short form, but never exclusively in place of the full quote: the
   full quote is the primary representation of the brand.

6. **Motto punctuation:** "Start Hard. End Hard." with periods for
   display/standalone use (hero, covers, footers, merch); "Start Hard,
   End Hard" with a comma only when it flows inside a sentence. Both
   are correct in their context — this is intentional, not drift.

7. **Metaphor hierarchy:** the road/walk is the philosophy metaphor
   (life, the long game); the climb is the action metaphor (effort,
   training, product). Both are sanctioned; don't mix them within a
   single line.

## Status summary rule

8. **At the end of every completed task, update STATUS.md to reflect the
   current project state before stopping for owner review.** STATUS.md
   must always be accurate enough to fully brief a brand-new session
   with no other context.

## Context

- The responsive navigation menu (`.site-nav`, with hamburger toggle on
  mobile) exists on every page: `index.html`, `our-story.html`,
  `philosophy.html`, `faq.html`, and `brochure.html` (screen-only there —
  it never prints). Menu order: Home, Our Story, Philosophy, FAQ.
  Preserve it in all future work.
- The owner is a non-technical founder: explain changes in plain
  language, never invent product/company facts (use `[PENDING: …]` and
  log them in `PENDING.md`), and follow the brand voice guide in the
  project brief (SHEH casual, S.H.E.H stylized, The S.H.E.H Company
  formal).
