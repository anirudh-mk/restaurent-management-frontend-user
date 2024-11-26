import { Search } from '@mui/icons-material';
import { Paper } from '@mui/material';
import { InputBase } from '@mui/material';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function SearchBar({ onChange }) {


    return (
        <Paper
            sx={{
                padding: '5px',
                paddingLeft: '8px',
                borderRadius: '20px',
                mx: "8px",
                display: 'flex',
                alignItems: 'center',
            }}
            elevation={2}
        >
            <Search />
            <InputField placeholder="Search..." onChange={onChange} />
        </Paper>
    );
}

SearchBar.propTypes = {
    onChange: PropTypes.func,
}; 0

export default SearchBar;

const InputField = styled(InputBase)(() => ({
    flexGrow: 1,
    "& .MuiInputBase-input": {
        border: "none",
        fontSize: 14,
        fontWeight: "500",
        padding: "6px",
    }
}));
