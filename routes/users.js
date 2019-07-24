const express = require('express')
const router = express.Router()
const usersController = require('../controller/users')

router.get('/users', ContactsController.list)
router.get('/users/:id', ContactsController.show)
router.post('/users', ContactsController.create)
router.put('/users', ContactsController.put)
router.delete('/users', ContactsController.removed)


module.exports = router