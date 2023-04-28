const Department = require('../../models/Department')

module.exports = (req,res)=>{
    Department.create(req.body)
    .then((dept)=>{
       
        if(!dept){
            res.status(404).send({
                message: 'Department Not Created'
            })
        }
        res.status(201).send({
            message: 'Department Created'
        })
    })
    .catch((error)=>{
        console.error(error);
        res.status(500).send({
            message: 'An error occurred while creating the Department',
          });
    })
}