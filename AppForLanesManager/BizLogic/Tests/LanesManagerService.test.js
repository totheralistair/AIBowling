const LanesManagerService = require('../LanesManagerService');

describe('LanesManagerService', () => {
  test('test_it_returns_a_greeting', () => {
    const service = new LanesManagerService();
    expect(service.greeting()).toBe("Lanes Manager ready");
  });

  test('test_checkin_bowler_returns_name', () => {
    const service = new LanesManagerService();
    expect(service.checkinBowler("Alice")).toBe("Alice");
  });

  test('test_manager_assigns_lane_returns_name_and_lane_number', () => {
    const service = new LanesManagerService();
    expect(service.assignLane("Alice")).toEqual({ name: "Alice", lane: 5 });
  });
});
