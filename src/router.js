const Router = require('koa-router');

const controllers = require('./controller');

const router = new Router();

router.get('base', controllers.base);
router.get('testIndex', controllers.testIndex);
router.get('signIn', controllers.signIn);
router.get('index', controllers.index);

module.exports = {
  router,
};