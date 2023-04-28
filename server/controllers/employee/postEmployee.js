const Employee = require('../../models/Employee')

module.exports = (req,res)=>{
 Employee.create(req.body)
   .then((emp)=>{
        if(!emp){
            res.status(404).send({
                message: 'Employee Not Created'
            })
        }
        res.status(201).send({
            message: 'Employee Created'
        })
   })
   .catch((error)=>{
    console.error(error);
    res.status(500).send({
        message: 'An error occurred while creating the Employee',
      });
   })
}