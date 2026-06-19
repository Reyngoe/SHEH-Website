# SHEH Website Project — Status Summary

*Last updated: 2026-06-19 (after the Our Story dial-in pass). This file
briefs a brand-new session (or person) with no other context. Update it
at the end of every completed task (CLAUDE.md rule 8).*

## Project basics

- **SHEH** stands for **Start Hard End Hard** — a bar company founded by
  **Jacob and Patrick** (two founders; first names used in the welcome
  email sign-off). Public contact email: **the1sheh@gmail.com**.
- **Site:** static HTML/CSS/JS, no build step, hosted on **GitHub Pages**
  from the `main` branch of **Reyngoe/SHEH-Website**, custom domain
  **shehthrive.com** (via `CNAME`). Work happens on `claude/*` branches
  and merges through pull requests the owner approves.
- **Owner is a non-technical founder.** Explain changes in plain language.
  Never invent product/company facts — use `[PENDING: …]` placeholders and
  log them in `PENDING.md`.
- **Naming rules:** "SHEH" casual, "S.H.E.H" stylized, "The S.H.E.H
  Company" formal (full voice guide in the project brief).
- **Flagship brand sayings:** the full signature quote — "Start hard
  today, be harder than yesterday, for today is yesterday's tomorrow." —
  and "Built not given." The full quote is the primary representation;
  "Harder than yesterday" is an allowed short form but never an exclusive
  replacement.
- **Bar lineup (preliminary, marked as subject to change everywhere it
  appears):** First Light (peanut butter & dark chocolate), The Grind
  (coffee & cacao), Last Rep (salted caramel & almond). Pricing not set;
  full ingredient lists to come at launch.

## Completed and live, page by page

