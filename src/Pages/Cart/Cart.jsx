import { Box, Button, Divider, Grid2, Typography, styled } from '@mui/material'
import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ProductCard from './ProductCard';

function Cart() {
    return (
        <Box>
            <Headding sx={{ px: '16px', py: '8px' }}>
                Cart
            </Headding>
            <Divider />
            <Box sx={{ p: '16px' }}>
                <ProductCard />
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