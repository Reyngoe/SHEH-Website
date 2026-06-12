# SHEH Website Project — Status Summary

*Last updated: 2026-06-12 (after the task 6 site-wide sweep). This file
briefs a brand-new session (or person) with no other context. Update it
at the end of every completed task (CLAUDE.md rule 6).*

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

- **`index.html` (Home):** one-page landing — product cards for the three
  bars (with the "preliminary lineup" footnote), Mailchimp email signup
  (inline confirmation, duplicate/double-submit handling), footer with
  real Instagram and YouTube links plus an Email mailto link
  (the1sheh@gmail.com, added in task 6), and **Old Man Roy**, the SHEH
  mentor chat (`mentor.js` + `mentor-words.js`); Roy's answer about the
  bars includes a spoken short form of the preliminary disclaimer. The
  footer copyright now reads "The S.H.E.H Company" (formal form) like
  every other page.
- **`our-story.html` (Our Story):** founders' story page, written in the
  founders' "we" voice (the standing exception to the second-person rule).
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
6. At the end of every completed task, update STATUS.md before stopping
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
owner's per-page dial-in passes; the three concrete inconsistencies it
surfaced (motto punctuation, feed-vs-fuel, Roy's "Earned, not given")
are logged in PENDING.md as decisions.

## PENDING.md current state

- **Open `[PENDING]` placeholders:** none.
- **Awaiting founder decisions (from the task 6 sweep):** motto
  punctuation ("Start Hard. End Hard." vs "Start Hard, End Hard" in
  prose); "feed" vs "fuel ... the one you already are"; whether Roy's
  "Earned, not given." should become "Built not given".
- **Awaiting founder review:** placement of the preliminary-flavor-lineup
  disclaimer (brochure, product cards, Roy's spoken answer) — review
  before printing the brochure.
- **Founder homework (business, not website):** research California
  cottage food / home-kitchen rules before selling publicly; decide bar
  pricing before launch (FAQ says "not set yet — announced at launch").
  Also still pending: real product/founder photos (the four marked
  photo-slot placeholders on the homepage stay until photos exist).

## What remains

- Owner reviews the task 6 results and the tone alignment report, then
  runs **per-page dial-in passes** (like the Philosophy revision) on the
  homepage, Our Story, FAQ, brochure, and Roy's lines before calling the
  site final.
- The three PENDING decisions above, plus photos and the brochure
  disclaimer sign-off.
