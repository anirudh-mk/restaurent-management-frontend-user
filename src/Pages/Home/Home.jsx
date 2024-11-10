import { Box, Icon, Paper, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import SearchBar from '../../Components/SearchBar';
import styled from 'styled-components';


function Home() {
    return (
        <Fragment>
            <Paper sx={{ width: "100%", height: "100%" }}>
                <Box sx={{
                    p: "8px",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography
                        sx={{ color: "#001746", fontSize: "23px", fontWeight: "500" }}
                        variant="h2"
                    >
                        Spoon Me
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography>
                            Kunnamangalam
                        </Typography>
                        <PlaceIcon />
                    </Box>
                </Box>
                <SearchBar />
                <Box>
                </Box>
            </Paper>
        </Fragment>
    )
}

export default Home