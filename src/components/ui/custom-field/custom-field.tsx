import React, { FC, useState, useEffect } from 'react'
import { FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import { String } from 'typescript-string-operations';

interface ICustomFieldProps{
    onValueChanged?: Function;
    feedBackError?: string;
    description?: string;
    type: string;
    required: boolean;
    readOnly:boolean;
    title: string;
    tabIndex?: number;
    id: string;
    value?: any;
}

export const CustomField: FC<ICustomFieldProps> = (props:ICustomFieldProps) => {

    const onValueChanged= props.onValueChanged??function(){}
    return (
        <div>
            <FormGroup>
                <Label for={props.id}>{props.title}&nbsp;{props.required?'*':String.Empty} </Label>
                <Input 
                    onChange={(e) => {
                       onValueChanged(e);
                    }} 
                    type={props.type as any} 
                    id={props.id} 
                    required={props.required}
                    tabIndex={props.tabIndex}
                    readOnly={props.readOnly}
                    value={props.value}
                    />
                <FormFeedback>{props.feedBackError}</FormFeedback>
                <FormText>{props.description}</FormText>
            </FormGroup>
        </div>
    )
}
