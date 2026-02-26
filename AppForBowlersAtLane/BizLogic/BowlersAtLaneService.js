class BowlersAtLaneService {
  constructor(laneGovernor) {
    this.laneGovernor = laneGovernor;
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
}

module.exports = BowlersAtLaneService;
