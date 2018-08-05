const app = require('./server/server');
const { blue } = require('chalk');
const log = str => console.log(blue(str));

app.listen(4000, () => {
  log(process.env.URI_KEY);
});
