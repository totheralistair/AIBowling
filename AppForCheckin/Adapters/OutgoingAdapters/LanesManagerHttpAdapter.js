const http = require('http');

class LanesManagerHttpAdapter {
  checkinBowler(name) {
    return new Promise((resolve, reject) => {
      const body = JSON.stringify({ name });
      const req = http.request({
        hostname: 'localhost',
        port: 3002,
        path: '/checkinBowler',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(body)
        }
      }, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => resolve(JSON.parse(data).name));
      });
      req.on('error', reject);
      req.write(body);
      req.end();
    });
  }
}

module.exports = LanesManagerHttpAdapter;
