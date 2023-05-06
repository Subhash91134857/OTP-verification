const dotenv = require('dotenv');
dotenv.config();
const messagebird = require('messagebird')(process.env.MESSAGEBIRD_API_KEY)

class UserController{

    // Send OTP to user



    static UserLogin = async (req, res) => {
        // Due to lack of credits in messageBirds
        
        
        // const { phonenumber } = req.body;
        // const newPhoneNumber = "91" + phonenumber;
        // var params = {
        //     template: 'Your Login OTP is %token',
        //     timeout: 400
        // }
        // messagebird.verify.create(newPhoneNumber, params, function (err, response) {
        //     if (err) {
        //         return console.log("OTP send error",err);
        //     } else {
        //          return console.log("success!!!!!!!!...",response)
        //     } 
        // })
        res.status(200).send({"message":"Phone number send successfully!"})
    }

    // verify otp


    // static verifyOTP=async(req,res)=>{
    //     const { id, otpCode } = req.body;
    //     var userID = id;
    //     messagebird.verify.verify(userID, otpCode, (err, response) => {
    //         if (err) {
                
    //         } else {
                
    //         }
    //     })
    
}

module.exports = UserController;