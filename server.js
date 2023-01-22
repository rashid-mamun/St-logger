const app = require('./src/app');
const connectWithDb = require('./src/config/database');
require('dotenv').config();

/* express app initialization */
const port = process.env.PORT || 5000;

(async () => {
  await connectWithDb();
 

  app.listen(port, () => {
    console.log('listening from port', port);
  });
})();
