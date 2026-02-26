class BowlersAtLaneService {
  constructor(laneGovernor, lanesManager) {
    this.laneGovernor = laneGovernor;
    this.lanesManager = lanesManager;
  }

  greeting() {
    return "Hello from Bowler At Lane";
  }

  registerBowler(name) {
    return name;
  }

  bowlerArrived() {
    return this.laneGovernor.bowlerArrived();
  }

  sessionEnded() {
    return this.lanesManager.laneFreed();
  }
}

module.exports = BowlersAtLaneService;
