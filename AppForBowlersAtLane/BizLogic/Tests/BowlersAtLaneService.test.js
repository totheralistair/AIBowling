const BowlersAtLaneService = require('../BowlersAtLaneService');

describe('BowlersAtLaneService', () => {
  test('test_it_returns_a_greeting', () => {
    const service = new BowlersAtLaneService();
    expect(service.greeting()).toBe("Hello from Bowler At Lane");
  });
});
