const nodeMailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: '',
        domain: ''
}
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
    from: '"John" <deutschlandautohaus@gmail.com>',
    to: 'swordoflight8847@yahoo.com',
    subject: 'Testing',
    text: 'I would like to get in touch with you'
};

transporter.sendMail(mailOptions, function (err, data) {

    if (err) {
        console.log('Error occurs');
} else {
    console.log('Message sent!!');
}
})