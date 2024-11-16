import { Box, SwipeableDrawer, Typography, styled } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchBar from '../../Components/SearchBar';
import FilterCard from '../../Components/FilterCard';
import PopularCard from '../../Components/PopularCard';
import MenuCard from '../../Components/MenuCard';
import { grey } from '@mui/material/colors';
import Product from '../Product/Product'
import { useState } from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';

function Home() {
    const [state, setState] = useState({
        openDrawer: false
    })

    const toggleDrawer = (state) => () => {
        setState((prevState) => ({
            ...prevState,
            openDrawer: state
        }));
    };
    return (
        <>
            <Box>
                <Container sx={{ paddingBottom: 0 }}>
                    <Box>
                        <Typography variant='h1' sx={{ paddingBottom: '4px' }}>
                            Spoon Me
                        </Typography>
                        <GroupContainer>
                            <LocationOnIcon sx={{ color: 'red' }} fontSize='small' />
                            <Typography>Kunnamangalam</Typography>
                        </GroupContainer>
                    </Box>
                    <LocalMallIcon sx={{ color: 'gray' }} />
                </Container>
                <SearchBarContainer>
                    <SearchBar />
                </SearchBarContainer>
                <VerticalScrollContainer sx={{ paddingTop: '8px' }}>
                    <FilterCard
                        img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        name="Burger"
                    />
                    <FilterCard
                        img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        name="Burger"
                    />
                    <FilterCard
                        img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        name="Burger"
                    />
                    <FilterCard
                        img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        name="Burger"
                    />
                    <FilterCard
                        img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        name="Burger"
                    />
                </VerticalScrollContainer>
                {/* <Headding sx={{ px: '16px' }}>
                    Popular
                </Headding> */}
                <VerticalScrollContainer>
                    <PopularCard
                        img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        name='Burger'
                    />
                    <PopularCard
                        img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        name='Burger'
                    />
                    <PopularCard
                        img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        name='Burger'
                    />
                    <PopularCard
                        img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        name='Burger'
                    />
                </VerticalScrollContainer>
                {/* <Headding sx={{ px: '16px' }}>
                    Menu
                </Headding> */}
                <MenuContainer>
                    <MenuCard
                        img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        name='Burger'
                        amount={100}
                    />
                    <MenuCard
                        img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        name='Burger'
                        amount={100}
                    />
                    <MenuCard
                        img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        name='Burger'
                        amount={100}
                    />
                    <MenuCard
                        img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        name='Burger'
                        amount={100}
                        onClick={() => setState((prevState) => ({ ...prevState, openDrawer: true }))}
                    />
                </MenuContainer>
            </Box>
            <SwipeableDrawer
                anchor='bottom'
                open={state.openDrawer}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                disableSwipeToOpen={false}
                transitionDuration={500}
                sx={{
                    '& .MuiDrawer-paper': {
                        height: '70vh',
                        borderTopRightRadius: '16px',
                        borderTopLeftRadius: '16px'
                    },
                }}
            >
                <Puller />
                <Product />
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
const GroupContainer = styled(Box)(() => ({
    display: 'flex',
    gap: '4px',
    alignItems: 'center'

}))

const VerticalScrollContainer = styled(Box)(() => ({
    padding: '16px',
    display: 'flex',
    gap: '16px',
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