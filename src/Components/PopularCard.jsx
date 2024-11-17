import { Box, Typography, styled } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import PropTypes from 'prop-types';

function PopularCard({ img, name, rating = 0, onClick }) {
    return (
        <Box
            sx={{
                minWidth: '144px',
                height: '182px',
                borderRadius: '25px',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'end',
                backgroundColor: 'rgba(28, 30, 30, 0.5)',
                backgroundBlendMode: 'overlay',
                boxShadow: "1px 1px 5px 0 rgba(0, 0, 0, 0.5)",
            }}
            onClick={onClick}
        >
            <Box sx={{ color: 'white', m: '16px' }}>
                <Typography sx={{ fontSize: '20px' }}>{name}</Typography>
                <GroupContainer>
                    <StarIcon sx={{ color: '#FFD600' }} />
                    <Typography>{rating}</Typography>
                </GroupContainer>
            </Box>
        </Box>
    )
}

PopularCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onClick: PropTypes.func
};

export default PopularCard

const GroupContainer = styled(Box)(() => ({
    display: 'flex',
    gap: '4px',
    alignItems: 'center'

}))