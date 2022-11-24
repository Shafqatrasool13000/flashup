import { ErrorMessage, Field, useField } from "formik";
import { InputFieldStyled } from "./style";

const InputField = (props: any) => {
  const [field, meta] = useField(props);
  const showFeedback = meta.touched;
  // console.log(meta.error, "field error .....");

  return (
    <InputFieldStyled>
      <input
        className={`form-control ${showFeedback ? (meta.error ? "is-invalid invalid" : "valid") : ""}`}
        {...props}
        {...field}
      />
      {/* <div className="form-group col-6">
        <label>input</label>
        <Field
          {...field}
          className={`${showFeedback ? (meta.error ? "invalid" : "valid") : ""}`}
        {...props}
        />
      </div> */}
    </InputFieldStyled>
  );
};

export default InputField;
