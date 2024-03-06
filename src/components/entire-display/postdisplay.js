import * as React from 'react';
import Box from '@mui/material/Box';
import "./entire.css";

function BoxSystemProps({title,image})  {
  
        return (
            <Box className="boxes"
                height={200}
                width={200}
                my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                // sx={{ border: '2px solid grey' }
            >
                <h1>{title}</h1>
                <img src={image} alt="Uploaded Image" />
            </Box>
        );
    }


export default BoxSystemProps;
