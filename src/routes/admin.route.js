const router = require('express').Router();
const {
  getAdminInfoControl,
  adminLoginControl,
  adminLogoutControl,
  changePasswordControl,
  issueTokenControl,
  issueTokenAgainControl,
} = require('../controllers/admin.controller');
const { verifyToken } = require('../lib/auth-middleware');
const wrapper = require('../lib/request-handler');

router.get('/', verifyToken, wrapper(getAdminInfoControl));
router.post('/login', wrapper(adminLoginControl));
router.post('/logout', verifyToken, wrapper(adminLogoutControl));
router.put('/password', verifyToken, wrapper(changePasswordControl));
router.get('/accesstoken', wrapper(issueTokenControl));
router.get('/tokens', verifyToken, wrapper(issueTokenAgainControl));

module.exports = router;
