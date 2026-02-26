const CheckinService = require('./BizLogic/CheckinService');
const LanesManagerHttpAdapter = require('./Adapters/OutgoingAdapters/LanesManagerHttpAdapter');
const createServer = require('./Adapters/IncomingAdapters/HttpServer');

const service = new CheckinService(new LanesManagerHttpAdapter());
const app = createServer(service);

app.listen(3001, () => {
  console.log('Checkin App running on port 3001');
});
