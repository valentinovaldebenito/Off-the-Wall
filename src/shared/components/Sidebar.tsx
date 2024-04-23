import React from 'react'
import { Box, Typography } from '@mui/material';


const Sidebar = () => {
    return (
        <Box className="bg-black-alpha-10 w-full" sx={{height: "450px"}}>
            <div className="flex justify-content-center">
                <Typography>
                    Sidebar
                </Typography>
            </div>
        </Box>
        
    );
};

export default Sidebar;