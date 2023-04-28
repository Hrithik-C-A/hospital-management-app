const DeptHead = require('../../models/DeptHead')

module.exports =  (req,res)=>{
    DeptHead.find({})
    .then((depthead)=>{
       
        if(!depthead){
            res.status(204).send({
                message: 'DepartmentHead Not Found'
            })
        }
        res.status(200).send({
            message: 'DepartmentHead Found',
            depthead
        })
    })
    .catch((error)=>{
        console.error(error);
        res.status(500).send({
            message: 'An error occurred while retrieving department heads',
          })
    })
}