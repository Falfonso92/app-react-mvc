import React, {FC, useState} from 'react';
import {IEmployee, Employee  } from '../../models/employee';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap';
import styles from './styles.module.scss';
import { CustomField } from '../../components/ui';
import { CustomForm } from '../../components/screens';

interface INewProps{
    addEmployee: Function;
    employee: IEmployee;
}

const New: FC<INewProps> = (props: INewProps)  => {
    return (
    <div className={styles.NewForm}>
        <CustomForm 
        employee={props.employee}
        onSubmit={props.addEmployee}
        viewForm={false}
        ></CustomForm>
    </div>);
}
export default New;