const Employee = require('../../models/Employee')

module.exports =  async(req,res)=>{
    await Employee.findByIdAndDelete({_id: req.params.id})
    .then((deleted)=>{
       
        if(!deleted){
            res.status(404).send({
                message: 'DepartmentHead Not Deleted'
            })
        }
        res.status(200).send({
            message: 'DepartmentHead Deleted',       
        })
    })
    .catch((error)=>{
        console.error(error);
    })
}