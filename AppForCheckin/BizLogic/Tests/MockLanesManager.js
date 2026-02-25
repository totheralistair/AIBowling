class MockLanesManager {
  constructor() {
    this.arrivals = [];
  }

  bowlerArrived(name) {
    this.arrivals.push(name);
  }
}

module.exports = MockLanesManager;
