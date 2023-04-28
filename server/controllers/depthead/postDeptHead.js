const DeptHead = require('../../models/DeptHead')

module.exports = (req,res)=>{
 DeptHead.create(req.body)
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