import { Box, Grid2, IconButton, Typography, styled } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
function ProductCard() {
    return (
        <Container>
            <Grid container spacing={1}>
                <Grid size={4}>
                    <Box
                        component="img"
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        sx={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            display: 'flex',
                            borderRadius: '10px'
                        }}
                    />
                </Grid>
                <Grid size={8} sx={{ px: '8px' }}>
                    <Headding>Burger</Headding>
                    <GroupContainer>
                        <IconButton aria-label="delete">
                            <RemoveCircleIcon />
                        </IconButton>
                        <Typography>10</Typography>
                        <IconButton aria-label="delete">
                            <AddCircleIcon />
                        </IconButton>
                    </GroupContainer >
                    <GroupContainer sx={{ justifyContent: 'end' }}>
                        <Typography>100</Typography>
                        <CurrencyRupeeIcon fontSize='small' />
                    </GroupContainer>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductCard

const Grid = styled(Grid2)(() => ({

}))

const Headding = styled(Typography)(() => ({
    fontSize: '22px',
    fontWeight: 500
}))

const GroupContainer = styled(Box)(() => ({
    display: 'flex',
    gap: '4px',
    alignItems: 'center'
}))

const Container = styled(Box)(() => ({
    boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.3)",
    borderRadius: 10
}));
