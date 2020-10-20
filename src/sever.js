import logger from 'pino';
import app from './app';

const log = logger();

app.listen(5000, () => {
  log.info('App is listening to port 5000');
});
