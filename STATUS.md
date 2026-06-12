# SHEH Website Project — Status Summary

*Last updated: 2026-06-12. This file briefs a brand-new session (or person)
with no other context. Update it at the end of every completed task
(CLAUDE.md rule 6).*

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
  real Instagram and YouTube links, and **Old Man Roy**, the SHEH mentor
  chat (`mentor.js` + `mentor-words.js`); Roy's answer about the bars
  includes a spoken short form of the preliminary disclaimer.
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
  preliminary-flavors footnote.
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

## PENDING.md current state

- **Open `[PENDING]` placeholders:** none.
- **Queued for task 6:** make the email in `brochure.html`
  (About/Contact panel) a clickable `mailto:the1sheh@gmail.com` link; add
  the same mailto link to the `index.html` footer near the social links.
- **Founder homework (business, not website):** research California
  cottage food / home-kitchen rules before selling publicly; decide bar
  pricing before launch (FAQ says "not set yet — announced at launch").
  Also still pending from earlier discussions: real product photos.
- **Awaiting founder review:** placement of the preliminary-flavor-lineup
  disclaimer (under the bar list in the brochure, under the product cards
  on the site, and in Roy's spoken answer) — review before printing the
  brochure.

## What remains

- **Task 6 — the final placeholder sweep:** site-wide pass enforcing the
  second-person voice rule, checking SHEH/S.H.E.H/The S.H.E.H Company
  naming forms, verifying the signature quote appears word-for-word, the
  two mailto links above, and any leftover filler text. Owner will send
  the finalized task 6 scope.
- **Note:** the owner plans additional dial-in passes on other pages
  (similar to the Philosophy revision) before calling the site final —
  so task 6 may not be the true last pass.
