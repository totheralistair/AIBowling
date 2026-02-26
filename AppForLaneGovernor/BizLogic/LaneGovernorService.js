class LaneGovernorService {
  constructor(bowlerAtLane) {
    this.bowlerAtLane = bowlerAtLane;
  }

  greeting() {
    return "Hello from Lane Governor";
  }

  activate() {
    return "OK";
  }

  bowlerArrived() {
    return "OK";
  }

  pinSituation(pins) {
    return this.bowlerAtLane.receivePinSituation(pins);
  }
}

module.exports = LaneGovernorService;
