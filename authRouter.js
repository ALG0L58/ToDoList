const Router = require('express')
const router = new Router
const controller = require('./authController')

router.get('/getAllTodos', controller.getAllTodos);
router.get('/getActiveTodos', controller.getActiveTodos);
router.get('/getCompletedTodos', controller.getCompletedTodos);
router.post('/addTodos', controller.addTodos);
router.post('/remuveTodos', controller.remuveTodos);
router.post('/changeTodo', controller.changeTodo);

module.exports = router