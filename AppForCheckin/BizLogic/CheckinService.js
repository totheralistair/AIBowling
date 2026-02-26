class CheckinService {
  constructor(lanesManager) {
    this.lanesManager = lanesManager;
  }

  greeting() {
    return "Hello from Checkin App";
  }

  checkinBowler(name) {
    return this.lanesManager.bowlerArrived(name);
  }
}

module.exports = CheckinService;
