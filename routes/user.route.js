const router = require('express').Router();

const { createNewUser,getAllUser, updateUserById, deleteUserById } = require('../controller/user.controller');

router.post('/new', createNewUser);
router.get('/', getAllUser);
router.patch('/:id', updateUserById)
router.delete('/:id', deleteUserById)

module.exports = router;
