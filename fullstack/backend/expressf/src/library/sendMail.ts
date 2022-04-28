var nodemailer = require('nodemailer');

export const sendingMail=(name:string,email:string)=>{
   
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'waseemahmed116@gmail.com',
        pass: '1ac13cs034'
    }
});

var mailOption = {
    from: 'waseemahmed116@gmail.com',
    to: email,
    subject: 'testing npm and sending mails',
    text: `hi ${name} conggradulation on registering to our website`
};
transporter.sendMail(mailOption, (err:any, info:any) => {
    if (err) throw err;
    console.log('mail send');
});

}