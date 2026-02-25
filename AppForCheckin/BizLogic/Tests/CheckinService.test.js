const CheckinService = require('../CheckinService');
const MockLanesManager = require('../../Adapters/OutgoingAdapters/MockLanesManager');

describe('CheckinService', () => {
  test('test_it_returns_a_greeting', () => {
    const service = new CheckinService(new MockLanesManager());
    expect(service.greeting()).toBe("Checkin App ready");
  });

  test('test_checkin_bowler_notifies_lanes_manager', () => {
    const mock = new MockLanesManager();
    const service = new CheckinService(mock);
    expect(service.checkinBowler("Alice")).toBe("Alice");
  });
});
