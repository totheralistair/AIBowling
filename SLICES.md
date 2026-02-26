# Slices

## Summary Table

| App | Slice | Do |
|---|---|---|
| Checkin | 1 | greeting |
| Checkin | 2 | checkinBowler notifies Lanes Manager (mock) |
| Lanes Manager | 1 | greeting |
| Lanes Manager | 2 | checkinBowler returns name |
| Lanes Manager | 3 | assignLane returns name and lane constant |
| Lanes Manager | 4 | assignLane notifies Lane Governor (mock) |
| Lanes Manager | 5 | laneFreed from Bowler At Lane frees up the lane |
| Lanes Manager | 6 | collectPayment notifies Payment Gateway (mock) |
| Lane Governor | 1 | greeting |
| Lane Governor | 2 | activate returns ack |
| Lane Governor | 3 | bowlerArrived returns ack |
| Lane Governor | 4 | pinSituation pushes to Bowler At Lane (mock) |
| Bowler At Lane | 1 | greeting |
| Bowler At Lane | 2 | registerBowler returns name |
| Bowler At Lane | 3 | bowlerArrived notifies Lane Governor (mock) |
| Bowler At Lane | 4 | sessionEnded notifies Lanes Manager (mock) |
| Bowler At Lane | 5 | pinSituation receives pin data from Lane Governor |

---

## AppForCheckin

### Slice 1 — Greeting
- `CheckinService.greeting()` returns `"Hello from Checkin App"`
- Test: `test_it_returns_a_greeting`
- Status: done

### Slice 2 — checkinBowler notifies Lanes Manager (mock)
- `CheckinService.checkinBowler(name)` calls `MockLanesManager.bowlerArrived(name)`, returns name
- `MockLanesManager` lives in `Adapters/OutgoingAdapters/`
- Test: `test_checkin_bowler_notifies_lanes_manager`
- Status: done

---

## AppForLanesManager

### Slice 1 — Greeting
- `LanesManagerService.greeting()` returns `"Hello from Lanes Manager"`
- Test: `test_it_returns_a_greeting`
- Status: done

### Slice 2 — checkinBowler returns name
- `LanesManagerService.checkinBowler(name)` returns `name`
- No secondary actor yet
- Test: `test_checkin_bowler_returns_name`
- Status: done

### Slice 3 — assignLane returns name and lane constant
- `LanesManagerService.assignLane(name)` returns `{ name: name, lane: 5 }`
- No secondary actor yet
- Test: `test_manager_assigns_lane_returns_name_and_lane_number`
- Status: done

### Slice 4 — assignLane notifies Lane Governor (mock)
- `LanesManagerService.assignLane(name)` calls `laneGovernor.activate()`, returns `{ name, lane: 5 }`
- `MockLaneGovernor.activate()` returns `"OK"`
- `MockLaneGovernor` lives in `Adapters/OutgoingAdapters/`
- Constructor introduced with `laneGovernor`
- Slices 1, 2, 3 tests stay with no constructor argument
- Test: `test_assign_lane_notifies_lane_governor`
- Status: in progress

### Slice 5 — laneFreed from Bowler At Lane frees up the lane
- `LanesManagerService.laneFreed()` returns ack
- No secondary actor needed
- Test: `test_lane_freed_returns_ack`
- Status: pending

### Slice 6 — collectPayment notifies Payment Gateway (mock)
- `LanesManagerService.collectPayment(amount)` calls `paymentGateway.charge(amount)`, returns `"OK"`
- `MockPaymentGateway.charge(amount)` returns `"OK"`
- `MockPaymentGateway` lives in `Adapters/OutgoingAdapters/`
- Constructor extended with `paymentGateway` alongside existing `laneGovernor`
- Test: `test_collect_payment_notifies_payment_gateway`
- Status: in progress

---

## AppForLaneGovernor

### Slice 1 — Greeting
- `LaneGovernorService.greeting()` returns `"Hello from Lane Governor"`
- Test: `test_it_returns_a_greeting`
- Status: pending

### Slice 2 — activate returns ack
- `LaneGovernorService.activate()` returns `"OK"`
- No constructor arguments
- Test: `test_activate_returns_ack`
- Status: in progress

### Slice 3 — bowlerArrived returns ack
- `LaneGovernorService.bowlerArrived()` returns `"OK"`
- No secondary actor — pinsetter is internal hardware, not a software port
- No constructor arguments
- Test: `test_bowler_arrived_returns_ack`
- Status: in progress

### Slice 4 — pinSituation pushes to Bowler At Lane (mock)
- `LaneGovernorService.pinSituation(pins)` calls `bowlerAtLane.pinSituation(pins)`, returns `pins`
- `MockBowlerAtLane.pinSituation(pins)` returns `pins`
- `MockBowlerAtLane` lives in `Adapters/OutgoingAdapters/`
- Constructor introduced with `bowlerAtLane`
- Test: `test_pin_situation_pushes_to_bowler_at_lane`
- Status: in progress

---

## AppForBowlersAtLane

### Slice 1 — Greeting
- `BowlersAtLaneService.greeting()` returns `"Hello from Bowler At Lane"`
- No constructor arguments
- Test: `test_it_returns_a_greeting`
- Status: pending

### Slice 2 — registerBowler returns name
- `BowlersAtLaneService.registerBowler(name)` returns `name`
- No secondary actor yet
- Test: `test_register_bowler_returns_name`
- Status: pending

### Slice 3 — bowlerArrived notifies Lane Governor (mock)
- `BowlersAtLaneService.bowlerArrived()` calls `laneGovernor.bowlerArrived()`, returns `"OK"`
- `MockLaneGovernor.bowlerArrived()` returns `"OK"`
- `MockLaneGovernor` lives in `Adapters/OutgoingAdapters/`
- Constructor introduced with `laneGovernor`
- Test: `test_bowler_arrived_notifies_lane_governor`
- Status: pending

### Slice 4 — sessionEnded notifies Lanes Manager (mock)
- `BowlersAtLaneService.sessionEnded()` calls `lanesManager.laneFreed()`, returns `"OK"`
- `MockLanesManager.laneFreed()` returns `"OK"`
- `MockLanesManager` lives in `Adapters/OutgoingAdapters/`
- Constructor extended with `lanesManager` alongside existing `laneGovernor`
- Test: `test_session_ended_notifies_lanes_manager`
- Status: done

### Slice 5 — pinSituation receives pin data from Lane Governor
- `BowlersAtLaneService.pinSituation(pins)` returns `pins`
- Incoming port — no secondary actor
- No constructor arguments needed
- Test: `test_pin_situation_returns_pins`
- Status: done
