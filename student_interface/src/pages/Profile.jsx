import React,{useState, useEffect} from 'react';
import Sidenav from '../component/Sidenav';
import { Box, Button, Divider, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Navbar from '../component/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import InputAdornments from  '../component/textfield';
import Grid from '@mui/material/Grid';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useDispatch } from 'react-redux';
import { getUser } from '../actions/user';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(40%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: .5,
});

const StyledButton = styled(Button)({
  backgroundColor: '#35bbe3',
  margin:6,
  color: 'white',
  '&:hover': {
    backgroundColor: 'white', 
    color: '#35bbe3',
  },
});

export default function Profile() {

  const user = useSelector(state => state.user);
  console.log(user);

  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  useEffect(() =>{

    dispatch(getUser());
    
  },[dispatch])

  return (
    <>
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p:0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ml:4
            
          }}
        > {!show && (
          <Card sx={{ maxWidth: 345, p: 10, borderRadius: '15px', boxShadow: '0px 2px 4px rgba(0, 0, 0, .5)' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3 }}>
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<div style={{ width: 15, height: 15, backgroundColor: '#46d008', borderRadius: '50%' }} />}
              >
                <Avatar sx={{ width: 80, height: 80 }} src="/your-image-url.jpg" />
              </Badge>
            </Box>
            <CardContent>
              <Typography variant="h5" sx={{ color:"#35bbe3" ,fontSize: '1.25rem', fontWeight: 'bold' }}>
                Mazen sghaier
              </Typography>
              <Typography variant="subtitle1" sx={{ fontSize: '.8rem', color: 'gray', mt: 1 }}>
                 Member
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '.8rem', color: 'gray', mt: 2 }}>
                <Typography color="black">User ID:</Typography> ABC123
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '.8rem', color: 'gray', mt: 1 }}>
              <Typography color="black">Email:</Typography> mazen@example.com
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '.8rem', color: 'gray', mt: 1 }}>
                <Typography color="black" >Phone:</Typography> +123 456 7890
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '.8rem', color: 'gray', mt: 1 }}>
                <Typography color="black" >Address:</Typography> 123 Street, City, Country
              </Typography>
            </CardContent>
            <Divider sx={{ w: '8rem', mt: 3, mb:3 }} />
            <Button
              color="secondary"
              size="medium"
              variant="outlined"
              onClick={toggleShow}
              sx={{
                width: '6rem',
                mt: 3,
                backgroundColor: '#35bbe3',
                display: 'block', 
                margin: '0 auto',
                color:'white',
                '&:hover': {
                  color: '#35bbe3', 
                },
              }}
            >
              Modify
            </Button>          
          </Card>
          )}
        </Box>
        {show && (
          
          <Box sx={{ ml: 3, display: 'flex', flexDirection: 'column' }}>
          <Button
            variant="outlined"
            onClick={toggleShow}
            sx={{
              width: '6rem',
              mt: 3,
              backgroundColor: '#35bbe3',
              color: 'white',
              '&:hover': {
                color: '#35bbe3',
              },
            }}
          >
            Back
          </Button>       
            <Grid item xs={12} sm={6} sx={{display:'flex', alignContent:'center', justifyContent:'center'}}>
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={<div style={{ width: 10, height: 10, backgroundColor: '#46d008', borderRadius: '50%' , mt:8}} />}
              >
                <Avatar src="/your-image-url.jpg" />
              </Badge>

              <StyledButton size="small" component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                Upload photo
                <VisuallyHiddenInput sx={{color: '#35bbe3' , pl:'2'}}  type="image" />
              </StyledButton>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Personal Information</Typography>
              <InputAdornments />
            </Grid>
        </Box>
        )}
      </Box>
    </>
  );
}