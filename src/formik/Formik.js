import { useFormik } from "formik";
import { createContext } from "react";

const Formikcontext = createContext({});

export const Formik = ({ children, ...props }) => {
  const FormikState = useFormik(props);
  <Formikcontext.Provider value={FormikState}>
    {children}
  </Formikcontext.Provider>;
};
