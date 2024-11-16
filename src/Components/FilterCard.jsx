import { Box, Typography, styled } from '@mui/material'
import PropTypes from 'prop-types'

function FilterCard({ img, name }) {
    return (
        <Box>
            <FilterImage
                component="img"
                src={img}
                alt=""
            />
            <Typography sx={{ textAlign: 'center' }}>
                {name}
            </Typography>
        </Box>
    )
}

export default FilterCard

FilterCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};


const FilterImage = styled(Box)(() => ({
    height: '60px',
    width: '55px',
    objectFit: "cover",
    borderRadius: '12px',
    // boxShadow: "1px 1px 2px 0 rgba(0, 0, 0, 0.5)"
}))