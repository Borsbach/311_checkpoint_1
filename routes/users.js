const express = require('express')
const router = express.Router()
const usersController = require('../controller/users')

router.get('/users', usersController.list)
router.get('/users/:id', usersController.show)
router.post('/users', usersController.create)
router.put('/users/:id', usersController.put)
router.delete('/users/:id', usersController.removed)


module.exports = router