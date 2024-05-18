import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' , marginTop : 10 ,justifyContent:'center', alignItems:'center' , height:'100%', width:'100%', position:'absolute',
      zIndex:2 , top:0 
     }}>
      <CircularProgress size={80} />
    </Box>
  );
}
