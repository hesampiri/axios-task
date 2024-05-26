import { useField , ErrorMessage } from "formik"

export const TextArea = ({lable , ...props})=>{

    const [field , meta ] = useField(props)
    return(
        <>
        <label htmlFor="" className="font-bold">{lable}</label>
        <textarea {...props} {...field} className="p-1 rounded h-32" spellCheck="false" ></textarea>
        {/* {meta.touched && meta.error? <div className="bg-red-200 text-red-500 px-1 p-1 mt-1 rounded w-1/2" >{meta.error}</div> : null} */}
        <ErrorMessage name={props.name}>{msg =><div className="bg-red-200 text-red-500 px-1 p-1 mt-1 rounded w-1/2" >{msg}</div> }</ErrorMessage>
        </>
    )
}