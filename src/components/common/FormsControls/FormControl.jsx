import React from "react"
import s from "./FormControl.module.css"


export const Textarea = ({input, meta, ...props}) => {
    return (
        <div>
            <div className={s.textFieldBox}>
                <textarea {...input} {...props} className={meta.touched && meta.error?props.className +" "+s.error: props.className}/>
                <div>
                    {meta.touched?<span>{meta.error}</span>:""}
                </div>
            </div>

        </div>
    )
}

export const Input = ({input, meta, ...props}) => {
    return (
        <div>
            <div className={s.textFieldBox}>
                <input {...input} {...props} className={meta.touched && meta.error?props.className +" "+s.error: props.className}/>
                <div>
                    {meta.touched?<span>{meta.error}</span>:""}
                </div>
            </div>

        </div>
    )
}



