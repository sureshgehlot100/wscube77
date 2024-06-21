const Admin = require("../../models/admin/admin");

const adminLogin = async (req, res) => {
    try {
        // const {email,password} = req.body;

        const ifMail = await Admin.find({ mail: req.body.mail });

        if (!ifMail) return res.status(404).json({ message: 'invalid mail' });

        if (ifMail.password !== req.body.password) return res.status(402).json({ massage: 'invalid Password' });

        res.status(200).json({ message: 'Admin logIn successfully', data: ifMail });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'internal server error' });
    }
};

module.exports = adminLogin;