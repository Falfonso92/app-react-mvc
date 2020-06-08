import React, {FC, useState, useEffect} from 'react';
import {IEmployee, Employee  } from '../../../models/employee';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import { CustomField } from '../../ui';

interface ICustomFormProps{
    onSubmit?:Function;
    employee: IEmployee;
    viewForm: boolean;
}

export const CustomForm: FC<ICustomFormProps> = (props: ICustomFormProps)  => {
    const [newEmployee, setEmployee] = useState(null);

    useEffect(() => {
        setEmployee(props.employee);
    }, [props.employee])

    const updateValue = (e: React.FormEvent<HTMLInputElement>, property: string) => {
        const _employee = {...newEmployee} as any;
        _employee[property] = (e.target as HTMLInputElement).value; 
        if(property === "employeeAge"){
            _employee[property] = parseInt((e.target as HTMLInputElement).value);  
        } 
        setEmployee(_employee);
    }
    const onSubmit = (e: React.FormEvent<Element>) => {
        e.preventDefault();
        e.stopPropagation();
        const form = e.target as HTMLFormElement;
        const valid = form.checkValidity();
        form.classList.add('was-validated');
        if(valid){
            props.onSubmit(newEmployee);
        }
    }
    if(newEmployee !== null){
        return (
            
            <Form onSubmit={onSubmit} noValidate>
                <CustomField
                    id="txtEmployeeName"
                    title="Employee Name"
                    type='text'
                    value={newEmployee.employeeName}
                    required={true}
                    readOnly={props.viewForm}
                    description='Full Name Employee'
                    feedBackError='Requerido'
                    onValueChanged={(e: React.FormEvent<HTMLInputElement>) => updateValue(e, 'employeeName')}
                >
                </CustomField>
                <CustomField
                    id="txtEmployeeSalary"
                    title="Employee Salary"
                    type='text'
                    value={newEmployee.employeeSalary}
                    required={true}
                    readOnly={props.viewForm}
                    description='Salary of Employee'
                    feedBackError='Requerido'
                    onValueChanged={(e: React.FormEvent<HTMLInputElement>) => updateValue(e, 'employeeSalary')}
                >
                </CustomField>
                <CustomField
                    id="txtEmployeeAge"
                    title="Employee Age"
                    type='number'
                    value={newEmployee.employeeAge}
                    required={true}
                    readOnly={props.viewForm}
                    description='Age of Employee'
                    feedBackError='Requerido'
                    onValueChanged={(e: React.FormEvent<HTMLInputElement>) => updateValue(e, 'employeeAge')}
                >
                </CustomField>
                <CustomField
                    id="profileImage"
                    title="Profile Url"
                    type='url'
                    value={newEmployee.profileImage}
                    required={false}
                    readOnly={props.viewForm}
                    description='Url of profile image'
                    feedBackError='Requerido'
                    onValueChanged={(e: React.FormEvent<HTMLInputElement>) => updateValue(e, 'profileImage')}
                >
                </CustomField>
                <Button color="primary" type="submit" disabled={props.viewForm}> Save </Button>
                &nbsp;
                &nbsp;
                <Button color="secondary" type="reset" disabled={props.viewForm}> Cancel </Button>
            </Form>);
        }
        else {
            return <div></div>;
        }
}