import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigate } from "react-router-dom"; // Import useNavigate
import { motion as m } from "framer-motion";

import CountrySelect from './Country'

import formImage from "../../assests/images/why-choose-us.png";

interface FormValues {
  name: string;
  email: string;
  password : string;
  confirmPassword: string;
  country: string;
  terms: string;
}

const SignIn = () => {
 
  const navigate = useNavigate(); // Use useNavigate to get the navigation function


  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword:"",
      country: "",
      terms: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"),""], "Passwords must match")
        .required("Confirm Password is required"),
      terms: Yup.array().required("Terms of service must be checked"),
    }),

    onSubmit: (values) => {
        console.log("form submitted");
        console.log(values);
  
        if (navigate) {
            navigate("/", { state: values }); // Use navigate function for navigation
        }
      },
    });

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute w-full"
    >

      <div className="h-screen items-center flex justify-center">
        <form
          onSubmit={formik.handleSubmit}
          className="bg-white flex rounded-lg w-1/2 font-latoRegular"
        >
          <div className="flex-1 text-gray-700 p-20">
            <h1 className="text-3xl pb-2 font-latoBold">
              Lets get started 👋
            </h1>
            <p className="text-lg font-sans text-gray-500">
              Join our E-learning platform today and unlock over 500+ courses.
            </p>
            <div className="mt-6">
              {/* Name input field */}
              <div className="pb-2">
                <label
                  htmlFor="name"
                  className={`block font-latoBold text-sm pb-1 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-400"
                      : ""
                  } `}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "Name"}
                </label>
                <p className="text-sm font-latoBold text-red-400 "></p>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-4/5 focus:border-cyan-500 focus:ring-cyan-500 "
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Email input field */}
              <div className="pb-2">
                <label
                  htmlFor="email"
                  className={`block font-latoBold text-sm pb-1 ${
                    formik.touched.email && formik.errors.email
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Email"}
                </label>
                <p></p>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-4/5 focus:border-cyan-400 focus:ring-cyan-400"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Password input field */}
              <div className="pb-2">
                <label
                  htmlFor="password"
                  className={`block font-latoBold text-sm pb-1 ${
                    formik.touched.password && formik.errors.password
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : "Password"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-4/5 focus:border-cyan-400 focus:ring-cyan-400"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Confirm Password input field */}
              <div className="pb-2">
                <label
                  htmlFor="confirmPassword"
                  className={`block font-latoBold text-sm pb-1 ${
                    formik.touched.confirmPassword && formik.errors.confirmPassword
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.confirmPassword && formik.errors.confirmPassword
                    ? formik.errors.confirmPassword
                    : "Confirm Password"}
                </label>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-4/5 focus:border-cyan-400 focus:ring-cyan-400"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Country input field */}
              <div className="pb-2">
                <label
                  htmlFor="country"
                  className="block font-latoBold text-sm pb-1"
                >
                  Country
                </label>
                <CountrySelect/>
                </div>
              {/* Terms of service */}
              <div className="pb-2">
                <label
                  htmlFor="terms"
                  className={`block font-latoBold text-sm pb-1 ${
                    formik.touched.terms && formik.errors.terms
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : "Terms of service"}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="h-5 w-5 text-cyan-500 border-2 background-gray-500 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                  <p className="text-sm font-latoBold text-gray-500">
                    I agree to the Terms and Service that my data will be taken
                    and sold.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-300 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
              >
                Start learning today!
              </button>
            </div>
          </div>
          <div className="relative flex-1 flex items-center justify-center">
            <img
              className="object-cover rounded-lg w-full h-4/6"
              src={formImage}
              alt="form-learn"
            />
          </div>
        </form>
      </div>
    </m.div>
  );
}
export default SignIn;