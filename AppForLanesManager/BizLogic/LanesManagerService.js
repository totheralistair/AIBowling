class LanesManagerService {
  constructor(laneGovernor, paymentGateway) {
    this.laneGovernor = laneGovernor;
    this.paymentGateway = paymentGateway;
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

  laneFreed() {
    return "OK";
  }

  collectPayment(amount) {
    return this.paymentGateway.charge(amount);
  }
}

module.exports = LanesManagerService;
