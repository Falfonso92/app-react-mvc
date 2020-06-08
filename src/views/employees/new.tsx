import React, {FC, useState} from 'react';
import { Employee  } from '../../models/employee';
import styles from './styles.module.scss';
import { CustomForm } from '../../components/screens';

interface INewProps{
    addEmployee: Function;
}

const New: FC<INewProps> = (props: INewProps)  => {
    return (
    <div className={styles.NewForm}>
        <CustomForm 
            employee={new Employee()}
            onSubmit={props.addEmployee}
            viewForm={false}
        ></CustomForm>
    </div>);
}
export default New;