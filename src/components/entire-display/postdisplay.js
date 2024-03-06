import * as React from 'react';
import Box from '@mui/material/Box';
import "./entire.css";

function BoxSystemProps({ title, image }) {
    return (        
        <Box className="boxes"
            height={200}
            width={200}
            my={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={4}
            p={2}
            sx={{ border: '2px solid  #9DDCDC', position: 'relative' }}
        >
    
            <div className='boxtitle' style={{ position: 'absolute', zIndex: 1, top: '50%', transform: 'translateY(-50%)' }}>
                <h1 style={{ margin: 0 }}>{title}</h1>
            </div>
            <div className='boximage' style={{ width: '100%', height: '100%', overflow: 'hidden', textAlign: 'center', position: 'relative', zIndex: 0 }}>
                <img src={image} alt="Uploaded Image" style={{ width: '100%', height: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',opacity: 1  }} />                
            </div>
            
        </Box>
    )
}

export default BoxSystemProps;