import {String} from 'typescript-string-operations';

export interface IEmployee{
    id: number;
    employeeName: string;
    employeeSalary: string;
    employeeAge: number;
    profileImage: string;
}
export class Employee implements IEmployee{
    public id: number;
    public employeeName: string;
    public employeeSalary: string;
    public employeeAge: number;
    public profileImage: string;

    constructor(){
        this.employeeName = String.Empty;
        this.profileImage = String.Empty;
        this.employeeSalary = String.Empty;
        this.employeeAge = 0;
        this.id = 0;
    }
}
