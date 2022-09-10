const multer = require('multer');
const fs = require('fs');

const productPictureStorage = multer.diskStorage({
  destination: function(req, file, cb) {
    const path = './file/picture/product';
    if (!fs.existsSync(path)) {
      fs.mkdirSync('./file/picture/product', {recursive: true});
    }
    cb(null, path);
  },
  filename: async function(req, file, cb) {
    const productModelData = req.productModelData;
    const fileNameProduct = 'img-product-' + productModelData.id + '.png';
    req.fileNameProduct = fileNameProduct;
    cb(null, fileNameProduct);
  },
});

const imageFilter = function(req, file, cb) {
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
    req.fileValidationError = 'Only image files are allowed!';
    return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

module.exports = {
  productPicture: (req, res, next) => {
    const upload = multer({storage: productPictureStorage, fileFilter: imageFilter}).single('file');
    upload(req, res, function(err) {
      if (req.fileValidationError) {
        return res.send(req.fileValidationError);
      } else if (!req.file) {
        return res.status(400).send('Please select an image to upload');
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }
      next();
    });
  },
};
