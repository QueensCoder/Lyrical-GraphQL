const app = require('./server/server');
const log = require('./log');

app.listen(4000, () => {
  log('Listening on port 4000');
});
