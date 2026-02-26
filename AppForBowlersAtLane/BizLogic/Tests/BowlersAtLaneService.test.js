const BowlersAtLaneService = require('../BowlersAtLaneService');
const MockLaneGovernor = require('../../Adapters/OutgoingAdapters/MockLaneGovernor');
const MockLanesManager = require('../../Adapters/OutgoingAdapters/MockLanesManager');

describe('BowlersAtLaneService', () => {
  test('test_it_returns_a_greeting', () => {
    const service = new BowlersAtLaneService();
    expect(service.greeting()).toBe("Hello from Bowler At Lane");
  });

  test('test_register_bowler_returns_name', () => {
    const service = new BowlersAtLaneService();
    expect(service.registerBowler("Alice")).toBe("Alice");
  });

  test('test_bowler_arrived_notifies_lane_governor', () => {
    const service = new BowlersAtLaneService(new MockLaneGovernor());
    expect(service.bowlerArrived()).toBe("OK");
  });

  test('test_session_ended_notifies_lanes_manager', () => {
    const service = new BowlersAtLaneService(new MockLaneGovernor(), new MockLanesManager());
    expect(service.sessionEnded()).toBe("OK");
  });
});
