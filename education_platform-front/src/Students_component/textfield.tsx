import * as React from 'react';
import Box from '@mui/material/Box';
import {  Button } from '@mui/material';
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

import CountrySelect from './Country';
import { updatedUser } from '../actions/user';

export default function InputAdornments() {

  const [userData,setUserData] = React.useState({
    FirstName:'',LastName:'',Phone:'',Email:'',birthdate:'',gender:'',country:''
  })

  const dispatch = useDispatch();

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (e:any) => {
     
  }

  const clear = () => {

  }

  function formatDateToString(date:any) {
    // Use the Intl.DateTimeFormat API to format the date as a string
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
  }

  console.log(userData)

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' , mt:4 , mb: 4 }}>
      <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="First Name"
            id="outlined-start-adornment"
            sx={{ width: '70%' , m:2 }}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
            onChange={(e) =>
              setUserData((prevUserData) => ({
                ...prevUserData,
                FirstName: e.target.value,
              }))}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Last Name"
            id="outlined-start-adornment"
            sx={{ width: '70%' , m:2 }}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
            onChange={(e) =>
              setUserData((prevUserData) => ({
                ...prevUserData,
                LastName: e.target.value,
              }))}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Phone Number"
            id="outlined-start-adornment"
            sx={{ width: '70%' , m:2 }}
            InputProps={{
              startAdornment: <InputAdornment position="start">+</InputAdornment>,
            }}
            onChange={(e) =>
              setUserData((prevUserData) => ({
                ...prevUserData,
                Phone: e.target.value,
              }))}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Email"
            id="outlined-start-adornment"
            sx={{ width: '70%' , m:2 }}
            InputProps={{
              startAdornment: <InputAdornment position="start"></InputAdornment>,
            }}
            onChange={(e) =>
              setUserData((prevUserData) => ({
                ...prevUserData,
                Email: e.target.value,
              }))}
          />
        </Grid>
        <Grid item xs={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{ width: '70%', m: 2 }}
            label="Your birthday date"
            onChange={(date) => {
              // Convert the Date object to a string in your preferred format
              const formattedDate = formatDateToString(date);

              // Update the birthdate property in userData
              setUserData((prevUserData) => ({
                ...prevUserData,
                birthdate: formattedDate,
              }));
            }}
          />
        </LocalizationProvider>
      </Grid>

        <Grid item xs={6}>
            <FormControl sx={{ width: '70%', m: 2, position: 'relative' }}>
              <InputLabel id="demo-simple-select-label">Sexe</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={userData.gender}
                label="Sexe"
                onChange={(e) =>
                  setUserData((prevUserData) => ({
                    ...prevUserData,
                    gender: e.target.value as string
                  }))}
                sx={{ width: '100%' }} 
              >
                <MenuItem value={"mas"} sx={{ color: '#35bbe3' }}><FaceIcon sx={{ color: '#35bbe3', padding: '3px' }}/> Man</MenuItem>
                <MenuItem value={"fem"} sx={{ color: '#35bbe3' }}><Face3Icon sx={{ color: '#35bbe3', padding: '3px' }}/> Woman</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}><CountrySelect/></Grid>
        </Grid>
      </div>
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
            >
              Clear
          </Button> 
        </Grid>
      </Grid>
    </Box>
  );
}
