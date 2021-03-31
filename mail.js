const nodemailer =  require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')


const auth = {
    auth: {
        api_key: '09aa65406f84fe245531701bfc0c82da-1553bd45-8f67c3b5',
        domain: 'sandbox30d65a75ba504f7fb393297f6d413b80.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth))

const sendMail = (fullname, email, subject, text,cb)=>{

    
    const mailOption = {
        from: email,
        to: 'stephennonso4@gmail.com',
        fullname,
        subject,
        text,
    }

    transporter.sendMail(mailOption, function(err, data){
        if(err){
            cb(err, null)
        }else{
           cb(null, data)
        }
    })

}


module.exports = sendMail

//$TphEnN@n894@M@ilguN