- **`index.html` (Home):** one-page landing — hero ("Start Hard. End
  Hard."), **The Code section (dial-in pass done 2026-06-13):** now a
  five-entry condensed creed mirroring the Philosophy pillars (Built not
  given · Start hard · End hard · Hard not harsh · The Long Game, each a
  one-liner with bolded title), closed by a "Read the full creed" link to
  philosophy.html and, beneath the trail divider as the section's closing
  beat, the full signature quote set quietly and centered. The old
  "Life starts hard." headline and three-line code are gone; the section
  is now titled simply "The Code". Product cards for the three bars (with
  the "preliminary lineup" footnote) — First Light's tagline is now
  "Peanut butter & dark chocolate. For the first hour." About section
  says "We're here to **fuel** the one you already are" (founder ruling).
  Mailchimp email signup (inline confirmation, duplicate/double-submit
  handling), footer with real Instagram and YouTube links plus an Email
  mailto link (the1sheh@gmail.com), and **Old Man Roy**, the SHEH mentor
  chat (`mentor.js` + `mentor-words.js`); Roy's answer about the bars
  includes a spoken short form of the preliminary disclaimer. Footer
  copyright reads "The S.H.E.H Company" (formal form) like every other
  page.
- **`our-story.html` (Our Story):** founders' story page, written in the
  founders' "we" voice (the standing exception to the second-person rule).
  **Full content rebuild done 2026-06-19** with owner-approved copy: H1 is
  now "Two Friends, One Code" (was "…One Standard"); the Foundation,
  bios ("Built between shifts"), 2023 origin, and "Two kitchens, the hard
  way" sections all carry new copy; the old "Wholesome and legit / The
  Standard" closing section is replaced by an **"Our People"** section
  ("The people behind us") thanking the circle behind the founders
  (Rebeca by name for Jacob; family/friends for Patrick), closing on
  "Built not given, but never built alone." Layout, kickers, the two CTA
  buttons, and the signature-quote block are unchanged. Patrick's bio and
  his family reference are owner-approved **placeholder** pending his own
  wording (logged in PENDING.md).
- **`philosophy.html` (Philosophy):** the "Start Hard, End Hard"
  manifesto, just revised with the **owner-finalized five pillars**:
  01 **Built not given** · 02 **Start hard** · 03 **End hard** ·
  04 **Hard not harsh** · 05 **The Long Game**. The full signature quote
  stands as the readable centerpiece section, followed by a call to
  action (Our Story link + email signup). **Brand-saying background
  treatment:** "HARDER THAN YESTERDAY" drifts behind the pillars as three
  huge hollow-outline ghost words (~5% visibility, aria-hidden,
  unselectable) — texture, not competition. "Built not given" is
  deliberately NOT a watermark since it already headlines Pillar 01.
  Owner may still ask to dial the watermark "lighter" or "stronger"
  (a one-number opacity change). Merged in PR #10.
- **`faq.html` (FAQ):** twelve owner-approved questions and answers
  (company-"we" voice allowed here).
- **`brochure.html`:** printable tri-fold sales brochure; the site nav on
  it is screen-only and never prints. Carries the bar lineup and the
  preliminary-flavors footnote. The contact-panel email is now a live
  mailto link on screen (prints as plain text). Both QR codes were
  machine-verified in task 6: they decode to exactly
  https://shehthrive.com and https://www.instagram.com/the1sheh.
  Its Our Story panel now also says "fuel the one you already are"
  (same founder ruling as the homepage).
- **Navigation:** responsive menu (`.site-nav`, hamburger on mobile) on
  all five pages, order **Home, Our Story, Philosophy, FAQ** — identical
  everywhere except the `aria-current="page"` highlight.
- **`content/` kit (not web pages):** `welcome-email.md` (signed Jacob &
  Patrick) and `youtube-outlines.md` (five video outlines).

## Standing rules (full text in CLAUDE.md)

1. Every page appears in the nav menu; the menu is identical across all
   pages (only `aria-current` may differ). Verify when touching any page.
2. New page → ask the owner whether/where it joins the menu BEFORE adding.
3. Never remove/reorder/rename menu items or change the mobile menu
   without asking the owner first.
4. All site copy addresses the reader in second person, except Our Story
   (founders' "we") and FAQ answers where "we" is the company. Enforced
   in the task 6 sweep.
5. Flagship brand sayings as defined above; full quote is primary,
   "Harder than yesterday" short form never exclusive.
6. Motto punctuation: periods — "Start Hard. End Hard." — for
   display/standalone use (hero, covers, footers, merch); comma —
   "Start Hard, End Hard" — only when it flows inside a sentence.
   Both are correct in their context; intentional, not drift.
7. Metaphor hierarchy: the road/walk is the philosophy metaphor (life,
   the long game); the climb is the action metaphor (effort, training,
   product). Both sanctioned; never mixed within a single line.
8. At the end of every completed task, update STATUS.md before stopping
   for owner review; it must fully brief a new session on its own.

## Task 6 sweep — done (2026-06-12)

The site-wide verification/cleanup pass is complete. Verified clean:
naming forms (SHEH / S.H.E.H / The S.H.E.H Company) everywhere; the
signature quote character-for-character in all six places it appears
(philosophy, our-story, brochure, three Roy lines, plus the content
kit); "Built not given" only in its finalized no-comma form; "Harder
than yesterday" used only as a short form with the full quote present;
second-person voice holding everywhere it should; all internal nav and
anchor links; both brochure QR codes (machine-decoded). Changed: the
two mailto links (homepage footer + brochure), the homepage copyright
line fixed to the formal "The S.H.E.H Company", and `flex-wrap` added
to the homepage footer so the longer link row wraps on small phones.
External URLs (Instagram, YouTube, Mailchimp) could not be live-tested
from the build environment (network-restricted); verified by
inspection against the known handles. A **tone alignment report**
(philosophy page as gold standard) was delivered in chat for the
owner's per-page dial-in passes.

## Homepage dial-in pass — done (2026-06-13)

The owner's first dial-in pass (homepage), with owner-approved copy
used verbatim, plus the owner's rulings on the three tone-report
decisions:

- **The Code section** rebuilt as the five-entry condensed creed +
  "Read the full creed" link + the full signature quote as the quiet,
  centered closing beat (details in the index.html entry above).
- **First Light tagline** is now "Peanut butter & dark chocolate. For
  the first hour." The other two card taglines are unchanged.
- **Feed → fuel:** "We're here to fuel the one you already are" on the
  homepage and in the brochure (Roy already said "fuel") — the verb is
  now consistent in all three places.
- **Roy alignment:** Roy's "Earned, not given." reply in
  `mentor-words.js` now uses the finalized flagship form "Built not
  given." (no comma). Crisis-referral lines untouched.
- **Two new standing rules added to CLAUDE.md** (motto punctuation and
  metaphor hierarchy — rules 6 and 7; the STATUS.md rule is now rule 8).
- Everything else on the homepage stayed as it was: hero, "Fuel for the
  climb" header, signup section, footer.

All three tone-report decisions are resolved and moved to the Resolved
table in PENDING.md.

## Our Story dial-in pass — done (2026-06-19)

The owner's second per-page dial-in pass (Our Story), owner-approved copy
used verbatim. The page keeps its "we" voice (the standing second-person
exception). What changed:

- **H1** "Two Friends, One Standard" → **"Two Friends, One Code."**
- **The Foundation** section: new copy (best friends since middle school,
  Mt. Woodson hikes, fishing San Diego County, the event crew, twenty-some
  years).
- **Bios** ("Built between shifts"): rewritten for both founders — Jacob
  (family man first, builder's wiring) and Patrick (earned his way to the
  Navy the long way).
- **2023 origin** section: new copy (early risers, brutal hours, chasing
  cleaner fuel, made our own).
- **"Two kitchens, the hard way":** expanded to three paragraphs,
  introducing Rebeca's role and ending on "building it good, or not at all."
- **Closing section replaced:** the old "Wholesome and legit / The
  Standard" section is now **"Our People" → "The people behind us"**,
  thanking the people behind the founders.
- Signature quote and both CTA buttons unchanged, after the new section.
- **Consistency fix on `index.html`:** the about-section header
  "Two friends, one standard" → **"Two friends, one code"** (sentence case
  to match the homepage's other headers) so it echoes the Our Story title.
  This was the only homepage change in the task.

## PENDING.md current state

- **Open `[PENDING]` placeholders:** none.
- **Awaiting founder decisions:** none — the three tone-report decisions
  (motto punctuation, feed-vs-fuel, Roy's "Earned, not given") were
  ruled on and applied in the homepage dial-in pass.
- **Awaiting founder review:** placement of the preliminary-flavor-lineup
  disclaimer (brochure, product cards, Roy's spoken answer) — review
  before printing the brochure. Also: Patrick to review and supply his
  own wording for his bio and his family reference on the Our Story page
  (current copy is owner-approved placeholder).
- **Founder homework (business, not website):** research California
  cottage food / home-kitchen rules before selling publicly; decide bar
  pricing before launch (FAQ says "not set yet — announced at launch").
  Also still pending: real product/founder photos (the four marked
  photo-slot placeholders on the homepage stay until photos exist).

## What remains

- Owner reviews the Our Story dial-in pass (this task), then runs the
  remaining **per-page dial-in passes** on FAQ, the brochure, and Roy's
  lines before calling the site final.
- Patrick's own wording for his Our Story bio and family reference.
- Photos and the brochure disclaimer sign-off (see PENDING.md).
