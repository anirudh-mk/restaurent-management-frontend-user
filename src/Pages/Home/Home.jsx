import { Box, Chip, Divider, Typography, styled } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchBar from '../../Components/SearchBar';
import StarIcon from '@mui/icons-material/Star';
import AdjustIcon from '@mui/icons-material/Adjust';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

function Home() {
    return (
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

                <Box>
                    <FilterImage
                        component="img"
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                    <Typography sx={{ textAlign: 'center' }}>
                        Burger
                    </Typography>
                </Box>
                <Box>
                    <FilterImage
                        component="img"
                        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                    <Typography sx={{ textAlign: 'center' }}>
                        Burger
                    </Typography>
                </Box>

            </VerticalScrollContainer>
            <Headding sx={{ px: '16px' }}>
                Popular
            </Headding>
            <VerticalScrollContainer>
                <Box
                    sx={{
                        minWidth: '144px',
                        height: '182px',
                        borderRadius: '25px',
                        backgroundImage: 'url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'end',
                        backgroundColor: 'rgba(28, 30, 30, 0.5)',
                        backgroundBlendMode: 'overlay',
                        boxShadow: "1px 1px 5px 0 rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <Box sx={{ color: 'white', m: '16px' }}>
                        <Typography sx={{ fontSize: '20px' }}>Burger</Typography>
                        <GroupContainer>
                            <StarIcon sx={{ color: 'yellow' }} />
                            <Typography>4.5</Typography>
                        </GroupContainer>
                    </Box>
                </Box>
                <Box
                    sx={{
                        minWidth: '144px',
                        height: '182px',
                        borderRadius: '25px',
                        backgroundImage: 'url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'end',
                        backgroundColor: 'rgba(28, 30, 30, 0.5)',
                        backgroundBlendMode: 'overlay',
                    }}
                >
                    <Box sx={{ color: 'white', m: '16px' }}>
                        <Typography sx={{ fontSize: '20px' }}>Burger</Typography>
                        <GroupContainer>
                            <StarIcon sx={{ color: 'yellow' }} />
                            <Typography>4.5</Typography>
                        </GroupContainer>
                    </Box>
                </Box><Box
                    sx={{
                        minWidth: '144px',
                        height: '182px',
                        borderRadius: '25px',
                        backgroundImage: 'url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'end',
                        backgroundColor: 'rgba(28, 30, 30, 0.5)',
                        backgroundBlendMode: 'overlay',
                    }}
                >
                    <Box sx={{ color: 'white', m: '16px' }}>
                        <Typography sx={{ fontSize: '20px' }}>Burger</Typography>
                        <GroupContainer>
                            <StarIcon sx={{ color: 'yellow' }} />
                            <Typography>4.5</Typography>
                        </GroupContainer>
                    </Box>
                </Box>
                <Box
                    sx={{
                        minWidth: '144px',
                        height: '182px',
                        borderRadius: '25px',
                        backgroundImage: 'url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'end',
                        backgroundColor: 'rgba(28, 30, 30, 0.5)',
                        backgroundBlendMode: 'overlay',
                    }}
                >
                    <Box sx={{ color: 'white', m: '16px' }}>
                        <Typography sx={{ fontSize: '20px' }}>Burger</Typography>
                        <GroupContainer>
                            <StarIcon sx={{ color: 'yellow' }} />
                            <Typography>4.5</Typography>
                        </GroupContainer>
                    </Box>
                </Box>
                <Box
                    sx={{
                        minWidth: '144px',
                        height: '182px',
                        borderRadius: '25px',
                        backgroundImage: 'url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'end',
                        backgroundColor: 'rgba(28, 30, 30, 0.5)',
                        backgroundBlendMode: 'overlay',

                    }}
                >
                    <Box sx={{ color: 'white', m: '16px' }}>
                        <Typography sx={{ fontSize: '20px' }}>Burger</Typography>
                        <GroupContainer>
                            <StarIcon sx={{ color: 'yellow' }} />
                            <Typography>4.5</Typography>
                        </GroupContainer>
                    </Box>
                </Box>
            </VerticalScrollContainer>
            <Headding sx={{ px: '16px' }}>
                Menu
            </Headding>
            <MenuContainer>
                <MenuCardContainer>
                    <Box
                        sx={{
                            minWidth: '144px',
                            height: '120px',
                            backgroundImage: 'url(https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderTopLeftRadius: '16px',
                            borderTopRightRadius: '16px'
                        }}
                    >
                    </Box>
                    <Box>
                        <Container>
                            <Typography sx={{ fontSize: '20px' }}>Burger</Typography>
                            <GroupContainer>
                                <StarIcon sx={{ color: 'yellow' }} />
                                <Typography>4.5</Typography>
                            </GroupContainer>
                        </Container>
                        <Container sx={{ paddingTop: 0, paddingBottom: '8px' }}>
                            <GroupContainer>
                                <AdjustIcon fontSize='small' sx={{ color: 'green' }} />
                                <Typography>
                                    Veg
                                </Typography>
                            </GroupContainer>
                            <GroupContainer>
                                <CurrencyRupeeIcon fontSize='small' />
                                <Typography>100</Typography>
                            </GroupContainer>
                        </Container>
                    </Box>
                </MenuCardContainer>
            </MenuContainer>
        </Box>
    )
}

export default Home

const Container = styled(Box)(({ theme }) => ({
    padding: '16px',
    paddingTop: '8px',
    paddingBottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

const Headding = styled(Typography)(({ theme }) => ({
    fontSize: '22px',
    fontWeight: 500
}))

const GroupContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '4px',
    alignItems: 'center'

}))

const VerticalScrollContainer = styled(Box)(({ theme }) => ({
    padding: '16px',
    display: 'flex',
    gap: '16px',
    overflowX: 'scroll',
    scrollbarWidth: 'none', // For Firefox
    '&::-webkit-scrollbar': {
        display: 'none' // For Chrome, Safari, and Edge
    }
}));

const FilterImage = styled(Box)(({ theme }) => ({
    height: '60px',
    width: '55px',
    objectFit: "cover",
    borderRadius: '12px',
    boxShadow: "1px 1px 2px 0 rgba(0, 0, 0, 0.5)"
}))

const MenuContainer = styled(Box)(({ theme }) => ({
    padding: '16px',
}))

const MenuCardContainer = styled(Box)(({ theme }) => ({
    boxShadow: "1px 1px 8px 0 rgba(0, 0, 0, 0.5)",
    borderRadius: '16px'
}))
