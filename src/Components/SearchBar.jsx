import { Search } from '@mui/icons-material';
import { Paper } from '@mui/material';
import { InputBase } from '@mui/material';
import styled from 'styled-components';

function SearchBar() {
    return (
        <Paper
            sx={{
                padding: '2px',
                paddingLeft: '8px',
                borderRadius: '16px',
                mx: "8px",
                display: 'flex',
                alignItems: 'center',
            }}
            elevation={2}
        >
            <Search />
            <InputField placeholder="Search..." />
        </Paper>
    );
}

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
