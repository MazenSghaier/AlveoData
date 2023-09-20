import * as React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigate } from "react-router-dom"; // Import useNavigate
import { motion as m } from "framer-motion";
import { GoogleLogin } from 'react-google-login'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import Lottie from 'react-lottie';
import animationData from '../../lotties/lottieflow-loading-04-2-35bbe3-easey.json';

import CountrySelect from './Country'

import formImage from "../../assests/images/why-choose-us.png";
import { Button } from "@mui/material";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Icon from './icon'
import { useState } from "react";
import { signup } from '../../actions/user';
import { AUTH } from '../../constants/actionTypes';
import {countries} from './countries'
import dayjs from 'dayjs';

import './styles.css'

interface FormValues {
  name: string;
  email: string;
  password : string;
  confirmPassword: string;
  birthday: string;
  country: string;
  terms: string;
}

interface Stateof extends SnackbarOrigin {
  open: boolean;
}

const date = new Date();

let currentDay= String(date.getDate()).padStart(2, '0');

let currentMonth = String(date.getMonth()+1).padStart(2,"0");

let currentYear = date.getFullYear();

const SignIn = () => {

  const [isSignin, setIsSignin] = useState(false);
  const [error, setError] = useState(""); 

  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  const googleSuccess = async () => {
    console.log("Need google api")
  };

  const googleFailure = () => {
      console.log("Google Sign In was unsuccessful. Try agin later")
  };
 
  const navigate = useNavigate(); // Use useNavigate to get the navigation function

  const [message, setMessage] = React.useState<Stateof>({
    open: false,
    vertical: 'bottom',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = message;

  const handleClose = () => {
    setMessage({ ...message, open: false });
  };

  const [user,setUser] = useState ({
    username: "",
    Email: "",
    password: "",
    birthday:"",
    country: "",
    terms: "agreed",
    joinDate:"",
    level:'',
  })

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword:"",
      birthday:"",
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
        birthday: Yup.date()
        .test('is-at-least-15', 'You must be at least 15 years old', (value) => {
          const minAgeDate = new Date();
          minAgeDate.setFullYear(minAgeDate.getFullYear() - 15);
          return value && value <= minAgeDate;
        })
        .required("Required"),
      terms: Yup.array().required("Terms of service must be checked"),
    }),

    onSubmit: async (values) => {
        
      try{

        console.log("Form submitted");
        console.log("Form values: ", values);
      
        // Update the user state with form values including the formatted birthday
        setUser({
          username: values.name,
          Email: values.email,
          password: values.password,
          birthday: values.birthday,
          country: values.country,
          terms: "agreed",
          joinDate: `${currentDay}-${currentMonth}-${currentYear}`,
          level:'entry'
        });
      
        console.log(user);
        if(user.Email !== ''){
            setIsSignin(true);
            dispatch(signup(user));
            setError("Sign up was successful");
            setMessage({ ...message, open: true });
            setTimeout(() => {
              setIsSignin(false);
            }, 4000);
            setTimeout(() => {

              navigate('/students'); // Replace '/students' with your desired route
            }, 4000);
          }
          else{
            setError("Sign up was not successful , try again");
            setMessage({ ...message, open: true });
          }

    }catch(e){ 

      console.log(e)
      setError("An error occurred during sign-up. Please try again.");
    }
    },
  })

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
            <div className="mt-3">
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
              {/*Birthday Date */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                
                  sx={{ width: '80%' }}
                  label="Your birthday date"
                  onChange={(date) => {
                    // Convert the Date object to a string in your preferred format
                    // Update the birthdate property in userData
                    formik.setFieldValue('birthday',date);
                  }}
                  value={formik.values.birthday} 
                />
              </LocalizationProvider>
              {/* Country input field */}
              <div className="pb-2">
                <label
                  htmlFor="country"
                  className="block font-latoBold text-sm pb-1"
                >
                  Country
                </label>
                <CountrySelect 
                  value={formik.values.country ? countries.find(country => country.label === formik.values.country) || null : null}
                  onChange={(selectedCountry) => {
                    // Update the "country" field in the Formik state
                    if (selectedCountry) {
                      formik.setFieldValue('country', selectedCountry.label);
                    } else {
                      formik.setFieldValue('country', ''); // Initialize with an empty string if it's null or undefined
                    }
                  }}
                />
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
              <GoogleLogin 
                render={(renderProps) => (
                    <Button className='bbtn' 
                        color='primary' 
                        fullWidth 
                        onClick={renderProps.onClick} 
                        disabled={renderProps.disabled}
                        startIcon={<Icon/>}
                        variant="contained"
                    >
                      Google sign in
                    </Button>
                    )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  clientId="Google ID"
                  cookiePolicy="single_host_origin"
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-700 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
                
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
       )}
    </m.div>
  );
}
export default SignIn;
