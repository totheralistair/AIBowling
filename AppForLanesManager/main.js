const LanesManagerService = require('./BizLogic/LanesManagerService');
const MockLaneGovernor = require('./Adapters/OutgoingAdapters/MockLaneGovernor');
const MockPaymentGateway = require('./Adapters/OutgoingAdapters/MockPaymentGateway');
const createServer = require('./Adapters/IncomingAdapters/HttpServer');

const service = new LanesManagerService(new MockLaneGovernor(), new MockPaymentGateway());
const app = createServer(service);

app.listen(3002, () => {
  console.log('Lanes Manager running on port 3002');
});
