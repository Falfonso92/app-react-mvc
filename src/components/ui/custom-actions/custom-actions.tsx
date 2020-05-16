import React, { FC } from 'react'
import { MdEdit, MdDelete, MdSubject} from 'react-icons/md';
import { Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import styles from './styles.module.scss';

interface ICustomActions{
    item: any;
    onDelete?: Function;
    onEdit?: Function;
    onView?: Function;
}

export const CustomActions: FC<ICustomActions> = (props: ICustomActions) => {
    const onDelete = props.onDelete??function(item: any){};
    const onEdit = props.onEdit??function(item: any){};
    const onView = props.onView??function(item: any){};
    return (
        <Row>
            <Col>
                <MdSubject 
                    className={styles.BtnAction}
                    onClick={() => onView(props.item)}
                ></MdSubject>
            </Col>
            <Col>
                <MdEdit 
                    className={styles.BtnAction}
                    onClick={() => onEdit(props.item)}>
                </MdEdit>
            </Col>
            <Col>
                <MdDelete className={styles.BtnAction}
                    onClick={() => onDelete(props.item)}>
                </MdDelete>
            </Col>
        </Row>
    );
}