---
title: Vehicle Asset Management Redesign
company: BT Group / Openreach
role: UX Research (discovery + usability testing), collaborated on service design
status: Paused pending funding — expected to move into build in roughly 6 months
---

# Vehicle Asset Management Redesign

**BT Group / Openreach · UX Research**

## The tool nobody trusted

Openreach engineers — the people who go out and physically repair connections — get assigned a vehicle to do that job. Managing thousands of those vehicles across BT and Openreach fell to a tool called eOrg: an interface that hadn't been meaningfully updated in years, originally built to track every kind of company asset from laptops to vans. Unstable access and broken links didn't help its reputation either.

eOrg handled allocation, reassignment, and location updates. Everything else — service bookings, repairs, daily vehicle checks — lived in Holman, the platform provided by the company's vehicle leasing partner. On paper, the two systems complemented each other. In practice, Fleet Managers had learned not to trust eOrg's data, so they defaulted to Holman even for the handful of things eOrg was supposed to own. A tool nobody trusts gets used less, which makes its data even staler — the system was quietly starving itself.

The asset management team brought me in with an open brief: understand what's actually broken, and build the case for whether it's worth fixing. There was no fixed delivery deadline — the timeline was set by how convincing the findings turned out to be.

## Phase 1 — understanding who actually touches this system

Three groups interact with vehicle allocation, each with a different stake:
- **Engineers/Drivers** — receive the vehicles, with the least reason to ever open the tool itself
- **Patch Managers** — the core users, allocating and reallocating vehicles within their patch
- **Fleet leads** — senior decision-makers, fewer in number but responsible for the calls that matter

I ran a 3-week discovery study — a week each for planning/recruitment, interviews, and analysis — with in-depth interviews across all three groups (6–8 Patch Managers, 4–6 Fleet leads, 3–5 Engineers), digging into current workflows, pain points, and what information actually mattered for their decisions.

Some of what came back:
- Allocation and relocation information was scattered across eOrg, Holman, **and** a third, separate "parking at home" tool — a single request meant chasing the same information across three systems
- Vehicles regularly went "stuck" — unallocated, with no one able to trace who'd last moved them or where they'd ended up
- Inconsistent parking data meant service bookings were sometimes made nowhere near where the engineer actually was, burning travel time that didn't need to be burned
- The tool's complexity meant people leaned on informal training and each other rather than the interface itself — the opposite of a system that should be self-serve

## Phase 2 — testing the answer, not just the problem

Design took those findings and built a to-be concept with an ambitious idea at its center: an **AI chat assistant** as the primary way to interact with the system — tell it what you need, and it acts — with the familiar dashboard kept underneath as a fallback layer.

I tested that concept over another 3-week round: Patch Managers on the desktop prototype (5–6 users, location-change tasks), Drivers on the mobile prototype (5–6 users, reallocation and location-change requests), watching for findability, understandability, and satisfaction.

The results were mixed in an interesting way. A "set as home location" checkbox, for instance, meant something different to nearly every Patch Manager who used it, and many expected their own team's vehicles to appear automatically on the dashboard rather than needing to search for them — labels, terminology, and page structure didn't always match what people expected, which slowed them down and pushed them back toward relying on old system knowledge. But where the flow *did* match expectations, people moved faster and more confidently than they ever had on eOrg.

## The plot twist

Here's the part that made this project a strategy story rather than just a usability report: **users preferred the plain dashboard over the AI chat.** Given the choice, Patch Managers and Drivers wanted information at a glance, not a conversation to have with a system before they could even see it.

That single finding reshaped the whole project. The chat feature — the flashiest, most expensive part of the concept — got deprioritized, freeing up budget. Focus shifted to something less exciting on a slide but more useful in practice: a fast, clear dashboard, automatic vehicle transfer when someone leaves a role, and information surfaced cleanly without a conversational middle step.

It also reframed the relationship with Holman. Rather than trying to out-build an established system, the plan became to **do less, better** — hand daily checks, repairs, and service bookings back to Holman entirely, and make the new tool the best possible version of one thing: allocation and relocation.

## What the prototype actually did

The final design included:
- A dashboard showing assigned vehicles and recent transfer/relocation activity, with clear empty states for new users
- A vehicle list with per-vehicle actions — transfer or amend location — surfaced directly on the card rather than buried in a menu
- A transfer-request flow (new driver, line manager, reason for transfer) and a manager-facing review screen to approve or reject, with a visible before/after record
- The AI assistant, kept as a lighter-weight option for people who preferred typing a request, rather than the primary path

*(An interactive, non-confidential recreation of this flow will sit here once built.)*

## Where it stands

Before the project paused, the concept and prototype were validated with real users across all three groups, with a clear, tested vision for what the tool needed to do. It's currently on hold pending funding, with a build phase expected to start in roughly six months.

## What I'd do differently

The work itself I'd stand behind. What I'd change is upstream of the research: pushing harder, earlier, for a clear funding roadmap before scoping the full vision. With that in hand, I'd have shaped a smaller proof-of-concept that fit inside the confirmed budget — something that could ship and prove value on its own — rather than designing the complete picture and losing momentum when the bigger ask stalled. It's the difference between "here's what good looks like" and "here's what we've already proven works."
