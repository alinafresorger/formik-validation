import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      emailField: "",
      pswField: "",
    },
    onSubmit: (values) => {
      // console.log("form: ", values);
      alert(JSON.stringify("Login Successful"));
    },
    validate: (values) => {
      let errors = {};
      if (!values.emailField) {
        errors.emailError = "Field required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailField)) {
        errors.emailError = "Invalid email address";
      }
      if (!values.pswField) errors.pswError = "Field required";

      return errors;
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input
          id="emailField"
          type="text"
          placeholder="username"
          onChange={formik.handleChange}
          value={formik.values.emailField}
        />
        {formik.errors.emailError ? (
          <div style={{ color: "red" }} id="emailError">
            {formik.errors.emailError}
          </div>
        ) : null}
        <div>Password</div>
        <input id="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField} />
        {formik.errors.pswError ? (
          <div style={{ color: "red" }} id="pswError">
            {formik.errors.pswError}
          </div>
        ) : null}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
