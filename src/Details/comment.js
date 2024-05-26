import * as Yup from 'yup';
import { Formik , Form } from "formik";
import { Input } from "../formik/Input";
import { TextArea } from '../formik/TextArea';

function Comment({ info }) {
  return (
    <Formik
      initialValues={{ name: info.name, email: info.email, body: info.body }}
      validationSchema={Yup.object({
        name:Yup.string().required('required').min(4 , "must have 4 character or more"),
        email:Yup.string().required('required').email(),
        body:Yup.string().min(20).max(200)
      })}
      onSubmit={(values)=>{
        alert(JSON.stringify(values))
      }}
    >
      <Form className="bg-blue-200 p-4 mt-5 mx-2 border-2 border-blue-700 rounded flex flex-col">
        <h1>postId: {info.postId}</h1>
        <h1>Id: {info.id}</h1>
        <Input name="name" id="name" type="text" label="Name" />
        <Input name="email" id="email" type="email" label="email" />
        <TextArea name="body" id="body" type="body" lable="body" />
        <button type='submit' className='bg-green-400 capitalize rounded mt-3 p-2 self-center w-52' >submit</button>
      </Form>
    </Formik>
  );
}

export default Comment;
