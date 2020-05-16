import React, {FC, useEffect} from 'react';
import { CustomForm } from '../../components/screens';
import styles from './styles.module.scss';

interface IEditProps{
    employee: any;
    getEmployee: Function;
    updateEmployee: Function;
}

const Edit: FC<IEditProps> = (props)  => {
    return (
        <div className={styles.EditForm}>
            <CustomForm
            employee={props.employee}
            onSubmit={props.updateEmployee}
            viewForm={false}
            ></CustomForm>
        </div>);
}
export default Edit;