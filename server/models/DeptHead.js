const mongoose = require('mongoose')

function randomEmployeeNum(){
    return Math.floor(Math.random()*1000000) + 1
}

const DeptHeadSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    empnum:{
        type: Number,
        default: randomEmployeeNum
    },
    age:{
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
})

const DeptHead = mongoose.model('DepartmentHeads',DeptHeadSchema)

module.exports = DeptHead