const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const Products = require('./models/product');

mongoose.connect('mongodb+srv://sureshgehlot7860:ghc4XMpxq8wV36gj@suresh.0qp461h.mongodb.net/file_uploadation_tmp?retryWrites=true&w=majority&appName=suresh')
    .then(() => {
        console.log('database connected successfully');
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();
app.use(express.json());

multerStorage = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, 'uploads');

    },
    filename: function (req, file, next) {
        const splitArr = file.originalname.split('.');
        const fileExtenstion = splitArr[splitArr.length - 1];
        // console.log(fileExtenstion);
        next(null, Date.now() + '.' + fileExtenstion);
    }
});

const upload = multer({ storage: multerStorage }).single('thumbnail');

app.use('/uploads', express.static('uploads'));

app.post('/insert_single_files', upload , async (req, res) => {
    try {

        const { name } = req.body;


        console.log(req.file.filename);

        const productData = new Products({
            name,
            thumbnail: req.file.filename
        });

        const response = await productData.save();

        res.status(200).json({ message: 'data inserted successfully', data: response });
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'internal server error' });

    }
});

app.get('/read_data', async (req, res) => {
    const response = await Products.find();

    const dataWithPath = response.map((data) => {
        data.thumbnail = `${req.protocol}://${req.get('host')}/uploads/${data.thumbnail}`;
        return data;
    });
    console.log(dataWithPath );

    res.status(200).json({ message: 'data fetched successfully', data:dataWithPath});

    console.log(`${req.protocol}://${req.get('host')}/uploads`);

});

app.listen(5500, () => {
    console.log('server is running on port 5500');
});