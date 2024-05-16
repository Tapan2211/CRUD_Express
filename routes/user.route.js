const router = require('express').Router();

const { createNewUser, getAllUser, updateUserById, deleteUserById } = require('../controller/user.controller');
const imageUploadMiddleware = require('../middleware/imageUploadMiddleware');
const authController = require('../controller/auth.controller');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/new',  imageUploadMiddleware, createNewUser);
// router.post('/login', authController.login);
// router.get('/protected-route', authMiddleware.verifyToken, (req, res) => {
//     res.json({ message: 'Access granted to protected route' });
// });
router.get('/', getAllUser);
router.patch('/:id', updateUserById)
router.delete('/:id', deleteUserById)

module.exports = router;
