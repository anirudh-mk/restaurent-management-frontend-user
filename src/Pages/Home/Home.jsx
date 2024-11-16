import { Box, Drawer, Typography, styled } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchBar from '../../Components/SearchBar';
import FilterCard from '../../Components/FilterCard';
import PopularCard from '../../Components/PopularCard';
import MenuCard from '../../Components/MenuCard';
import { useState } from 'react';
import Product from '../Product/Product';
import { grey } from '@mui/material/colors';

function Home() {

    const [drawerHeight, setDrawerHeight] = useState(70)
    const [state, setState] = useState(false)
    const [overflow, setOverflow] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleStart = (e) => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        setIsDragging(true);
        setOffset({
            x: clientX - position.x,
            y: clientY - position.y,
        });
    };

    const handleMove = (e) => {
        if (!isDragging) return;
        setOverflow(true)
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        setDrawerHeight(prev => prev += 1)
        setPosition({
            x: clientX - offset.x,
            y: clientY - offset.y,
        });
    };

    const handleEnd = () => {
        setIsDragging(false);
    };
    return (<>


        <Box>
            <Container>
                <Headding>Spoon Me</Headding>
                <GroupContainer>
                    <Typography>Kunnamangalam</Typography>
                    <LocationOnIcon sx={{ color: 'red' }} />
                </GroupContainer>
            </Container>
            <SearchBar />
            <VerticalScrollContainer>
                <FilterCard
                    img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name="Burger"
                />
            </VerticalScrollContainer>
            <Headding sx={{ px: '16px' }}>
                Popular
            </Headding>
            <VerticalScrollContainer>
                <PopularCard
                    img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name='Burger'
                />
                <PopularCard
                    img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    name='Burger'
                />
            </VerticalScrollContainer>
            <Headding sx={{ px: '16px' }}>
                Menu
            </Headding>
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
                    onClick={() => setState(true)}
                />
            </MenuContainer>
        </Box>
        <Drawer
            open={state}
            anchor="bottom"
            transitionDuration={500}
            sx={{
                '& .MuiDrawer-paper': {
                    borderRadius: '16px',
                    height: `${drawerHeight}vh`,
                },
            }}
        >
            <Puller onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd} />
            <Product overflow={overflow} />
        </Drawer>
    </>

    )
}

export default Home

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