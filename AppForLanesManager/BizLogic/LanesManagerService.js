class LanesManagerService {
  greeting() {
    return "Lanes Manager ready";
  }

  checkinBowler(name) {
    return name;
  }

  assignLane(name) {
    return { name: name, lane: 5 };
  }
}

module.exports = LanesManagerService;
