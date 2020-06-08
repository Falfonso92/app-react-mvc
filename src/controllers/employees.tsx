import React, { useState, useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { All, Edit, View, New } from '../views/employees';
import { EmployeesService } from '../services/employees';
import { IEmployee, Employee } from '../models/employee';
import { employeeStore } from '../store/employee-store';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';


const EmployeesController: React.FC<any> = (props:any) => {

    const employees = useSelector<RootState,Array<IEmployee>>(employeeStore.selectEmployees);

    useEffect(() => 
        props.history.push("/employees")
    , [employees])

    const dispatch: any = useDispatch();
    const getEmployees = () => {
        dispatch(employeeStore.getEmployees());
    }
    const updateEmployee = (employee:IEmployee) => {
        dispatch(employeeStore.editEmployee(employee));
    }
    const getEmployee = (id: number) => {
        dispatch(employeeStore.getEmployee(id));
    }
    const addEmployee = (employee: IEmployee) => {
        dispatch(employeeStore.addEmployee(employee));
    }
    const newEmployee = () => {
        props.history.push("/employees/new");
    }

    const deleteEmployee = (employee: IEmployee) =>{
        if(window.confirm("are you sure? this operation can't be rollback")){
            dispatch(employeeStore.deleteEmployee(employee));
        }
    }
    const viewEmployee = (employee: IEmployee) =>{
        getEmployee(employee.id)
        props.history.push("/employees/view");
    }
    const editEmployee = (employee: IEmployee) =>{
        getEmployee(employee.id);
        props.history.push("/employees/edit");
    }
    return (
        <div className="pl-2 pr-2">
            <div className="text-primary text-left pl-1"><h2>Employees Admin MVC</h2></div>
            <Switch>
                <Route exact path="/employees">
                    <All 
                        employees={employees} 
                        getEmployees={getEmployees}
                        deleteEmployee={deleteEmployee}
                        viewEmployee={viewEmployee}
                        editEmployee={editEmployee}
                        newEmployee={newEmployee}
                        ></All>
                </Route>
                <Route exact path="/employees/edit">
                    <Edit getEmployee={getEmployee} updateEmployee={updateEmployee}></Edit>
                </Route>
                <Route exact path="/employees/view">
                    <View getEmployee={getEmployee}></View>
                </Route>
                <Route exact path="/employees/new">
                    <New 
                        addEmployee={addEmployee}
                        ></New>
                </Route>
            </Switch>
        </div>
    );
}
export default withRouter(EmployeesController);