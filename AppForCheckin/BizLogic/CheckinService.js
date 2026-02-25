class CheckinService {
  constructor(lanesManager) {
    this.lanesManager = lanesManager;
  }

  greeting() {
    return "Checkin App ready";
  }

  checkinBowler(name) {
    return this.lanesManager.bowlerArrived(name);
  }
}

module.exports = CheckinService;
