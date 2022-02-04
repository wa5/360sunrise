var nodemailer = require("nodemailer")
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "syafazlyn@gmail.com",
    pass: "e646467@ps3"
  }
})

var mailOption = {
  from: "syafazlyn@gmail.com",
  to: "syafazlyn@gmail.com", 
  subject: "testing npm and sending mails(sya)",
  text: "hello i hope uu r doing well"
}
transporter.sendMail(mailOption, (err, info) => {
  if (err)throw err
  console.log("mail send")

})
