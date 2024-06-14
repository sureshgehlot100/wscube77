const Product = require("../../models/product/Product");

const insertProduct = async (req, res) => {
    try {
        const { name, discription, mrp, price } = req.body;

        const thumbnail = req.files.thumbnail[0].filename;

        const images = req.files.images.map((imagesData) => {
            return imagesData.filename;
        });

        console.log(thumbnail);
        console.log(images);
        const dataInsert = new Product({
            name,
            thumbnail,
            price,
            mrp,
            discription,
            images
        });

        const response = await dataInsert.save();

        res.status(200).json({ message: 'product insert successfully',data:response });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });


    }
};
module.exports = insertProduct;