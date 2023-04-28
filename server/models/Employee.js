const mongoose = require('mongoose')

const {Schema , model} = mongoose

function randomEmployeeNum(){
    return Math.floor(Math.random()*1000000) + 2
}

const EmployeeSchema = Schema({
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
    },
    reportTo: {
        type: String,
        required: true
    }
})

const Employee = model('Employees',EmployeeSchema)

module.exports = Employee