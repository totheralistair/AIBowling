# Walking Skeleton Protocol

A walking skeleton is the thinnest possible slice through the entire system that exercises all the major architectural joints. No real business logic — just enough to prove the structure works end to end.

---

## Step 1 — Main Business Use Case

Write the end-to-end flow through the system as a numbered use case, naming each human actor and each app in order. This narrative anchors all subsequent decisions.

**+Use and manage one bowling session (all actors, all apps)**

1. Each Bowler checks in using the [**Checkin App**], which notifies the [**Lanes Manager**] of the person's name and gets back an ack with the person's name.
2. The Manager uses the [**Lanes Manager**] to look up available lanes (from its own internal state) and assign a lane to the bowler. The [**Lanes Manager**] notifies the [**Lane Governor**] for that lane to activate — no bowler name is sent.
3. The Bowler walks to the lane and types their name into the [**Bowler At Lane**] tablet. The [**Bowler At Lane**] notifies the [**Lane Governor**] that the bowler has arrived and charged bowling time starts — no name is sent to the [**Lane Governor**].
4. After each roll, the [**Lane Governor**] commands the pinsetter, tracks roll 1 or roll 2, and notifies the [**Bowler At Lane**] of the pin situation. The [**Bowler At Lane**] applies the scoring rules and shows the bowler the current game situation.
5. At the end of the game, the Bowler starts a new game (charges keep accruing) or ends the session. If ending, the [**Bowler At Lane**] notifies the [**Lanes Manager**] that the lane is free again.
6. The Bowler returns to the desk. The Manager uses the [**Lanes Manager**] to collect payment and send it to the [**Payment Gateway Service**].
7. The [**Lanes Manager**] marks the bowler as done — any further bowling requires a new check-in.

**Key design decisions:**
- [**Lanes Manager**] owns all lane state — which lanes are free, occupied, who is on which lane.
- [**Lane Governor**] never receives a bowler's name — no Need-To-Know.
- [**Lane Governor**] receives two distinct notifications: activate (from [**Lanes Manager**]), and bowler arrived (from [**Bowler At Lane**]).
- Scoring rules live entirely in [**Bowler At Lane**] — pluggable for different game types.
- [**Bowler At Lane**] notifies [**Lanes Manager**] directly when session ends, bypassing [**Lane Governor**].

---

## Step 2 — System Partitioning

Confirm the Cockburn context diagram and RESPONSIBILITIES.md are up to date:
- One box per app
- Primary actors on the left with their use cases on the arrow
- Secondary actors on the right (external) or connected downward (internal)
- Each app has a one-sentence responsibility and a "Not My Job" list

---

## Step 3 — Hexagonal Structure per App

For each app confirm the folder structure is in place:
```
AppForXxx/
  BizLogic/
    XxxService.js
    Tests/
      XxxService.test.js
  Adapters/
    IncomingAdapters/
    OutgoingAdapters/
      MockYyy.js      ← one per secondary actor
  package.json
  jest.config.js
```

---

## Step 4 — Nano-Slicing per App

For each app, in order:

### Nano-slice A — Greeting (no secondary actor)
- `XxxService.greeting()` returns `"Hello from <AppName>"`
- No constructor arguments
- Test: `test_it_returns_a_greeting`

### Nano-slice B — Each secondary actor (one slice per actor)
- Add one secondary actor at a time
- Create `MockYyy` in `Adapters/OutgoingAdapters/`
- Inject via constructor
- Add one method that calls the mock and returns an observable result
- Test: `test_<primary_actor>_<action>_returns_<result>`

**Rule:** do not add a second secondary actor until the first is tested and committed.

---

## Step 5 — Verify the Skeleton

Once all apps have completed nano-slices A and B for all their secondary actors, trace the full business use case narrative from Step 1 through the code. Every handoff between apps should have a corresponding method and mock. If any handoff is missing, add the slice.

---

## Status Check — Bowling System

### Step 1 — Main Business Use Case
- Status: **done**

### Step 2 — System Partitioning
- Status: **done** — Cockburn diagram and RESPONSIBILITIES.md exist

### Step 3 — Hexagonal Structure
- AppForCheckin: **done**
- AppForLanesManager: **done**
- AppForLaneGovernor: **done** (folders exist, no code yet)
- AppForBowlersAtLane: **done** (folders exist, no code yet)

### Step 4 — Nano-Slicing

| App | Slice A (greeting) | Slice B1 (first secondary actor) | Slice B2 (second secondary actor) |
|---|---|---|---|
| AppForCheckin | done | done — MockLanesManager | n/a |
| AppForLanesManager | done | not started — MockLaneGovernor | not started — MockPaymentGateway |
| AppForLaneGovernor | done | not started — MockBowlerAtLane | n/a |
| AppForBowlersAtLane | not started | not started — MockLaneGovernor | not started — MockLanesManager |

### Step 5 — Full skeleton trace
- Status: **not started**
