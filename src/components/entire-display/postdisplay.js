import * as React from 'react';
import Box from '@mui/material/Box';
import "./entire.css";

function BoxSystemProps({title,image})  {
  
        return (
            <Box className="boxes"
                //  height={400}
                //  width={300}
                //my={4}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '2px solid grey' }}
            >
                <p>{title}</p>
                <img src={image} 
                height={300}
                width={200}
                
                alt="Uploaded Image" />
            </Box>
        );
    }


export default BoxSystemProps;
