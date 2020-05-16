import React, {FC, useEffect} from 'react';
import { Button } from 'reactstrap';
import { CustomTable } from '../../components/ui';
import employees from '../../controllers/employees';
import { IColumnCustomTable } from '../../components/ui/custom-table/custom-table';

interface IAllProps{
    employees: Array<any>;
    getEmployees: Function;
    editEmployee: Function;
    viewEmployee: Function;
    deleteEmployee: Function;
    newEmployee: Function;
}

const All: FC<IAllProps> = (props)  => {
    useEffect(() => {
        props.getEmployees();
    },[ ])

    const columns: Array<IColumnCustomTable> = [
        {dataName: "employeeName",displayName: "Full Name"},
        {dataName: "employeeAge",displayName: "Age"},
    ];

    return (
    <div>
        <div>
            <CustomTable
                columns={columns}
                dataSource={props.employees}
                enableCustomActions={true}
                onView={props.viewEmployee}
                onEdit={props.editEmployee}
                onDelete={props.deleteEmployee}
                onNew={props.newEmployee}
                caption="Employees"
            />
        </div>
    </div>);
}
export default All;