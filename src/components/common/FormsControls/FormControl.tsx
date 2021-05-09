import s from "./FormControl.module.scss";
import {fieldValidatorType} from "../../../validators/validator";
import React from "react";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";



type formControlPropsType = {
    meta:WrappedFieldMetaProps
}
const FormControl:React.FC<formControlPropsType> = ({meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea:React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input:React.FC<WrappedFieldProps> = (props) => {
    // const {input, meta, child, ...restProps} = props
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export function createField<KeysType extends string> (
    placeholder:string | undefined,
    name: KeysType,
    validators: Array<fieldValidatorType>,
    component: React.FC<WrappedFieldProps>,
    props = {}, text = "") {

    return <div>
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props}
        /> {text}
    </div>
}
