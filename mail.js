const nodemailer =  require('nodemailer')
const mailGun = require('nodemailer-mailgun-transport')


const auth = {
    auth: {
        api_key: '2791adac17e9e74c1233beb4808e3ca3-ea44b6dc-9b3357c4',
        domain: 'sandbox34a396936b184b0c8afdaba6a10b0112.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth))

const sendMail = (fullname, email, subject, text,cb)=>{

    
    const mailOption = {
        from: email,
        to: 'nwabuezesc@gmail.com',
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