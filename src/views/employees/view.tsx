import React, {FC, useEffect, useState} from 'react';
import styles from './styles.module.scss';
import { CustomForm } from '../../components/screens';
import { IEmployee } from '../../models/employee';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { employeeStore } from '../../store/employee-store';

interface IViewProps{
    getEmployee:Function;
}

const View: FC<IViewProps> = (props)  => {
    const employee = useSelector<RootState,IEmployee>(employeeStore.selectEmployee);
    return (
        <div className={styles.ViewForm}>
            <CustomForm
                employee={employee}
                viewForm={true}
            ></CustomForm>
        </div>);
}
export default View;