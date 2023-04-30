const Department = require('../../models/Department')
const path = require('path')

module.exports = async(req,res)=>{
    let image = req.files.image
    await image.mv(path.resolve('public/uploads/departments',image.name))
    await Department.create({...req.body,image: '/departments/'+ image.name})
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