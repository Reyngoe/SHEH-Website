# CLAUDE.md — standing rules for working on the SHEH website

These rules apply to every session working in this repository.

## BRAND SCOPE (updated — PIVOT to general merch)
SHEH is a brand-forward MERCH company built on the SHEH ethos — NOT exclusively a protein bar company. The protein bar is now just ONE product. Bars are pushed far down the timeline (California cottage food law is costly/complex). Patches and shirts/apparel are the nearer-term focus. ALL merch is currently pending/new — nothing is buyable yet, but the site is being built to be READY to sell whatever becomes available, the same way it was previously prepped for the bars.

## SITE PURPOSE
shehthrive.com (this site) = the STOREFRONT / selling site. shehthrive.org = a separate content/entertainment hub (already live). Keep them cleanly parallel: this site sells; .org is content. Cross-link but never blur.

## GOVERNING DESIGN FEEL
The site should feel like a well-run old establishment — a market or tavern with goods on the shelf — NOT a typical online store. Atmosphere and brand are present, BUT commerce is the actual function: buying must be obvious, easy to find, and never buried (the tavern has a register everyone can find). Brand/philosophy is dialed BACK on the storefront — present in the air, not dominating the page (the full creed lives on the philosophy page). When inventory is thin or pending, the curated atmosphere should make it read as intentional, not empty.

## THREE-TIER CONTENT MODEL (governs the merch-pivot sweep)
1. BRAND tier (permanent/universal — keep nearly untouched): philosophy/creed, Our Story, Old Man Roy, flagship sayings, naming rules, brand voice.
2. PRODUCT-FRAME tier (make general/product-agnostic): homepage hero, nav, Shop areas, any CTA/tagline that treats "SHEH = bars." Rebuild to hold multiple modular, equal products.
3. BAR-SPECIFIC tier (PRESERVE but RELOCATE — never delete): macros, ingredients, kitchen-batch details, flavor/nut info, product cards. Move into a dedicated bars/provisions module marked "coming."
Products are modular, equal, and swappable. Each product category is its own clickable section that opens into a collection of individual items (not a single product). The site stays ready to turn any product on when ready.

## BUILD SEQUENCING
The merch-pivot CONTENT SWEEP comes first. The SHOPPING CART / e-commerce build is a SEPARATE later project (platform TBD — Shopify, Snipcart on static, print-on-demand like Printful, etc.). Do not build the cart during the content sweep.

## PRIVATE / NOT-FOR-DEPLOY CONTENT
There is a confidential product concept (the "Provisions" supplement system — see private planning note) that is intentionally NOT to appear on the live site yet. It is built and parked privately, pending product development and legal/IP groundwork. Do not render, link, or expose it on any public page until the owner explicitly says to deploy it.

## STANDING RULES (unchanged — still in force)
- One task at a time, full stop after each, owner approval before new tasks.
- No invented product/company facts — use placeholders + PENDING.md.
- No medical claims about the bars/supplements.
- Plain-language explanations; ask before anything involving money, accounts, or product facts.
- Second person everywhere it makes sense. EXCEPTIONS: Our Story (founders speak as "we") and FAQ ("we" = company).
- Flagship sayings: full signature quote (primary) "Start hard today, be harder than yesterday, for today is yesterday's tomorrow"; "Harder than yesterday" (short form, never used exclusively in place of the full quote); "Built not given" (no comma). Motto display: "Start Hard. End Hard." (periods, display) vs "Start Hard, End Hard" (comma, prose).
- Metaphor hierarchy: road/walk = philosophy metaphor; climb = action metaphor. Don't mix within a line.
- Old Man Roy widget palette: `mentor.js` (the shared Roy chat widget, on every page) styles itself from a fixed set of palette CSS variables. Those variables must stay DEFINED on every page. If a page rebuild renames or drops palette variables, alias the old names back on that page's `:root` so Roy doesn't render invisible (transparent panel/bubbles/borders). Before renaming any palette variable, grep `mentor.js` for `var(--` to get the authoritative list of what the widget depends on — don't trust a remembered list. (As of this writing that list is: --bone, --charcoal, --charcoal-deep, --ember, --ember-dark, --font-body, --font-head, --sand, --sand-light, --slate, --slate-light — but re-grep, don't assume.)
- At the end of every completed task, update STATUS.md so it can fully brief a brand-new session.

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
  it never prints). Menu order: Home, Shop, Our Story, Philosophy, FAQ
  ("Shop" → index.html#stock, owner-approved; a section link, so it never
  takes aria-current). Preserve it in all future work.
- The owner is a non-technical founder: explain changes in plain
  language, never invent product/company facts (use `[PENDING: …]` and
  log them in `PENDING.md`), and follow the brand voice guide in the
  project brief (SHEH casual, S.H.E.H stylized, The S.H.E.H Company
  formal).
