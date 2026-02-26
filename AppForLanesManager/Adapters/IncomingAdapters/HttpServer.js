const express = require('express');

function createServer(service) {
  const app = express();
  app.use(express.json());

  app.get('/greeting', (req, res) => {
    res.json({ message: service.greeting() });
  });

  app.post('/checkinBowler', (req, res) => {
    const { name } = req.body;
    const result = service.checkinBowler(name);
    res.json({ name: result });
  });

  return app;
}

module.exports = createServer;
