var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'waseemahmed116@gmail.com',
        pass: '1ac13cs034'
    }
});

var mailOption = {
    from: 'waseemahmed116@gmail.com',
    to: 'zhiqing96.zq@gmail.com',
    subject: 'testing npm and sending mails',
    text: 'hello i hope uu r doing well'
};
transporter.sendMail(mailOption, (err, info) => {
    if (err) throw err;
    console.log('mail send');
});
