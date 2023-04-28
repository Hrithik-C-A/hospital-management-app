const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../../models/User')

module.exports = (req,res)=>{
    User.findOne({email: req.body.email})
    .then((user)=>{
        bcrypt.compare(req.body.password,user.password)
        .then((passwordCheck)=>{

            if(!passwordCheck) {
                return response.status(400).send({
                  message: "Passwords does not match",
                  error,
                })
            }

            const token = jwt.sign({
                userId: user._id,
                userEmail: user.email
            },'RANDOM-TOKEN',{expiresIn:'24h'})

            res.status(200).send({
                message: "Login Successful",
                email: user.email,
                token
            })
        })
        .catch((e)=>{
            res.status(400).send({
                message: "Passwords does not match",
                e
            })
        })
    })
    .catch((e)=>{
        res.status(404).send({
            message: "Email not found",
            e,
          })
    })
}