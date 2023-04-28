const Department = require('../../models/Department')

module.exports =  async(req,res)=>{
    await Department.findByIdAndDelete({_id: req.params.id})
    .then((deleted)=>{
       
        if(!deleted){
            res.status(404).send({
                message: 'Departments Not Deleted'
            })
        }
        res.status(200).send({
            message: 'Department Deleted',       
        })
    })
    .catch((error)=>{
        console.error(error);
    })
}