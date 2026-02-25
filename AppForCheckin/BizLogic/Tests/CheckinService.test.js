const CheckinService = require('../CheckinService');

describe('CheckinService', () => {
  test('test_it_returns_a_greeting', () => {
    const service = new CheckinService();
    expect(service.greeting()).toBe("Checkin App ready");
  });
});
