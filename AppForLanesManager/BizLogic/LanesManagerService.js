class LanesManagerService {
  constructor(laneGovernor) {
    this.laneGovernor = laneGovernor;
  }

  greeting() {
    return "Hello from Lanes Manager";
  }

  checkinBowler(name) {
    return name;
  }

  assignLane(name) {
    this.laneGovernor.activate();
    return { name: name, lane: 5 };
  }
}

module.exports = LanesManagerService;
