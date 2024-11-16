import { Box, Typography, styled } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchBar from '../../Components/SearchBar';
import FilterCard from '../../Components/FilterCard';
import PopularCard from '../../Components/PopularCard';
import MenuCard from '../../Components/MenuCard';

function Home() {

    return (
        <>
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
                    />
                </MenuContainer>
            </Box>
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
