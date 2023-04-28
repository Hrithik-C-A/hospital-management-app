const Department = require('../../models/Department')

module.exports =  (req,res)=>{
    Department.find({})
    .then((depts)=>{
       
        if(!depts){
            res.status(204).send({
                message: 'Departments Not Found'
            })
        }
        res.status(200).send({
            message: 'Department Found',
            depts
        })
    })
    .catch((error)=>{
        console.error(error);
        res.status(500).send({
            message: 'An error occurred while retrieving departments',
          })
    })
}