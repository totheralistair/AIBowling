class CheckinService {
  constructor(lanesManager) {
    this.lanesManager = lanesManager;
  }

  greeting() {
    return "Checkin App ready";
  }

  checkinBowler(name) {
    this.lanesManager.bowlerArrived(name);
  }
}

module.exports = CheckinService;
