const bcrypt = require('bcrypt')

const User = require('../../models/User')

module.exports=(req,res)=>{
    bcrypt.hash(req.body.password,10)

   .then((hashedPassword)=>{

       const user = new User({
           email: req.body.email,
           password: hashedPassword
       })

      user.save().then((result)=>{
       res.status(201).send({
           message: "User created Succesfully",
           result
       })
      }).catch((error)=>{
          res.status(500).send({
           message: "User not created",
           error
          })
      }) 
   })
   .catch((e)=>{
       res.status(500).send({
           message: 'Password was not hashed successfully',e
       })
   })
}