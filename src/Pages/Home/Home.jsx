import { Badge, Box, IconButton, SwipeableDrawer, Typography, styled } from '@mui/material'
import SearchBar from '../../Components/SearchBar';
import FilterCard from '../../Components/FilterCard';
import PopularCard from '../../Components/PopularCard';
import MenuCard from '../../Components/MenuCard';
import { grey } from '@mui/material/colors';
import Product from '../Product/Product'
import { useState } from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { FilterOptions, MenuFoods } from '../../Utils/SupportFunctions';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigation = useNavigate()

    const [state, setState] = useState({
        openDrawer: false,
        filterItem: 'All',
        food: null
    })
    const toggleDrawer = (state) => () => {
        setState((prevState) => ({
            ...prevState,
            openDrawer: state
        }));
    };
    const handleFilterClick = (name) => {
        setState((prevState) => ({
            ...prevState,
            filterItem: name
        }))
    }

    const handleFoodClick = (openDrawer, foodObj) => {
        setState((prevState) => ({
            ...prevState,
            openDrawer: openDrawer,
            food: foodObj
        }))
    }
    return (
        <>
            <Box>
                <Container sx={{ paddingBottom: 0 }}>
                    <Typography variant='h1' sx={{ paddingBottom: '4px' }}>
                        Spoon Me
                    </Typography>
                    <IconButton aria-label="delete" onClick={() => navigation('cart')}>
                        <Badge badgeContent={20} color="secondary">
                            <LocalMallIcon sx={{ color: 'black' }} />
                        </Badge>
                    </IconButton>
                </Container>
                <SearchBarContainer>
                    <SearchBar />
                </SearchBarContainer>
                <VerticalScrollContainer sx={{ paddingTop: '8px' }}>
                    {FilterOptions.map((item, index) =>
                        <FilterCard
                            key={index}
                            img={item.img}
                            name={item.title}
                            onClick={() => handleFilterClick(item.title)}
                            selectedItem={state.filterItem}
                        />
                    )}
                </VerticalScrollContainer>
                <Typography variant='h2' sx={{ px: '16px' }}>
                    Popular
                </Typography>
                <VerticalScrollContainer>
                    {MenuFoods.map((item, index) =>
                        <PopularCard
                            key={index}
                            img={item.img}
                            name={item.title}
                            rating={item.rating}
                            onClick={() => handleFoodClick(true, item)}
                        />

                    )}

                </VerticalScrollContainer>
                <Typography variant='h2' sx={{ px: '16px' }}>
                    Menu
                </Typography>
                <MenuContainer>
                    {MenuFoods.map((item, index) =>
                        <MenuCard
                            key={index}
                            img={item.img}
                            name={item.title}
                            amount={item.amount}
                            isVeg={item.isVeg}
                            rating={item.rating}
                            onClick={() => handleFoodClick(true, item)}
                        />
                    )}
                </MenuContainer>
            </Box>
            <SwipeableDrawer
                anchor="bottom"
                open={state.openDrawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                disableSwipeToOpen={false}
                transitionDuration={500}
                sx={{
                    '& .MuiDrawer-paper': {
                        height: '75vh',
                        borderTopRightRadius: '16px',
                        borderTopLeftRadius: '16px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                    },
                }}
            >
                <Puller />
                <Box sx={{ overflowY: 'auto' }}>
                    <Product
                        food={state.food}
                        toggleDrawer={toggleDrawer}
                    />
                </Box>
            </SwipeableDrawer>

        </>
    )
}

export default Home

const Container = styled(Box)(() => ({
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

const SearchBarContainer = styled(Box)(() => ({
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    paddingTop: '16px',
    paddingBottom: '8px',
}))
const VerticalScrollContainer = styled(Box)(() => ({
    padding: '16px',
    display: 'flex',
    gap: '12px',
    overflowX: 'scroll',
    scrollbarWidth: 'none', // For Firefox
    '&::-webkit-scrollbar': {
        display: 'none' // For Chrome, Safari, and Edge
    }
}));

const MenuContainer = styled(Box)(() => ({
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
}))

const Puller = styled('div')(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: grey[300],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
    ...theme.applyStyles('dark', {
        backgroundColor: grey[900],
    }),
}));