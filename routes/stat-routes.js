const Router = require('express')
const controller = require('../controllers/statistic-controller')
const auth = require('../middleware/auth.middleware')

const router = new Router()

router.post('/statistics', auth, controller.postStatistics)
router.get('/', auth, controller.getStatistics)

module.exports = router