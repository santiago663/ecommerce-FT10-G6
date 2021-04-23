const sgMail = require('@sendgrid/mail');

sgMail.setApiKey("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");

// sgMail.setApiKey("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");

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