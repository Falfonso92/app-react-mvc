import React, {FC, useEffect} from 'react';
import styles from './styles.module.scss';
import { CustomForm } from '../../components/screens';

interface IViewProps{
    employee: any;
}

const View: FC<IViewProps> = (props)  => {
    return (
        <div className={styles.ViewForm}>
            <CustomForm
                employee={props.employee}
                viewForm={true}
            ></CustomForm>
        </div>);
}
export default View;