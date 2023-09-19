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

import CountrySelect from './Country'

import formImage from "../../assests/images/why-choose-us.png";
import { Button } from "@mui/material";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Icon from './icon'
import { useState } from "react";
import { signup } from '../../actions/user';
import { AUTH } from '../../constants/actionTypes';

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

function formatDateToString(date:any) {
  // Use the Intl.DateTimeFormat API to format the date as a string
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

const SignIn = () => {

  const [isSignup, setIsSignup] = useState(false);
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

  const handleClick = (newState: SnackbarOrigin) => () => {
    setMessage({ ...newState, open: true });
  };

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
        .max(new Date(Date.now() - 511339078), "You must be at least 15 years")
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

            dispatch(signup(user, navigate));
            setError("Login was successful");
            setMessage({ ...message, open: true });
            setTimeout(() => {
              // Navigate after 4 seconds
              navigate('/students'); // Replace '/students' with your desired route
            }, 3000);
          }
          else{
            setError("Login was not successful , try again");
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
                    const formattedDate = formatDateToString(date);

                    // Update the birthdate property in userData
                    formik.setFieldValue('birthday', formattedDate);
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


interface CountryType {
  code: string;
  label: string;
  suggested?: boolean;
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries: readonly CountryType[] = [
  { code: 'AD', label: 'Andorra' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    
  },
  { code: 'AF', label: 'Afghanistan'},
  {
    code: 'AG',
    label: 'Antigua and Barbuda',
     
  },
  { code: 'AI', label: 'Anguilla' },
  { code: 'AL', label: 'Albania'},
  { code: 'AM', label: 'Armenia' },
  { code: 'AO', label: 'Angola' },
  { code: 'AQ', label: 'Antarctica'},
  { code: 'AR', label: 'Argentina' },
  { code: 'AS', label: 'American Samoa' },
  { code: 'AT', label: 'Austria' },
  {
    code: 'AU',
    label: 'Australia',
    suggested: true,
  },
  { code: 'AW', label: 'Aruba'},
  { code: 'AX', label: 'Alland Islands'},
  { code: 'AZ', label: 'Azerbaijan'},
  {
    code: 'BA',
    label: 'Bosnia and Herzegovina',
     
  },
  { code: 'BB', label: 'Barbados' },
  { code: 'BD', label: 'Bangladesh' },
  { code: 'BE', label: 'Belgium' },
  { code: 'BF', label: 'Burkina Faso'},
  { code: 'BG', label: 'Bulgaria'},
  { code: 'BH', label: 'Bahrain' },
  { code: 'BI', label: 'Burundi' },
  { code: 'BJ', label: 'Benin' },
  { code: 'BL', label: 'Saint Barthelemy' },
  { code: 'BM', label: 'Bermuda' },
  { code: 'BN', label: 'Brunei Darussalam' },
  { code: 'BO', label: 'Bolivia' },
  { code: 'BR', label: 'Brazil'},
  { code: 'BS', label: 'Bahamas'},
  { code: 'BT', label: 'Bhutan' },
  { code: 'BV', label: 'Bouvet Island'},
  { code: 'BW', label: 'Botswana' },
  { code: 'BY', label: 'Belarus' },
  { code: 'BZ', label: 'Belize'},
  {
    code: 'CA',
    label: 'Canada',
     
    suggested: true,
  },
  {
    code: 'CC',
    label: 'Cocos (Keeling) Islands',
     
  },
  {
    code: 'CD',
    label: 'Congo, Democratic Republic of the',
    
  },
  {
    code: 'CF',
    label: 'Central African Republic',
    
  },
  {
    code: 'CG',
    label: 'Congo, Republic of the',
     
  },
  { code: 'CH', label: 'Switzerland' },
  { code: 'CI', label: "Cote d'Ivoire" },
  { code: 'CK', label: 'Cook Islands' },
  { code: 'CL', label: 'Chile' },
  { code: 'CM', label: 'Cameroon' },
  { code: 'CN', label: 'China' },
  { code: 'CO', label: 'Colombia' },
  { code: 'CR', label: 'Costa Rica' },
  { code: 'CU', label: 'Cuba' },
  { code: 'CV', label: 'Cape Verde' },
  { code: 'CW', label: 'Curacao' },
  { code: 'CX', label: 'Christmas Island' },
  { code: 'CY', label: 'Cyprus' },
  { code: 'CZ', label: 'Czech Republic'},
  {
    code: 'DE',
    label: 'Germany',
    
    suggested: true,
  },
  { code: 'DJ', label: 'Djibouti'},
  { code: 'DK', label: 'Denmark'},
  { code: 'DM', label: 'Dominica' },
  {
    code: 'DO',
    label: 'Dominican Republic',
     
  },
  { code: 'DZ', label: 'Algeria' },
  { code: 'EC', label: 'Ecuador' },
  { code: 'EE', label: 'Estonia' },
  { code: 'EG', label: 'Egypt' },
  { code: 'EH', label: 'Western Sahara' },
  { code: 'ER', label: 'Eritrea' },
  { code: 'ES', label: 'Spain'},
  { code: 'ET', label: 'Ethiopia' },
  { code: 'FI', label: 'Finland' },
  { code: 'FJ', label: 'Fiji' },
  {
    code: 'FK',
    label: 'Falkland Islands (Malvinas)',
     
  },
  {
    code: 'FM',
    label: 'Micronesia, Federated States of',
     
  },
  { code: 'FO', label: 'Faroe Islands'},
  {
    code: 'FR',
    label: 'France',
    
    suggested: true,
  },
  { code: 'GA', label: 'Gabon' },
  { code: 'GB', label: 'United Kingdom' },
  { code: 'GD', label: 'Grenada' },
  { code: 'GE', label: 'Georgia'},
  { code: 'GF', label: 'French Guiana' },
  { code: 'GG', label: 'Guernsey' },
  { code: 'GH', label: 'Ghana'},
  { code: 'GI', label: 'Gibraltar' },
  { code: 'GL', label: 'Greenland' },
  { code: 'GM', label: 'Gambia' },
  { code: 'GN', label: 'Guinea' },
  { code: 'GP', label: 'Guadeloupe' },
  { code: 'GQ', label: 'Equatorial Guinea' },
  { code: 'GR', label: 'Greece' },
  {
    code: 'GS',
    label: 'South Georgia and the South Sandwich Islands',
     
  },
  { code: 'GT', label: 'Guatemala' },
  { code: 'GU', label: 'Guam' },
  { code: 'GW', label: 'Guinea-Bissau' },
  { code: 'GY', label: 'Guyana' },
  { code: 'HK', label: 'Hong Kong' },
  {
    code: 'HM',
    label: 'Heard Island and McDonald Islands',
     
  },
  { code: 'HN', label: 'Honduras' },
  { code: 'HR', label: 'Croatia' },
  { code: 'HT', label: 'Haiti' },
  { code: 'HU', label: 'Hungary' },
  { code: 'ID', label: 'Indonesia' },
  { code: 'IE', label: 'Ireland' },
  { code: 'IM', label: 'Isle of Man' },
  { code: 'IN', label: 'India' },
  {
    code: 'IO',
    label: 'British Indian Ocean Territory',
  },
  { code: 'IQ', label: 'Iraq' },
  {
    code: 'IR',
    label: 'Iran, Islamic Republic of',
     
  },
  { code: 'IS', label: 'Iceland' },
  { code: 'IT', label: 'Italy' },
  { code: 'JE', label: 'Jersey' },
  { code: 'JM', label: 'Jamaica' },
  { code: 'JO', label: 'Jordan' },
  {
    code: 'JP',
    label: 'Japan',
     
    suggested: true,
  },
  { code: 'KE', label: 'Kenya' },
  { code: 'KG', label: 'Kyrgyzstan' },
  { code: 'KH', label: 'Cambodia' },
  { code: 'KI', label: 'Kiribati' },
  { code: 'KM', label: 'Comoros' },
  {
    code: 'KN',
    label: 'Saint Kitts and Nevis',
     
  },
  {
    code: 'KP',
    label: "Korea, Democratic People's Republic of",
     
  },
  { code: 'KR', label: 'Korea, Republic of'},
  { code: 'KW', label: 'Kuwait' },
  { code: 'KY', label: 'Cayman Islands' },
  { code: 'KZ', label: 'Kazakhstan' },
  {
    code: 'LA',
    label: "Lao People's Democratic Republic",
     
  },
  { code: 'LB', label: 'Lebanon' },
  { code: 'LC', label: 'Saint Lucia' },
  { code: 'LI', label: 'Liechtenstein' },
  { code: 'LK', label: 'Sri Lanka' },
  { code: 'LR', label: 'Liberia' },
  { code: 'LS', label: 'Lesotho' },
  { code: 'LT', label: 'Lithuania' },
  { code: 'LU', label: 'Luxembourg' },
  { code: 'LV', label: 'Latvia' },
  { code: 'LY', label: 'Libya' },
  { code: 'MA', label: 'Morocco' },
  { code: 'MC', label: 'Monaco' },
  {
    code: 'MD',
    label: 'Moldova, Republic of',
    
  },
  { code: 'ME', label: 'Montenegro' },
  {
    code: 'MF',
    label: 'Saint Martin (French part)',
     
  },
  { code: 'MG', label: 'Madagascar' },
  { code: 'MH', label: 'Marshall Islands'},
  {
    code: 'MK',
    label: 'Macedonia, the Former Yugoslav Republic of',
    
  },
  { code: 'ML', label: 'Mali' },
  { code: 'MM', label: 'Myanmar'},
  { code: 'MN', label: 'Mongolia' },
  { code: 'MO', label: 'Macao' },
  {
    code: 'MP',
    label: 'Northern Mariana Islands',
     
  },
  { code: 'MQ', label: 'Martinique' },
  { code: 'MR', label: 'Mauritania' },
  { code: 'MS', label: 'Montserrat' },
  { code: 'MT', label: 'Malta' },
  { code: 'MU', label: 'Mauritius' },
  { code: 'MV', label: 'Maldives' },
  { code: 'MW', label: 'Malawi' },
  { code: 'MX', label: 'Mexico' },
  { code: 'MY', label: 'Malaysia' },
  { code: 'MZ', label: 'Mozambique' },
  { code: 'NA', label: 'Namibia' },
  { code: 'NC', label: 'New Caledonia' },
  { code: 'NE', label: 'Niger' },
  { code: 'NF', label: 'Norfolk Island' },
  { code: 'NG', label: 'Nigeria' },
  { code: 'NI', label: 'Nicaragua' },
  { code: 'NL', label: 'Netherlands' },
  { code: 'NO', label: 'Norway' },
  { code: 'NP', label: 'Nepal' },
  { code: 'NR', label: 'Nauru' },
  { code: 'NU', label: 'Niue' },
  { code: 'NZ', label: 'New Zealand' },
  { code: 'OM', label: 'Oman' },
  { code: 'PA', label: 'Panama' },
  { code: 'PE', label: 'Peru' },
  { code: 'PF', label: 'French Polynesia' },
  { code: 'PG', label: 'Papua New Guinea'},
  { code: 'PH', label: 'Philippines' },
  { code: 'PK', label: 'Pakistan' },
  { code: 'PL', label: 'Poland' },
  {
    code: 'PM',
    label: 'Saint Pierre and Miquelon',
     
  },
  { code: 'PN', label: 'Pitcairn' },
  { code: 'PR', label: 'Puerto Rico' },
  {
    code: 'PS',
    label: 'Palestine, State of',
     
  },
  { code: 'PT', label: 'Portugal' },
  { code: 'PW', label: 'Palau'},
  { code: 'PY', label: 'Paraguay' },
  { code: 'QA', label: 'Qatar' },
  { code: 'RE', label: 'Reunion' },
  { code: 'RO', label: 'Romania' },
  { code: 'RS', label: 'Serbia' },
  { code: 'RU', label: 'Russian Federation' },
  { code: 'RW', label: 'Rwanda' },
  { code: 'SA', label: 'Saudi Arabia' },
  { code: 'SB', label: 'Solomon Islands'},
  { code: 'SC', label: 'Seychelles' },
  { code: 'SD', label: 'Sudan' },
  { code: 'SE', label: 'Sweden' },
  { code: 'SG', label: 'Singapore' },
  { code: 'SH', label: 'Saint Helena' },
  { code: 'SI', label: 'Slovenia' },
  {
    code: 'SJ',
    label: 'Svalbard and Jan Mayen',
    
  },
  { code: 'SK', label: 'Slovakia' },
  { code: 'SL', label: 'Sierra Leone' },
  { code: 'SM', label: 'San Marino'},
  { code: 'SN', label: 'Senegal' },
  { code: 'SO', label: 'Somalia' },
  { code: 'SR', label: 'Suriname' },
  { code: 'SS', label: 'South Sudan' },
  {
    code: 'ST',
    label: 'Sao Tome and Principe',
     
  },
  { code: 'SV', label: 'El Salvador'},
  {
    code: 'SX',
    label: 'Sint Maarten (Dutch part)',
    
  },
  {
    code: 'SY',
    label: 'Syrian Arab Republic',
    
  },
  { code: 'SZ', label: 'Swaziland'},
  {
    code: 'TC',
    label: 'Turks and Caicos Islands',
    
  },
  { code: 'TD', label: 'Chad'},
  {
    code: 'TF',
    label: 'French Southern Territories',
    
  },
  { code: 'TG', label: 'Togo' },
  { code: 'TH', label: 'Thailand'},
  { code: 'TJ', label: 'Tajikistan' },
  { code: 'TK', label: 'Tokelau'},
  { code: 'TL', label: 'Timor-Leste' },
  { code: 'TM', label: 'Turkmenistan' },
  { code: 'TN', label: 'Tunisia' },
  { code: 'TO', label: 'Tonga' },
  { code: 'TR', label: 'Turkey' },
  {
    code: 'TT',
    label: 'Trinidad and Tobago',
     
  },
  { code: 'TV', label: 'Tuvalu' },
  {
    code: 'TW',
    label: 'Taiwan, Republic of China',
    
  },
  {
    code: 'TZ',
    label: 'United Republic of Tanzania',
   
  },
  { code: 'UA', label: 'Ukraine' },
  { code: 'UG', label: 'Uganda' },
  {
    code: 'US',
    label: 'United States',
    
    suggested: true,
  },
  { code: 'UY', label: 'Uruguay' },
  { code: 'UZ', label: 'Uzbekistan' },
  {
    code: 'VA',
    label: 'Holy See (Vatican City State)',
     
  },
  {
    code: 'VC',
    label: 'Saint Vincent and the Grenadines',
     
  },
  { code: 'VE', label: 'Venezuela' },
  {
    code: 'VG',
    label: 'British Virgin Islands',
    
  },
  {
    code: 'VI',
    label: 'US Virgin Islands',
     
  },
  { code: 'VN', label: 'Vietnam' },
  { code: 'VU', label: 'Vanuatu' },
  { code: 'WF', label: 'Wallis and Futuna'},
  { code: 'WS', label: 'Samoa' },
  { code: 'XK', label: 'Kosovo' },
  { code: 'YE', label: 'Yemen' },
  { code: 'YT', label: 'Mayotte' },
  { code: 'ZA', label: 'South Africa'},
  { code: 'ZM', label: 'Zambia' },
  { code: 'ZW', label: 'Zimbabwe'},
];
