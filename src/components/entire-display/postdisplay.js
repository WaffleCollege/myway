import * as React from 'react';
import Box from '@mui/material/Box';
import "./entire.css"

export default function BoxSystemProps() {
  return (
    <Box className = "boxes"
      height={200}
      width={200}
      my={4}
    //   display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
     画像、＃
    </Box>
  );
}
