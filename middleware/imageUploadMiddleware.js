const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}${path.extname(file.originalname)}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage }).single('image');

module.exports = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: 'Error uploading file' });
    }
    req.body.image = req.file.filename; 
    next();
  });
};

