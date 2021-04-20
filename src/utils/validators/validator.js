import React from "react"

export const maxLegthCreator = maxLength => value =>{
    if(value.length>maxLength){
        return `Max length is ${maxLength}`
    } return undefined
}

export const required = value =>{
    if(value){
        return undefined
    } return "Field is required"
}