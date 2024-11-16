import { Badge, Box, Button, Chip, Grid2, IconButton, Rating, Typography, styled } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function Product() {
    return (
        <Box>
            <Box
                component="img"
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                sx={{
                    width: "100vw",
                    height: "100vw",
                    objectFit: "cover",
                    borderBottomRightRadius: '40px',
                }}
            />
            <Container>
                <Headding>
                    Burger
                </Headding>
                <Rating name="read-only" value={2} readOnly />
            </Container>
            <Container>
                <GroupContainer>
                    <AdjustIcon fontSize='small' sx={{ color: 'green' }} />
                    <Typography>
                        Veg
                    </Typography>
                </GroupContainer>
                <GroupContainer>
                    <Typography>100</Typography>
                    <CurrencyRupeeIcon fontSize='small' />
                </GroupContainer>
            </Container>
            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos error quod id, consectetur qui mollitia delectus amet voluptatum voluptates repudiandae repellat iste sequi blanditiis aut ipsa, est optio voluptatibus. Necessitatibus.
            </Description>
            <Headding sx={{ px: '16px', py: '8px' }}>
                Ingredients
            </Headding>
            <Box sx={{ px: '16px' }} gap='8px'>
                <CustomChip label="Salt" variant="outlined" />
                <CustomChip label="Chilli" variant="outlined" />
                <CustomChip label="Bun" variant="outlined" />
                <CustomChip label="Beef" variant="outlined" />
                <CustomChip label="Salt" variant="outlined" />
                <CustomChip label="Chilli" variant="outlined" />
                <CustomChip label="Bun" variant="outlined" />
                <CustomChip label="Beef" variant="outlined" />
            </Box>
            <BottomContainer>
                <Grid container spacing={1}>
                    <Grid size={2}>
                        <IconButton aria-label="delete">
                            <Badge badgeContent={20} color="secondary">
                                <LocalMallIcon />
                            </Badge>
                        </IconButton>
                    </Grid>
                    <Grid size={6}>
                        <CartButton variant="contained">Add to Cart</CartButton>
                    </Grid>
                    <Grid size={4}>
                        <GroupContainer>
                            <IconButton aria-label="delete">
                                <RemoveCircleIcon />
                            </IconButton>
                            <Typography>10</Typography>
                            <IconButton aria-label="delete">
                                <AddCircleIcon />
                            </IconButton>
                        </GroupContainer>
                    </Grid>
                </Grid>
            </BottomContainer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nam possimus, voluptate est dolores aut aspernatur voluptatum nemo nisi magnam molestias sapiente sint voluptatem cupiditate laborum accusantium aliquam. Nihil, sit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nam possimus, voluptate est dolores aut aspernatur voluptatum nemo nisi magnam molestias sapiente sint voluptatem cupiditate laborum accusantium aliquam. Nihil, sit.
        </Box >
    );
}

export default Product;

const Container = styled(Box)(() => ({
    padding: '16px',
    paddingTop: '8px',
    paddingBottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
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

const Description = styled(Typography)(() => ({
    padding: '16px',
    paddingTop: '8px',
    paddingBottom: '8px',
    textAlign: 'justify',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
}))

const CustomChip = styled(Chip)(() => ({
    marginRight: '8px',
    marginBottom: '8px'
}))

const BottomContainer = styled(Box)(() => ({
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '16px',
    boxShadow: '0 -4px 2px rgba(0, 0, 0, 0.03)',
    borderTopLeftRadius: '16px',
    backgroundColor: 'white'
}))

const Grid = styled(Grid2)(() => ({
    display: 'flex',
    alignItems: 'center'

}))

const CartButton = styled(Button)(() => ({
    width: '100%'
}))
