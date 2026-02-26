# Slices

## AppForCheckin

### Slice 1 — Greeting constant
- `CheckinService.greeting()` returns `"Checkin App ready"`
- Test: `test_it_returns_a_greeting`
- Status: done

### Slice 2 — Checkin bowler notifies Lanes Manager (mock)
- `CheckinService.checkinBowler(name)` calls `MockLanesManager.bowlerArrived(name)`, returns name
- `MockLanesManager` lives in `Adapters/OutgoingAdapters/`
- Test: `test_checkin_bowler_notifies_lanes_manager`
- Status: done

---

## AppForLanesManager

### Slice 1 — Greeting constant
- `LanesManagerService.greeting()` returns `"Lanes Manager ready"`
- Test: `test_it_returns_a_greeting`
- Status: done

### Slice 2 — Checkin bowler returns name
- `LanesManagerService.checkinBowler(name)` returns `name`
- No secondary actor yet
- Test: `test_checkin_bowler_returns_name`
- Status: done

### Slice 3 — Manager assigns lane, returns name and constant lane number
- `LanesManagerService.assignLane(name)` returns `{ name: name, lane: 5 }`
- Primary actor: Manager
- No secondary actor
- Test: `test_manager_assigns_lane_returns_name_and_lane_number`
- Status: done

