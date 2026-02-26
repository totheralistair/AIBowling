# System Responsibilities

## Checkin App
**Job:** Let a bowler check in or out, and register that person's entry with the Lanes Manager.

**Not My Job:**
- Assigning lanes
- Knowing lane state
- Scoring
- Payment

---

## Lanes Manager
**Job:** Owns all lane state (free/occupied), assigns lanes to bowlers, manages Lane Governors, collects payment via Payment Gateway.

**Not My Job:**
- Collecting bowler personal details
- Scoring
- Knowing bowler names (once handed off to a lane)

---

## Lane Governor
**Job:** Governs the physical lane — activates/deactivates the lane, commands the pinsetter, tracks roll 1 or roll 2, reports pin situation to Bowler At Lane app. Pinsetter control is internal to the Lane Governor and is not a software port.

**Not My Job:**
- Knowing the bowler's name
- Scoring or game rules
- Payment
- Lane assignment

---

## Bowler At Lane App
**Job:** Lets the bowler register at the lane by typing their name, receives pin situation from Lane Governor, applies scoring rules (pluggable per game type), displays game state to bowler, notifies Lanes Manager when session ends.

**Not My Job:**
- Physical lane control
- Payment
- Lane assignment
- Knowing which lane it is running on
