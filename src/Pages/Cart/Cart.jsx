import { Box, Button, Divider, Grid2, Typography, styled } from '@mui/material'
import React, { useState } from 'react';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ProductCard from './ProductCard';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../../Components/TabPanel';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';

const steps = [
    {
        label: '9.30 : Reached to Resturent',
        description: `Reached to Resturent`,
    },
    {
        label: '9:47 : Order Placed',
        description:
            'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: '10:00 : Order Confirmed',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    }, {
        label: '10:00 : Order Recived',
        description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];




function Cart() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };


    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box>
            <Headding sx={{ px: '16px', py: '8px' }}>
                Cart
            </Headding>
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                >
                    <Tab label="Cart" />
                    <Tab label="Status" />
                </Tabs>
                <TabPanel value={value} index={0} >
                    <ProductCard />
                </TabPanel>
                <TabPanel value={value} index={1} >

                    <Box sx={{ maxWidth: 400 }}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((step, index) => (
                                <Step key={step.label}>
                                    <StepLabel
                                        optional={
                                            index === steps.length - 1 ? (
                                                <Typography variant="caption">Last step</Typography>
                                            ) : null
                                        }
                                    >
                                        {step.label}
                                    </StepLabel>
                                    <StepContent>
                                        <Typography>{step.description}</Typography>
                                        {/* <Box sx={{ mb: 2 }}>
                                            <Button
                                                variant="contained"
                                                onClick={handleNext}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                            </Button>
                                            <Button
                                                disabled={index === 0}
                                                onClick={handleBack}
                                                sx={{ mt: 1, mr: 1 }}
                                            >
                                                Back
                                            </Button>
                                        </Box> */}
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} sx={{ p: 3 }}>
                                <Typography>Tank you for order with us, Have a Nice Day</Typography>
                            </Paper>
                        )}
                    </Box>



                </TabPanel>
            </Box>
            <BottomContainer>
                <Grid container spacing={1}>
                    <Grid size={3}>
                        <GroupContainer>
                            <CurrencyRupeeIcon fontSize='small' />
                            <Typography>100</Typography>
                        </GroupContainer>
                    </Grid>
                    <Grid size={9}>
                        <CheckoutButton variant="contained">Checkout</CheckoutButton>
                    </Grid>
                </Grid>
            </BottomContainer>
        </Box >
    )
}

export default Cart

const Headding = styled(Typography)(({ theme }) => ({
    fontSize: '22px',
    fontWeight: 500
}))

const Grid = styled(Grid2)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center'

}))

const CheckoutButton = styled(Button)(({ theme }) => ({
    width: '100%'
}))

const BottomContainer = styled(Box)(({ theme }) => ({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '16px',
    boxShadow: '0 -4px 2px rgba(0, 0, 0, 0.03)',
    borderTopLeftRadius: '16px',
}))

const GroupContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '4px',
    alignItems: 'center'
}))

const Card = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '4px',
    alignItems: 'center'
}))