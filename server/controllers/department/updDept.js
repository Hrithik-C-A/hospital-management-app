const Department = require('../../models/Department')

module.exports =  async(req,res)=>{
    await Department.findByIdAndUpdate({_id: req.params.id},req.body)
    .then((updated)=>{
       
        if(!updated){
            res.status(404).send({
                message: 'Departments Not Updated'
            })
        }
        res.status(200).send({
            message: 'Department Updated',       
        })
    })
    .catch((error)=>{
        console.error(error);
        res.status(500).send({
            message: 'An error occurred while updating the Department',
          });
    })
}