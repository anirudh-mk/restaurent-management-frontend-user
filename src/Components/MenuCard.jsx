import StarIcon from '@mui/icons-material/Star';
import AdjustIcon from '@mui/icons-material/Adjust';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types'

function MenuCard({ img, name, rating = 0, isVeg = false, amount, onClick }) {
    return (
        <MenuCardContainer onClick={onClick}>
            <Box
                sx={{
                    minWidth: '144px',
                    height: '120px',
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px'
                }}
            >
            </Box>
            <Box>
                <Container>
                    <Typography sx={{ fontSize: '20px' }}>{name}</Typography>
                    <GroupContainer>
                        <StarIcon sx={{ color: '#FFD600' }} />
                        <Typography>{rating}</Typography>
                    </GroupContainer>
                </Container>
                <Container sx={{ paddingTop: 0, paddingBottom: '8px' }}>
                    <GroupContainer>
                        <AdjustIcon fontSize='small' sx={{ color: isVeg ? 'green' : 'red' }} />
                        <Typography>
                            {isVeg ? 'Veg' : 'Non Veg'}
                        </Typography>
                    </GroupContainer>
                    <GroupContainer>
                        <CurrencyRupeeIcon fontSize='small' />
                        <Typography>{amount}</Typography>
                    </GroupContainer>
                </Container>
            </Box>
        </MenuCardContainer>
    )
}

MenuCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isVeg: PropTypes.bool,
    rating: PropTypes.number,
    amount: PropTypes.number.isRequired,
    onClick: PropTypes.func
}

export default MenuCard

const Container = styled(Box)(() => ({
    padding: '16px',
    paddingTop: '8px',
    paddingBottom: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

const GroupContainer = styled(Box)(() => ({
    display: 'flex',
    gap: '4px',
    alignItems: 'center'

}))

const MenuCardContainer = styled(Box)(() => ({
    boxShadow: "1px 1px 8px 0 rgba(0, 0, 0, 0.5)",
    borderRadius: '16px'
}))
