import React, { FC } from 'react'
import { Table, Button, Row, Col } from 'reactstrap'
import { String } from 'typescript-string-operations';
import { CustomActions } from '..';
import styles from './style.module.scss';
import { MdAdd } from 'react-icons/md';


export interface IColumnCustomTable{
    dataName: string;
    displayName?: string;
}

interface ICustomTableProps{
    columns?: Array<IColumnCustomTable>;
    dataSource: Array<any>;
    enableCustomActions?: boolean;
    dataBaseUrl?: string;
    onEdit?: Function;
    onView?: Function;
    onNew?: Function;
    onDelete?: Function;
    caption?: string;
}

export const CustomTable: FC<ICustomTableProps> = (props: ICustomTableProps) => {
    const columns = props.columns ?? 
        Object.keys(props.dataSource[0]??{})
        .map(key => ({'dataName': key, 'displayName':key}));
    const enableCustomActions = props.enableCustomActions ?? false;
    const onNew = props.onNew?? function(){}
    return (
        <div>
            <Row className="p-2">
                <Col className="text-left" md={{size:12}}>{props.caption??'Results'}</Col>
                <Col className="text-right" md={{size:12}}>
                    <Button 
                        color='primary'
                        onClick={() => onNew()}
                        ><MdAdd></MdAdd> Add</Button>
                </Col>
            </Row>
            <Table striped hover className={styles.Table} >
                <thead className="bg-primary text-white">
                    <tr>
                        {columns.map(column => {
                            return <th scope="col" key={column.dataName}>{column.displayName ?? column.dataName}</th>; 
                        })}
                        {enableCustomActions ? (
                           <th scope="col" className={styles.ColumnActions}></th> 
                        ): String.Empty}
                    </tr>
                </thead>
                <tbody>
                    {props.dataSource.map(item => {
                        return (
                            <tr key={item[columns[0].dataName]}>
                                {columns.map(column => {
                                    return (
                                        <td key={column.dataName}>
                                          {item[column.dataName]}  
                                        </td>);
                                })}
                                {enableCustomActions ? (
                                    <td className={styles.ColumnActions}>
                                        <CustomActions
                                            item={item}
                                            onDelete={props.onDelete}
                                            onView={props.onView}
                                            onEdit={props.onEdit}
                                        />
                                    </td>    
                                )
                                : String.Empty}
                            </tr>
                        );
                    })
                    }
                </tbody>
            </Table>
        </div>
    )
}
