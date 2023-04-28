const Department = require('../../models/Department');
const DeptHead = require('../../models/DeptHead');
const Employee = require('../../models/Employee');

module.exports = async (req, res) => {
  try {
    const department = await Department.find({});
    const deptHead = await DeptHead.find({});
    const employee = await Employee.find({});

    // Sanitize data before sending it to the client
    const sanitizedDepartment = department.map((dept) => dept.toObject());
    const sanitizedDeptHead = deptHead.map((head) => head.toObject());
    const sanitizedEmployee = employee.map((emp) => emp.toObject());

    res.status(200).send({
      message: 'Data Found',
      department: sanitizedDepartment,
      deptHead: sanitizedDeptHead,
      employee: sanitizedEmployee,
    });
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).send({
      message: 'An error occurred while retrieving data',
    });
  }
};
