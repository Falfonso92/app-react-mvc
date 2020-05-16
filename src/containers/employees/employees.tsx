import React from 'react';
import EmployeesController from '../../controllers/employees';

class Employees extends React.Component{
    render(){
        return (
        <div className="container-fluid">
            <EmployeesController></EmployeesController>
        </div>);
    }
}
export default Employees;