const LaneGovernorService = require('../LaneGovernorService');

describe('LaneGovernorService', () => {
  test('test_it_returns_a_greeting', () => {
    const service = new LaneGovernorService();
    expect(service.greeting()).toBe("Hello from Lane Governor");
  });
});
