const LaneGovernorService = require('../LaneGovernorService');
const MockBowlerAtLane = require('../../Adapters/OutgoingAdapters/MockBowlerAtLane');

describe('LaneGovernorService', () => {
  test('test_it_returns_a_greeting', () => {
    const service = new LaneGovernorService();
    expect(service.greeting()).toBe("Hello from Lane Governor");
  });

  test('test_activate_returns_ack', () => {
    const service = new LaneGovernorService();
    expect(service.activate()).toBe("OK");
  });

  test('test_bowler_arrived_returns_ack', () => {
    const service = new LaneGovernorService();
    expect(service.bowlerArrived()).toBe("OK");
  });

  test('test_pin_situation_pushes_to_bowler_at_lane', () => {
    const service = new LaneGovernorService(new MockBowlerAtLane());
    expect(service.pinSituation(7)).toBe(7);
  });
});
