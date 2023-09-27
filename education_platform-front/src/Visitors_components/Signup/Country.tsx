import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {countries} from './countries'

interface CountryType {
  code: string;
  label: string;
  suggested?: boolean;
}

interface CountrySelectProps {
  value: CountryType | null; // Change the type to CountryType | null
  onChange: (newValue: CountryType | null) => void; // Adjust the type of newValue
}

export default function CountrySelect(props: CountrySelectProps) {
  const { value, onChange } = props;


  return (
    <Autocomplete
    value={value} // Use the value prop directly
    onChange={(_, newValue) => {
      onChange(newValue); // Call the onChange callback with the selected country
    }}
      id="country-select-demo"
      sx={{ width: 320 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      isOptionEqualToValue={(option, value) => option.code === value.code}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code}) 
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

