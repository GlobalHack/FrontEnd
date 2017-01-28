var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var smtpConfig = {
    service:"SES",
    auth: {
        user: process.env.SES_USER,
        pass: process.env.SES_PASS
    }
};
var transporter = nodemailer.createTransport(smtpConfig);

// setup e-mail data
var mailOptions = {
    from: '"Cemaritan" <invite@cemaritan.com>', // sender address
    subject: 'Cemaritan Invite', // Subject line
    text: 'You\'re invited to Cemaritan! https://app.cemaritan.com/', // plaintext body
    html: 'You\'re invited to <a href="https://app.cemaritan.com/">Cemaritan!</a>' // html body
};

module.exports.sendInvite = function(invite_email) {
    // send mail with defined transport object
    mailOptions.to = invite_email;
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}
