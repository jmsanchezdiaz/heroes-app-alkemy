import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router";
import useSpreadContext from "../../customHooks/useSpreadContext";
import { getLogInToken } from "../../helpers/getLogInToken";
import { Errors, FormValues } from "../../types/types";

const LoginScreen = () => {
  const [wrongUser, setWrongUser] = useState<boolean>(false);
  const { logIn } = useSpreadContext();
  const navigate = useNavigate();
  const alert = useAlert();

  const validate = (values: FormValues): Errors => {
    const errors = {} as Errors;
    const notValidEmail = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
      values.email
    );

    if (!values.email) {
      errors.email = "Required";
    } else if (notValidEmail) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length > 16) {
      errors.password = "Password too long";
    } else if (values.password.length < 2) {
      errors.password = "Password too short";
    }

    return errors;
  };

  const handleSubmit = (values: FormValues) => {
    getLogInToken(values)
      .then(({ token }) => {
        if (token) {
          logIn(token);
          setWrongUser(false);
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
        alert.error("LogIn error, please see the console for more info ");
        setWrongUser(true);
      });
  };

  return (
    <div className="bg-danger vh-100 w-100 text-white d-flex justify-content-md-evenly justify-content-center align-items-center flex-column flex-md-row">
      <article className="text-center  mb-2">
        <h1 className="fw-bold">Welcome to my Heroes App</h1>
        <h3 className="fw-light">Please Log In</h3>
      </article>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="p-4 bg-white text-black rounded">
            <h3 className="mb-4">Log In</h3>
            <div className="form-group mb-4">
              <label htmlFor="email" className="mb-2">
                Email
              </label>
              <Field
                id="email"
                name="email"
                className="form-control"
                placeholder="jane@acme.com"
                type="email"
              />
              {errors.email && touched.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password" className="mb-2">
                Password
              </label>
              <Field
                type="password"
                id="password"
                className="form-control"
                name="password"
                placeholder="*****"
              />
              {errors.password && touched.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <button type="submit" className="btn btn-success">
                Log In
              </button>
              {wrongUser && <span className="text-danger">Wrong User</span>}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginScreen;
