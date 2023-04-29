const Employee = require('../../models/Employee')

module.exports =  (req,res)=>{
    Employee.find({})
    .then((emps)=>{
       
        if(!emps){
            res.status(204).send({
                message: 'Employees Not Found'
            })
        }
        res.status(200).send({
            message: 'Employees Found',
            emps
        })
    })
    .catch((error)=>{
        console.error(error);
        res.status(500).send({
            message: 'An error occurred while retrieving employees',
          })
    })
}