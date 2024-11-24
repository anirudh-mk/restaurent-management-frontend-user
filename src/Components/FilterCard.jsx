import { Box, Typography, styled } from '@mui/material'
import PropTypes from 'prop-types'

function FilterCard({ img, name, onClick, selectedItem, isStatic }) {
    return (
        <Box onClick={onClick}>
            <FilterImage
                component="img"
                src={isStatic ? img : `http://localhost:8000${img}`}
                alt=""
            />
            <Typography sx={{ textAlign: 'center', color: selectedItem === name ? '#046CFD' : 'gray' }}>
                {name}
            </Typography>
        </Box>
    )
}

export default FilterCard

FilterCard.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isStatic: PropTypes.bool,
    onClick: PropTypes.func,
    selectedItem: PropTypes.string.isRequired
};


const FilterImage = styled(Box)(() => ({
    height: '65px',
    width: '60px',
    objectFit: "cover",
    borderRadius: '12px',
    // boxShadow: "1px 1px 2px 0 rgba(0, 0, 0, 0.5)"
}))