import { Badge, Box, Button, Chip, Grid2, IconButton, Rating, Typography, styled } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Product({ food }) {
    const navigation = useNavigate()
    return (
        <Box>
            <Box
                component="img"
                src={food?.img}
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
                    {food?.title}
                </Headding>
                <Rating name="read-only" value={food?.rating ?? 0} readOnly precision={0.5} />
            </Container>
            <Container>
                <GroupContainer>
                    <AdjustIcon fontSize='small' sx={{ color: food?.isVeg ? 'green' : 'red' }} />
                    <Typography>
                        {food?.isVeg ? 'Veg' : 'Non Veg'}
                    </Typography>
                </GroupContainer>
                <GroupContainer>
                    <Typography>{food?.amount}</Typography>
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
                        <IconButton aria-label="delete" onClick={() => navigation('cart')}>
                            <Badge badgeContent={20} color="secondary">
                                <LocalMallIcon sx={{ color: 'black' }} />
                            </Badge>
                        </IconButton>
                    </Grid>
                    <Grid size={6}>
                        <CartButton variant="contained">Add to Cart</CartButton>
                    </Grid>
                    <Grid size={4}>
                        <GroupContainer>
                            <IconButton aria-label="delete">
                                <RemoveCircleIcon sx={{ color: 'black' }} />
                            </IconButton>
                            <Typography>10</Typography>
                            <IconButton aria-label="delete">
                                <AddCircleIcon sx={{ color: 'black' }} />
                            </IconButton>
                        </GroupContainer>
                    </Grid>
                </Grid>
            </BottomContainer>
        </Box >
    );
}

Product.propTypes = {
    food: PropTypes.object,
};
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
