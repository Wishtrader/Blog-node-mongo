const app = require('./app');
const database = require('./database');
const config = require('./config');

database().then(info => {
  console.log(`Connected to ${info.host}:${info.port}/${info.name}` )
  app.listen(config.PORT, () => {
    console.log(`App listening at http://localhost:${config.PORT}`)
  });
}).catch(() => {
  throw new Error("Something bad happened!");
})