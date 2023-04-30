const DeptHead = require('../../models/DeptHead')
const path = require('path')

module.exports = async(req,res)=>{
    let image = req.files.image
    await image.mv(path.resolve('public/uploads/deptheads',image.name))
    await DeptHead.create({...req.body,image: '/deptheads/'+ image.name})
    
   .then((deptHead)=>{
        if(!deptHead){
            res.status(404).send({
                message: 'DepartmentHead Not Created'
            })
        }
        res.status(201).send({
            message: 'DepartmentHead Created'
        })
   })
   .catch((error)=>{
    console.error(error);
    res.status(500).send({
        message: 'An error occurred while creating the DepartmentHead',
      });
   })
}