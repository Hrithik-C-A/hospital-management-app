const Employee = require('../../models/Employee')
const path = require('path')

module.exports = async(req,res)=>{
    let image = req.files.image
    await image.mv(path.resolve('public/uploads/employees',image.name))
    await Employee.create({...req.body,image: '/employees/'+ image.name})
    
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