import { ErrorMessage, useField } from "formik"

export const Input = ({label , ...props})=>{

    const[field , meta ] = useField(props)
    return(
        <>
        <label htmlFor="" className="font-bold">{label}</label>
        <input className="w-1/2 p-1 rounded" {...field} {...props}/>
        {/* {meta.touched && meta.error? <div className="bg-red-200 text-red-500 px-1 p-1 mt-1 rounded w-1/2" >{meta.error}</div> : null} */}
        <ErrorMessage name={props.name}>{msg =><div className="bg-red-200 text-red-500 px-1 p-1 mt-1 rounded w-1/2" >{msg}</div> }</ErrorMessage>
        </>
    )
}