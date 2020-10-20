import express from 'express';
import bodyParser from 'body-parser';
import logger from 'pino';

const app = express();
const log = logger();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(5000, () => {
  log.info('App is listening to port 5000');
});
