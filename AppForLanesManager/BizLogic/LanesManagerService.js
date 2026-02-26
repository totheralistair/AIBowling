class LanesManagerService {
  greeting() {
    return "Hello from Lanes Manager";
  }

  checkinBowler(name) {
    return name;
  }

  assignLane(name) {
    return { name: name, lane: 5 };
  }
}

module.exports = LanesManagerService;
