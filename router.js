const Authentication = require('./controllers/authentication');
const Delivery = require('./controllers/delivery');
const Center = require('./controllers/center');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = app => {
  app.post('/auth/signin', Authentication.signin)
  app.post('/auth/signup', Authentication.signup)
  app.get('/deliveries/:center',  Delivery.getCenterDeliveries)
  app.get('/deliveries',  Delivery.getDeliveries)
  app.post('/delivery',  Delivery.addDelivery)
  app.put('/verifydelivery',  Delivery.verifyDelivery)
  app.get('/centers',  Center.getCenters)
}
