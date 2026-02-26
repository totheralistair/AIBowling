class MockPaymentGateway {
  charge(amount) {
    return "OK";
  }
}

module.exports = MockPaymentGateway;
