const CheckinService = require('../CheckinService');
const MockLanesManager = require('./MockLanesManager');

describe('CheckinService', () => {
  test('test_it_returns_a_greeting', () => {
    const service = new CheckinService(new MockLanesManager());
    expect(service.greeting()).toBe("Checkin App ready");
  });

  test('test_checkin_bowler_notifies_lanes_manager', () => {
    const mock = new MockLanesManager();
    const service = new CheckinService(mock);
    service.checkinBowler("Alice");
    expect(mock.arrivals).toContain("Alice");
  });
});
