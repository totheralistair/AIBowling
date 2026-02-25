class MockLanesManager {
  constructor() {
    this.arrivals = [];
  }

  bowlerArrived(name) {
    this.arrivals.push(name);
    return name;
  }
}

module.exports = MockLanesManager;
