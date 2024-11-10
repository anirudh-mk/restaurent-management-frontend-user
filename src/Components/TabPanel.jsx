import { Box } from '@mui/material';
import React from 'react'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: '16px' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default TabPanel