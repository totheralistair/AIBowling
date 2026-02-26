const LaneGovernorService = require('../LaneGovernorService');

describe('LaneGovernorService', () => {
  test('test_it_returns_a_greeting', () => {
    const service = new LaneGovernorService();
    expect(service.greeting()).toBe("Hello from Lane Governor");
  });

  test('test_activate_returns_ack', () => {
    const service = new LaneGovernorService();
    expect(service.activate()).toBe("OK");
  });
});
