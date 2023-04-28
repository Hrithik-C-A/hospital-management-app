const Employee = require('../../models/Employee')

module.exports =  async(req,res)=>{
    await Employee.findByIdAndUpdate({_id: req.params.id},req.body)
    .then((updated)=>{
       
        if(!updated){
            res.status(404).send({
                message: 'DepartmentHead Not Updated'
            })
        }
        res.status(200).send({
            message: 'DepartmentHead Updated',       
        })
    })
    .catch((error)=>{
        console.error(error);
        res.status(500).send({
            message: 'An error occurred while updating the Employee',
          });
    })
}