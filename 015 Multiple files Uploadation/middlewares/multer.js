const multer = require('multer');


const storageItem = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {

        const newName = Date.now() + file.originalname

        cb(null, newName);

    }
});

// const upload = multer({ storage: storageItem }).single('thumbnail');
// const upload = multer({ storage: storageItem }).array('images',Infinity);
const upload = multer({ storage: storageItem }).fields([
    {name:'thumbnail', maxCount:1},
    {name:'images', maxCount:10}
]);

module.exports = upload;