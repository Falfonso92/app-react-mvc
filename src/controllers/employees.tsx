import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { All, Edit, View, New } from '../views/employees';
import { EmployeesService } from '../services/employees';
import { IEmployee, Employee } from '../models/employee';

interface IState{
    employees: Array<IEmployee>;
    employee: IEmployee;
}

class EmployeesController extends React.Component<any>{
    public state: IState;
    public _clientEmployees: EmployeesService;
    constructor(props: any){
        super(props)
        this.state = {
            employees: [],
            employee: new Employee()
        }
        this._clientEmployees = new EmployeesService();
    }

    private getEmployees = () => {
        this._clientEmployees.getAll()
        .then(employees => this.setState({employees}))
        .catch(err => console.error(err));
    }
    private updateEmployee = (employee:IEmployee) => {
        this._clientEmployees.update(employee.id, employee)
        .then(result => {
            alert("Saved!");
            this.props.history.push("/employees");
        })
        .catch(err => console.log(err));
    }
    private getEmployee = (id: number) => {
        this._clientEmployees.get(id)
        .then(employee => {
            this.setState({employee});
        })
    }
    private addEmployee = (employee: IEmployee) => {
        this._clientEmployees.add(employee)
        .then(result => {
            alert("Saved!");
            this.props.history.push("/employees");
        })
        .catch(err => console.log(err));
    }
    private newEmployee = () => {
        this.setState({employee:new Employee()});
        this.props.history.push("/employees/new");
    }

    private deleteEmployee = (employee: IEmployee) =>{
        if(window.confirm("are you sure? this operation can't be rollback")){
            this._clientEmployees.delete(employee.id)
            .then(employee => this.getEmployees())
            .catch(err => console.error(err));
        }
    }
    private viewEmployee = (employee: IEmployee) =>{
        this.setState({employee});
        this.props.history.push("/employees/view");
    }
    private editEmployee = (employee: IEmployee) =>{
        this.setState({employee});
        this.props.history.push("/employees/edit");
    }

    public render(){
        return (
            <div className="pl-2 pr-2">
                <div className="text-primary text-left pl-1"><h2>Employees Admin MVC</h2></div>
                <Switch>
                    <Route exact path="/employees">
                        <All 
                            employees={this.state.employees} 
                            getEmployees={this.getEmployees}
                            deleteEmployee={this.deleteEmployee}
                            viewEmployee={this.viewEmployee}
                            editEmployee={this.editEmployee}
                            newEmployee={this.newEmployee}
                            ></All>
                    </Route>
                    <Route exact path="/employees/edit">
                        <Edit employee={this.state.employee} getEmployee={this.getEmployee} updateEmployee={this.updateEmployee}></Edit>
                    </Route>
                    <Route exact path="/employees/view">
                        <View employee={this.state.employee}></View>
                    </Route>
                    <Route exact path="/employees/new">
                        <New 
                            addEmployee={this.addEmployee}
                            employee={this.state.employee}
                            ></New>
                    </Route>
                </Switch>
            </div>
            
        );
    } 
}
export default withRouter(EmployeesController);