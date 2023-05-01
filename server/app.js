const express = require('express')
const app = express()
const dbConnect = require('./db/dbConnect')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const loginUserController = require('./controllers/user/loginUser')
const registerUserController = require('./controllers/user/registerUser')
const getAllDataController = require('./controllers/user/getAllData')

const authMiddleware = require('./middleware/auth')

const getDeptController = require('./controllers/department/getDept')
const postDeptController = require('./controllers/department/postDept')
const updDeptController = require('./controllers/department/updDept')
const delDeptController = require('./controllers/department/delDept')

const getDeptHeadController = require('./controllers/depthead/getDeptHead')
const postDeptHeadController = require('./controllers/depthead/postDeptHead')
const updDeptHeadController = require('./controllers/depthead/updDeptHead')
const delDeptHeadController = require('./controllers/depthead/delDeptHead')

const getEmpController = require('./controllers/employee/getEmployee')
const postEmpController = require('./controllers/employee/postEmployee')
const putEmpController = require('./controllers/employee/updEmployee')
const delEmpController = require('./controllers/employee/delEmployee')

dbConnect()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(fileUpload())
app.use('/departments', express.static('public/uploads/departments'));
app.use('/deptheads', express.static('public/uploads/deptheads'));
app.use('/employees', express.static('public/uploads/employees'));


//for the admin
app.get('/auth-dashboard',authMiddleware,getAllDataController)
app.post('/register',registerUserController)
app.post('/login',loginUserController)

//for the departments
app.get('/departments',getDeptController)
app.post('/department/create',postDeptController)
app.put('/department/update/:id',updDeptController)
app.delete('/department/delete/:id',delDeptController)

//for the department heads
app.get('/departmentheads',getDeptHeadController)
app.post('/departmenthead/create',postDeptHeadController)
app.put('/departmenthead/update/:id',updDeptHeadController)
app.delete('/departmenthead/delete/:id',delDeptHeadController)

//for the employees
app.get('/employees',getEmpController)
app.post('/employee/create',postEmpController)
app.put('/employee/update/:id',putEmpController)
app.delete('/employee/delete/:id',delEmpController)


app.listen(3000,()=>{
    console.log('App is running on port 3000')
})