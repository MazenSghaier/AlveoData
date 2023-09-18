import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigate } from "react-router-dom"; // Import useNavigate
import { motion as m } from "framer-motion";

import formImage from "../../assests/images/graphics-design.png";

interface FormValues {
  email: string;
  password: string;
}



const LogIn = () => {

  const quotes = [
    "Around 2.5 quintillion bytes worth of data is generated each day. ",
    "90% of the data in the world has been generated in the last two years.",
    "An AI-powered software was created that could predict the results of the Oscars with 90% accuracy.",
    "There are approximately 400,000 bytes of data for every grain of sand on earth.",
    "Data science was identified as the skill with the largest skill gap, according to a 2021 report by the World Economic Forum.",
    "In 2020 the number of data science job listings outstripped the number of people searching for such jobs by a factor of 3 to 1.",
    "The average salary for a data scientist is $100,000 USD according to the Bureau of Labor Statistics, and that of an analyst is $70,000 USD.",
    "Bachelor’s degrees in data science were practically non-existent five years ago, according to Discover Data Science. Now over 50 higher education institutions in the US currently offer one.",
    "99% of organizations are actively investing in data transformation initiatives.",
    "Online learning is used by 63% of companies to train their employees in new skills and keep their existing ones sharp."
    // Add more quotes as needed
  ];
 
  const navigate = useNavigate(); // Use useNavigate to get the navigation function
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
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
              Lets get going 👋
            </h1>
            <p className="text-lg font-sans text-gray-500">
            {randomQuote}
            </p>
            <div className="mt-6">
              {/* Email input field */}
              <div className="pb-4">
                <label
                  htmlFor="email"
                  className={`block font-latoBold text-sm pb-2 ${
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
              <div className="pb-4">
                <label
                  htmlFor="password"
                  className={`block font-latoBold text-sm pb-2 ${
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
              <div className="flex  w-full pb-4">
                <a
                  href="/forgot-password" // Replace with the actual URL of the "Forgot Password" page
                  className="text-gray-500 hover:underline font-latoBold text-sm"
                >
                  Forgot your password?
                </a>
              </div>
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-300 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
              >
                Back to learning today!
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
export default LogIn;