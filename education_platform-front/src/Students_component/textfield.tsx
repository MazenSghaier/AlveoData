import * as React from 'react';
import { useState } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import {  Button, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import FaceIcon from '@mui/icons-material/Face';
import Face3Icon from '@mui/icons-material/Face3';

import { useDispatch } from 'react-redux';
import { updatedUser } from '../actions/user';

import CountrySelect from '../Visitors_components/Signup/Country'
import {countries} from '../Visitors_components/Signup/countries'

interface FormValues {
  name: string;
  email: string;
  password : string;
  confirmPassword: string;
  birthday: string;
  country: string;
  gender: string;
}



export default function InputAdornments() {

  const [user,setUser] = useState ({
    username: "",
    Email: "",
    password: "",
    birthday:"",
    country: "",
  })
  const [error, setError] = useState(""); 


  const dispatch = useDispatch();

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (e:any) => {
     
  }

  const clear = () => {

  }

  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword:"",
      birthday:"",
      country: "",
      gender:""
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less."),
      email: Yup.string()
        .email("Invalid email address"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"),""], "Passwords must match"),
        birthday: Yup.date()
        .test('is-at-least-15', 'You must be at least 15 years old', (value) => {
          const minAgeDate = new Date();
          minAgeDate.setFullYear(minAgeDate.getFullYear() - 15);
          return value && value <= minAgeDate;
        }),
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

        });
      
        console.log(user);
        if(user.Email !== ''){
           
            
            setError("Sign up was successful");
            
          }
          else{
            setError("Sign up was not successful , try again");
           
          }

    }catch(e){ 

      console.log(e)
      setError("An error occurred during sign-up. Please try again.");
    }
    },
  })

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' , mt:4 , mb: 4 }}>
      <form
            onSubmit={formik.handleSubmit}
           
          >
        <Grid container spacing={2}>
          <Typography variant="h6">Personal Information</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Username"
                id="outlined-start-adornment"
                sx={{ width: '60%' , m:2 }}
                InputProps={{
                  startAdornment: <InputAdornment position="start"></InputAdornment>,
                }}
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                name="name"
              />
            </Grid>
            <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: '60%', m: 2 }}
                label="Your birthday date"
                onChange={(date) => {
                  formik.setFieldValue('birthday',date);
                }}
                value={formik.values.birthday} 
              />
            </LocalizationProvider>
          </Grid>

            <Grid item xs={6}>
                <FormControl sx={{ width: '70%', m: 2, position: 'relative' }}>
                  <InputLabel id="demo-simple-select-label">Sexe</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Sexe"
                    sx={{ width: '70%' }} 
                    name="gender" // Make sure to set the correct name attribute
                    onChange={formik.handleChange}
                    value={formik.values.gender|| ''}
                    onBlur={formik.handleBlur}
                  >
                    <MenuItem value={"mas"} sx={{ color: '#35bbe3' }}><FaceIcon sx={{ color: '#35bbe3', padding: '3px' }}/> Man</MenuItem>
                    <MenuItem value={"fem"} sx={{ color: '#35bbe3' }}><Face3Icon sx={{ color: '#35bbe3', padding: '3px' }}/> Woman</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} >
                <CountrySelect
                 value={formik.values.country ? countries.find(country => country.label === formik.values.country) || null : null}
                 onChange={(selectedCountry) => {
                  // Update the "country" field in the Formik state
                  if (selectedCountry) {
                    formik.setFieldValue('country', selectedCountry.label);
                  } else {
                    formik.setFieldValue('country', ''); // Initialize with an empty string if it's null or undefined
                  }
                }}/>
              </Grid>
            </Grid>
        </Grid>
        <Grid container spacing={2} className='pt-5 mt-5'>
          <Typography variant="h6">User Information</Typography>
          <Grid container spacing={2}>
              <Grid item xs={6}>
                    <TextField
                      label="Email"
                      id="outlined-start-adornment"
                      sx={{ width: '60%' , m:2 }}
                      InputProps={{
                        startAdornment: <InputAdornment position="start"></InputAdornment>,
                      }}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                      name="email"
                    />
                  </Grid>
              </Grid>
          <Grid container spacing={2}>
              <Grid item xs={6}>
                  <TextField
                    label="Password"
                    sx={{ width: '60%', m:2 }}
                    type={"password"}
                    onChange={formik.handleChange}
                   value={formik.values.password}
                   onBlur={formik.handleBlur}
                   name="password"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Comfirme Password"
                    sx={{ width: '60%', m:2 }}
                    type={"password"}
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    onBlur={formik.handleBlur}
                    name="confirmPassword"
                  />
                </Grid>
            </Grid>
          </Grid>
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}>
          <Grid item xs={5}>
            <Button
              type="submit" 
              variant="outlined"
              sx={{
              width: '6rem',
              mt: 3,
              backgroundColor: '#35bbe3',
              display: 'block', 
              color:'white',
              '&:hover': {
                color: '#35bbe3', 
              },
              }}
              onClick={handleSubmit}
              >
                Modify
            </Button>
          </Grid> 
          <Grid item xs={5}>
            <Button
              variant="outlined"
              sx={{
              width: '6rem',
              mt: 3,
              backgroundColor: '#35bbe3',
              display: 'block', 
              color:'white',
              '&:hover': {
                color: '#35bbe3', 
              },
              }}
              >
                Clear
            </Button> 
          </Grid>
      </Grid>
    </form>
    </Box>
  );
}
