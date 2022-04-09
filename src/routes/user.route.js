const router = require('express').Router();
const UserController = require('../controllers/user.controller');
const wrapper = require('../lib/request-handler');

router.post('/', wrapper(UserController.createModel));
router.get('/', wrapper(UserController.readModels));
router.get('/:id', wrapper(UserController.readModel));
router.put('/:id', wrapper(UserController.updateModel));
router.delete('/:id', wrapper(UserController.deleteModel));

module.exports = router;
