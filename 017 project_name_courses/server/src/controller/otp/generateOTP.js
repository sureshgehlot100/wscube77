const nodemailer = require('nodemailer');
const otpSave = require('../../support/otpdata/otpMap');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.ADMIN_MAIL,
        pass: process.env.ADMIN_APP_PASSWORD
    }
});
const generate_otp = async (req, res) => {
    try {
        const { email } = req.body;

        const otp = Math.floor(Math.random() * 1000000);

        otpSave.set(email, otp.toString());

        // console.log(otp, email);
        // console.log(otpSave.get(email));
        const options = {
            from: process.env.ADMIN_MAIL,
            to: email,
            subject: 'otp password reset',
            html: `<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Email Html Page</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style: none;
        }
        .container{
            max-width: 800px;
            margin: auto;
            background-color: yellow;
            padding: -20px;
        }
        span{
            font-size: 20px;
            font-weight: 500;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>We Hirring new team </h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, hic quia. Quidem placeat illo eveniet maxime quibusdam. Dolores, minus eius! Rem, modi sit. Minus fugiat, placeat ea dolore molestiae possimus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias unde officia tempora animi deleniti obcaecati repellendus, odio, similique reiciendis veritatis exercitationem quod ipsam suscipit minus. Dicta animi nam reprehenderit.
        </p>
        <p>
            Your one Time Password is <span>${otp}</span>
        </p>
        <p>Don't Share Your OTP</p>

    </div>
    
</body>
</html>`
        }
        transporter.sendMail(options, (error, success) => {
            if (error) return res.status(501).json({ message: 'something went wrong' });

            res.status(200).json({ message: "otp sent your mail successfully" });
            // console.log(success);

        });


    } catch (error) {
        console.log(error);
        res.status(200).json({ message: "internal server error" })

    }
};
module.exports = generate_otp;