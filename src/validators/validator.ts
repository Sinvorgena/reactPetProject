

export type fieldValidatorType = (value: string)=>string|undefined

export const maxLengthCreator = (maxLength:number):fieldValidatorType => (value) =>{
    if(value.length>maxLength){
        return `Max length is ${maxLength}`
    } return undefined
}

export const required: fieldValidatorType = (value) =>{
    if(value){
        return undefined
    } return "Field is required"
}