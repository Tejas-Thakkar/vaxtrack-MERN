// to, from, subject, text is require for sending mail to someone
const mailer = require('nodemailer');

// function

const sendingMail = async(to,subject,text) => {

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth:{
            user:"210120116108@git.org.in",
            pass:"lmhi fqpx aeqe rqcu"
        }
    })

    const mailOptions = {
        from: '210120116108@git.org.in',
        to:to,
        subject: subject,
        text: text
    }

    const mailresponse = await transporter.sendMail(mailOptions);
    console.log(mailresponse)
    return mailresponse;
}

module.exports={
    sendingMail
}
//sendingMail("thakkarmaheshbhai45@gmail.com","Test Mail","this is test mail")