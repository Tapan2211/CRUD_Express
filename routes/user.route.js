const router = require('express').Router();

const { createNewUser,getAllUser, updateUserById, deleteUserById } = require('../controller/user.controller');
const imageUploadMiddleware = require('../middleware/imageUploadMiddleware');

router.post('/new',  imageUploadMiddleware, createNewUser);
router.get('/', getAllUser);
router.patch('/:id', updateUserById)
router.delete('/:id', deleteUserById)

module.exports = router;
