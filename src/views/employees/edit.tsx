import React, {FC, useEffect} from 'react';
import { CustomForm } from '../../components/screens';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { IEmployee } from '../../models/employee';
import { employeeStore } from '../../store/employee-store';

interface IEditProps{
    updateEmployee: Function;
    getEmployee:Function;
}

const Edit: FC<IEditProps> = (props)  => {
    const employee = useSelector<RootState,IEmployee>(employeeStore.selectEmployee);
    return (
        <div className={styles.EditForm}>
            <CustomForm
            employee={employee}
            onSubmit={props.updateEmployee}
            viewForm={false}
            ></CustomForm>
        </div>);
}
export default Edit;