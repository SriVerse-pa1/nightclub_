# Nightclub — The Complementary Network for Builders

> A paid, community-driven network for builders (developers, product designers, growth strategists, AI researchers) from the Telugu AI community. Built with React 18, TypeScript, Tailwind CSS, Lucide icons, and Canvas Confetti.

---

## 🌟 Core Architecture & Signature Features

### 1. "Find Your Four" (Signature Constellation)
- **Central Concept:** The system introduces people instead of endless cold scrolling. Matches people who **complement** each other (Build + Design + Business + Research).
- **Interactive Orbit Ring:** User in the center with 4 orbiting candidates, role color indicators, connecting lines, and real-time **Team Balance Score (e.g. 0.92 / 1.0)**.
- **Detailed Drawer:** Four score progress bars (Skill Complementarity, Shared Ambition, Working Style Alignment, Availability Overlap), plain-language "Why they were picked", shared focus tags, and availability schedules.
- **Actions:** "Accept Team" (triggers confetti celebration modal leading directly into the private Build Room), "Decline [Name]" (member permanently excluded from candidate pool), and "Rematch Team" (recomputes graph).

### 2. 8 Personal Monthly Mentor Sessions
- **Persistent Credit Header:** Displays "Credits: 5 of 8 left, resets on the 1st".
- **Visual of 8 Dots:** Dedicated visual tracking 30-minute monthly allowance.
- **Booking Flow:** Calendar slot picker with goal input and explicit credit deduction confirmation banner.
- **My Sessions:** Upcoming video call links and past session review with star rating and feedback modal.

### 3. Collaborative Build Rooms
- **Team of Five Header:** Displays all 5 members with role chips.
- **Interactive Kanban Board:** To Do, Doing, and Done columns with status transitions, priority badges, and an "Add Task" modal.
- **Milestones Timeline:** Project roadmap with delivery targets.
- **Shared Artifacts & Telemetry:** File uploads, downloads, and real-time team activity feed.

### 4. Complete Application Structure (All 22 Screens)
1. **Landing Page (`/`):** 10 curated sections including interactive ring preview, 3 problem points, 3 steps how it works, before/after comparison table, mentor spotlight, community metrics, single plan card, and FAQ accordions.
2. **Membership & Pricing (`/pricing`):** Single prominent Founding Builder plan (₹1,499/mo), 8-dot credit explainer, honest comparison with free networks, cancellation and refund policy, and sticky mobile bar.
3. **Authentication (`/login`, `/signup`, `/forgot-password`, `/verify-email`):** Split-screen desktop with live teammate preview card, password strength meter, 6-digit OTP verification with countdown timer, and password reset.
4. **Checkout & Result (`/checkout`, `/payment-result`):** 2-column checkout with UPI, Card, Netbanking for India; success, failed (with retry), and pending states.
5. **Onboarding Wizard (`/onboarding`):** 6-step matching persona builder (About you, Skills with level sliders & beginner-friendly note, Ambition & 30/90-day goals, Offer & Need matrix, Working style sliders, Portfolio links) with "Building your persona" progress transition screen.
6. **Main Dashboard (`/dashboard`):** Greeting, Find Your Four interactive ring, unread messages, 5/8 mentor credits module, suggested live challenge, recent team activity, new introduction, and state toggles (Returning, First-time, Cohort matching pending).
7. **Find Your Four Full-Screen (`/find-your-four`):** Full-screen signature screen with balance indicator, member drawers, rematch modal, celebration modal, and "How this works" sheet.
8. **Member Discovery (`/discover`):** Builders, Circles, and Projects tabs; search, role filter panel, location filter, grid vs list toggle, empty states, and mobile filter bottom sheet.
9. **Connections (`/connections`):** Requests, Sent, and Connected tabs; Accept/Decline actions, direct message button, block, and report overflow menus.
10. **Private Messages (`/messages`):** 3-zone layout (threads list with unread counters, chat window with message bubbles & typing simulation, right profile info panel with mute/block/report).
11. **Build Overview & Build Room (`/build`, `/build-room`):** Projects list, team avatars, Kanban task board, milestones, files, and activity.
12. **Build Challenges (`/challenges`):** Upcoming, live, and past sprint hackathons; prize pools, guidelines modal, team workspace formation, and submission modal.
13. **Mentorship Hub (`/mentorship`):** 8-credit allowance header, mentor profiles (Google DeepMind, Swiggy, Hyd Angels), slot booking modal, upcoming sessions, and feedback reviews.
14. **Careers Board (`/careers`):** Jobs, Internships, and Project Invites; skill match percentage analyzer comparing candidate persona against requirements, and 1-click application.
15. **Community Circles (`/circles`):** Moderated domain circles (AI, Startups, Design, Product); feeds, posts, likes, comments, and event RSVPs.
16. **User Profiles (`/profile`, `/member-profile`):** Own profile with strength meter, evidence badges, Builder Journey timeline (built, learned, contributed, mentored), and slide-out Edit drawer. Member profile seen by others protects contact details until mutual connection.
17. **Notifications Center (`/notifications`):** Grouped by Today, This week, Earlier; type-based icons, unread state, mark all read, and deep navigation.
18. **Account Settings (`/settings`):** Account info, notification toggles with quiet hours time pickers, privacy controls, language switcher (English & Telugu), theme selector (Nightclub Aubergine, Strict Monochrome, Light Mode), billing, and DPDP-compliant data export/deletion.
19. **Subscription Management (`/subscription-flow`):** Caring pause/cancellation survey, retention preview ("What you will lose"), 1-month pause option, and lapsed membership view with "Rejoin" action.
20. **Admin Console (`/admin`):** Internal community operations: cohort health & role distribution (Build, Design, Business, Research), regional hub metrics, reports queue with Ban/Dismiss actions, member directory audit, and mentor calendar capacity.
21. **System & Error Pages (`/system-pages`):** 404 Not Found, Offline / No Internet, 500 Server Error, Scheduled Maintenance, App Update Available, and Access Restricted.

---

## 🎨 Visual Identity & Design System

- **Nightclub Aubergine Dark Palette (Default):**
  - Background: `#17102A` / `#0F0A1C`
  - Raised Surface: `#22183B` / `#1E1537`
  - Hairline Borders: `#3A2E5C` / `#2B2144`
  - Primary Text: `#F3EEFF`
  - Muted Text: `#A99CCB`
  - Accent / Primary Action / "You": `#FFB547` (Warm Amber)
- **Role Colors:**
  - Build (Developers): `#38BDF8` (Sky Blue)
  - Design (UI/UX): `#F472B6` (Pink)
  - Business (GTM / Growth): `#FBBF24` (Gold)
  - Research (Indic NLP): `#2DD4BF` (Teal)
- **Strict Monochrome Theme:** Supported out-of-the-box via the theme switcher in Settings and App Header.
- **Typography:** Bricolage Grotesque for headings, DM Sans for body copy.
- **Responsiveness:** Full desktop 3-zone layout with left sidebar, tablet adaptive grids, and mobile thumb-friendly experience with bottom navigation bar and touch targets ≥ 44px.

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Built Application
```bash
npm run preview
```
