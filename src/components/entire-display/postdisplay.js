import * as React from 'react';
import Box from '@mui/material/Box';
import "./entire.css"
import Entire from './entire';
import storage from "../../firebase"

class BoxSystemProps extends React.Component {
  render (){
  return (
    <Box className = "boxes"
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
     <h1>{this.props.title}</h1>

    </Box>
  );
  }
}

export default BoxSystemProps;　