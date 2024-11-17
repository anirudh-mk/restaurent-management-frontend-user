import { Badge, Box, Button, Chip, Grid2, IconButton, Rating, TextField, Typography, styled } from '@mui/material';
import AdjustIcon from '@mui/icons-material/Adjust';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Product({ food, toggleDrawer, setSnackbar }) {
    const navigation = useNavigate()
    const [state, setState] = useState({
        itemCont: 1
    })

    const handleProductCount = (action) => {
        setState((prevState) => {
            let newCount = prevState.itemCont;

            if (action === 'add') {
                newCount += 1;
            } else if (action === 'remove' && newCount >= 0) {
                newCount -= 1;
            } else if (action === 'remove' && newCount > 0) {
                console.log("gggg");
            }
            return {
                ...prevState,
                itemCont: newCount,
            };
        });
    };

    const handleAddToCart = () => {
        toggleDrawer(false)
        setSnackbar((prevState) => ({
            ...prevState,
            open: true,
            severity: 'success',
            message: "Item added to cart"
        }))
    }
    return (
        <Box sx={{ paddingBottom: '80px' }}>
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
            <Typography variant='h3' sx={{ px: '16px', py: '8px' }}>
                Notes
            </Typography>
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
                    <Grid size={1.8}>
                        <IconButton aria-label="delete" onClick={() => navigation('cart')}>
                            <Badge badgeContent={20} color="secondary">
                                <LocalMallIcon sx={{ color: 'black' }} />
                            </Badge>
                        </IconButton>
                    </Grid>
                    <Grid size={6}>
                        <CartButton variant="contained" onClick={handleAddToCart}>Add to Cart</CartButton>
                    </Grid>
                    <Grid size={4}>
                        <GroupContainer>
                            <IconButton aria-label="delete" onClick={() => handleProductCount('remove')}>
                                <RemoveCircleIcon sx={{ color: 'black' }} />
                            </IconButton>
                            <TextBox
                                id="outlined-basic"
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        padding: 0,
                                    },
                                    '& .MuiInputBase-input': {
                                        padding: '2px',
                                        width: '25px',
                                        textAlign: 'center'
                                    },
                                }}
                                value={state.itemCont}
                            />
                            <IconButton aria-label="delete" onClick={() => handleProductCount('add')}>
                                <AddCircleIcon sx={{ color: 'black' }} />
                            </IconButton>
                        </GroupContainer>
                    </Grid>
                </Grid>
            </BottomContainer>
            <Typography variant='h3' sx={{ px: '16px', py: '8px' }}>
                Notes
            </Typography>
            <Container>
                <TextField
                    multiline
                    rows={4}
                    sx={{ width: '100%' }}
                    placeholder='Write your Notes'
                />
            </Container>
        </Box >
    );
}

Product.propTypes = {
    food: PropTypes.object,
    toggleDrawer: PropTypes.object,
    setSnackbar: PropTypes.func,
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
    zIndex: 1300, // Higher than the SwipeableDrawer's zIndex
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

const TextBox = styled(TextField)(() => ({
    width: '100%'
}))