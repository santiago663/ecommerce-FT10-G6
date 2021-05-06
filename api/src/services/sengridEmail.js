const sgMail = require('@sendgrid/mail');
const { SENDGRID_KEY, SENDGRID_NOUSAR } = process.env;


sgMail.setApiKey(`${SENDGRID_KEY}`);

const sengridEmail = (msg)=>{

    sgMail.send(msg, function(err, info){
        if(err){
            console.log("Email Not Send",err.response.body.errors)
        } 
        else{
            console.log("Email Send",info)
        }
     })
     return({msg:"EXITO EN EL ENVÍO"})
}

module.exports = sengridEmail;