import { useState } from "react";
import * as React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion as m } from "framer-motion";

import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';

import Lottie from 'react-lottie';
import animationData from '../../lotties/lottieflow-loading-04-2-35bbe3-easey.json';

import { signin } from '../../actions/user';

import formImage from "../../assests/images/graphics-design.png";

interface FormValues {
  email: string;
  password: string;
}

interface Stateof extends SnackbarOrigin {
  open: boolean;
}


const LogIn = () => {
  const [isSignin, setIsSignin] = useState(false);
  const [error, setError] = useState(""); 

  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
  const googleSuccess = async () => {
    console.log("Need google api")
  };

  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful. Try again later")
  };
 
  const navigate = useNavigate(); // Use useNavigate to get the navigation function

  const [message, setMessage] = React.useState<Stateof>({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = message;

  const [login, setLogin] = useState({
    Email: "",
    password: "",
  })

  const handleClose = () => {
    setMessage({ ...message, open: false });
  };

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

        try{

          setLogin({
            Email: values.email,
            password: values.password,
          });

          console.log(login);
          if(login.Email !== ''){
            setIsSignin(true);
            dispatch(signin(login));
            setError("Login was successful");
            setMessage({ ...message, open: true });
            setTimeout(() => {
              setIsSignin(false);
            }, 2000);
            setTimeout(() => {

              navigate('/students'); 
            }, 2000);
          }
          else{
            setError("Login was not successful , try again");
            setMessage({ ...message, open: true });
          }
    }catch(e){ 

      console.log(e)
      setError("An error occurred during log-in. Please try again.");
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
      {isSignin ? ( // Conditionally render loading animation or form
      <div className="flex items-center justify-center h-screen">
        {error && 

          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            message={error}
            key={vertical + horizontal}
            ContentProps={{
              className: 'custom-snackbar', // Apply your custom class here
            }}

          />
          }
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData, // Replace with your animation data
          }}
          height={150}
          width={150}
          style={{ color: '#26C6DA' }}
        />
      </div> 
        ) : (
      <div className="h-screen flex items-center ">
      <form  
        onSubmit={formik.handleSubmit}
        className="bg-white flex flex-col md:flex-row rounded-lg font-latoRegular"
      >
        <div className="flex-1 text-gray-700 p-1 md:p-20 md:w-1/2 md:mx-auto"> {/* Adjusted width and added mx-auto */}
          <h1 className="text-3xl md:text-4xl pb-2 font-latoBold">
            Let's get going 👋
          </h1>
          <p className="text-base w-8/12 md:text-lg text-gray-500">
              Online learning is used by 63% of companies to train their employees in new skills and keep their existing ones sharp.
          </p>
          <div className="mt-3">
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
                <p className="text-sm font-latoBold text-red-400 "></p>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-7/12 focus:border-cyan-400 focus:ring-cyan-400"
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
                  className="border-2 border-gray-500 p-2 rounded-md w-7/12 focus:border-cyan-400 focus:ring-cyan-400"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="flex w-full pb-2">
                <a
                  href="/forgot-password" // Replace with the actual URL of the "Forgot Password" page
                  className="text-gray-500 hover:underline font-latoBold text-sm"
                >
                  Forgot your password?
                </a>
              </div>
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-700 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-7/12"
              >
                Back to learning today!
              </button>
              </div>
              </div>
              <div className="relative flex-1 flex items-center justify-center">
                <img
                  className="object-cover rounded-lg w-full h-3/12 md:w-auto"
                  src={formImage}
                  alt="form-learn"
                  
                />
              </div>
            </form>
          </div>
      )}
      </m.div>
   );
 }
 
 export default LogIn;