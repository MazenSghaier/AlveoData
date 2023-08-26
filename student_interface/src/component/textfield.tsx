import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';


import CountrySelect from './Country';

export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const [sexe, setSexe] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSexe(event.target.value as string);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
          />
        </Grid>
        <Grid item xs={6}>
        <TextField
          label="Birthday Date"
          id="outlined-start-adornment"
          sx={{ width: '70%' , m:2  }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
        />
        </Grid>
        <Grid item xs={6}>
            <FormControl sx={{ width: '70%', m: 2, position: 'relative' }}>
              <InputLabel id="demo-simple-select-label">Sexe</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sexe}
                label="Sexe"
                onChange={handleChange}
                sx={{ width: '100%' }} // Fix the width of the Sexe component
              >
                <MenuItem value={"mas"}>Man</MenuItem>
                <MenuItem value={"fem"}>Woman</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}><CountrySelect/></Grid>
        </Grid>
      </div>
    </Box>
  );
}