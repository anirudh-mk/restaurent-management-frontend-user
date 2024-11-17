import { Alert, Badge, Box, Button, Checkbox, Chip, Divider, FormControlLabel, FormGroup, Grid2, IconButton, Radio, RadioGroup, Slider, Snackbar, SwipeableDrawer, Typography, styled } from '@mui/material'
import SearchBar from '../../Components/SearchBar';
import FilterCard from '../../Components/FilterCard';
import PopularCard from '../../Components/PopularCard';
import MenuCard from '../../Components/MenuCard';
import { grey } from '@mui/material/colors';
import Product from '../Product/Product'
import { useState } from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { FilterOptions, MenuFoods } from '../../Utils/SupportFunctions';
import { useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';

function Home() {
    const navigation = useNavigate()

    const [state, setState] = useState({
        openDrawer: false,
        filterItem: 'All',
        food: null,
        openFilterDrawer: false
    })

    const [snackbar, setSnackbar] = useState({
        severity: '',
        message: '',
        open: false
    })

    const toggleDrawer = (state) => {
        setState((prevState) => ({
            ...prevState,
            openDrawer: state
        }));
    };
    const handleFilterClick = (name) => {
        setState((prevState) => ({
            ...prevState,
            filterItem: name
        }))
    }

    const handleFoodClick = (openDrawer, foodObj) => {
        setState((prevState) => ({
            ...prevState,
            openDrawer: openDrawer,
            food: foodObj
        }))
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbar((prevState) => ({
            ...prevState,
            open: false,
        }))
    };

    const handleFilterDrawer = (state) => {
        setState((prevState) => ({
            ...prevState,
            openFilterDrawer: state
        }))
    }
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [sliderValue, setSliderValue] = useState([20, 37]);

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 5000,
            label: '5000',
        },
    ];

    return (
        <>
            <Box>
                <Container sx={{ paddingBottom: 0 }}>
                    <Typography variant='h1' sx={{ paddingBottom: '4px' }}>
                        Spoon Me
                    </Typography>
                    <IconButton aria-label="delete" onClick={() => navigation('cart')}>
                        <Badge badgeContent={20} color="secondary">
                            <LocalMallIcon sx={{ color: 'black' }} />
                        </Badge>
                    </IconButton>
                </Container>
                <SearchBarContainer>
                    <SearchBar />
                </SearchBarContainer>
                <VerticalScrollContainer>
                    <Chip
                        label="Filter"
                        variant='outlined'
                        onClick={() => handleFilterDrawer(true)}
                    />
                </VerticalScrollContainer>
                <VerticalScrollContainer sx={{ paddingTop: '8px' }}>
                    {FilterOptions.map((item, index) =>
                        <FilterCard
                            key={index}
                            img={item.img}
                            name={item.title}
                            onClick={() => handleFilterClick(item.title)}
                            selectedItem={state.filterItem}
                        />
                    )}
                </VerticalScrollContainer>
                <Typography variant='h2' sx={{ px: '16px' }}>
                    Popular
                </Typography>
                <VerticalScrollContainer>
                    {MenuFoods.map((item, index) =>
                        <PopularCard
                            key={index}
                            img={item.img}
                            name={item.title}
                            rating={item.rating}
                            onClick={() => handleFoodClick(true, item)}
                        />

                    )}

                </VerticalScrollContainer>
                <Typography variant='h2' sx={{ px: '16px' }}>
                    Menu
                </Typography>
                <MenuContainer>
                    {MenuFoods.map((item, index) =>
                        <MenuCard
                            key={index}
                            img={item.img}
                            name={item.title}
                            amount={item.amount}
                            isVeg={item.isVeg}
                            rating={item.rating}
                            onClick={() => handleFoodClick(true, item)}
                        />
                    )}
                </MenuContainer>
            </Box>
            <SwipeableDrawer
                anchor="bottom"
                open={state.openDrawer}
                onClose={() => toggleDrawer(false)}
                onOpen={() => toggleDrawer(true)}
                disableSwipeToOpen={false}
                transitionDuration={500}
                sx={{
                    '& .MuiDrawer-paper': {
                        height: '75vh',
                        borderTopRightRadius: '16px',
                        borderTopLeftRadius: '16px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                    },
                }}
            >
                <Puller />
                <Box sx={{ overflowY: 'auto' }}>
                    <Product
                        food={state.food}
                        toggleDrawer={toggleDrawer}
                        setSnackbar={setSnackbar}
                    />
                </Box>
            </SwipeableDrawer>
            <SwipeableDrawer
                anchor="bottom"
                open={state.openFilterDrawer}
                onClose={() => handleFilterDrawer(false)}
                onOpen={() => handleFilterDrawer(true)}
                disableSwipeToOpen={false}
                transitionDuration={500}
                sx={{
                    '& .MuiDrawer-paper': {
                        height: '75vh',
                        borderTopRightRadius: '16px',
                        borderTopLeftRadius: '16px',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                    },
                }}
            >
                <Puller />
                <Typography variant='h3' sx={{ p: '16px' }}>
                    Filter
                </Typography>
                {/* <Divider /> */}
                {/* <Typography sx={{ px: '16px', pt: '8px' }}>Selected Filters</Typography> */}
                <VerticalScrollContainer>
                    <Chip
                        label="Filter"
                        variant='outlined'
                        onClick={() => handleFilterDrawer(true)}
                    />
                </VerticalScrollContainer>
                <Divider />
                <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        <Tab label="Catogery" {...a11yProps(0)} />
                        <Tab label="rating" {...a11yProps(1)} />
                        <Tab label="Veg/Non" {...a11yProps(2)} />
                        <Tab label="Amount" {...a11yProps(3)} />
                        <Tab label="Sort" {...a11yProps(4)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="All" />
                            <FormControlLabel control={<Checkbox />} label="Burger" />
                            <FormControlLabel control={<Checkbox />} label="Biriyani" />
                        </FormGroup>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="4 ★ and Above" />
                            <FormControlLabel control={<Checkbox />} label="3 ★ and Above" />
                            <FormControlLabel control={<Checkbox />} label="2 ★ and Above" />
                        </FormGroup>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Veg" />
                            <FormControlLabel control={<Checkbox />} label="NonVeg" />
                        </FormGroup>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Under Rs 1000" />
                            <FormControlLabel control={<Checkbox />} label="Rs 1000 to Rs 500" />
                            <FormControlLabel control={<Checkbox />} label="Rs 499 to Rs 0" />
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={sliderValue}
                                onChange={handleSliderChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={5000}
                                marks={marks}
                            />
                        </FormGroup>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        <RadioGroup name="use-radio-group" defaultValue="first">
                            <FormControlLabel value="price" control={<Radio />} label="Price" />
                            <FormControlLabel value="rating" control={<Radio />} label="Rating" />
                        </RadioGroup>
                    </TabPanel>
                </Box>
                <Divider />
                <Box sx={{ p: '16px' }}>
                    <Grid container spacing={2}>
                        <Grid item size={6}>
                            <Button variant="outlined" sx={{ width: '100%' }}>Clear all</Button>
                        </Grid>
                        <Grid item size={6}>
                            <Button variant="contained" sx={{ width: '100%' }}>Filter</Button>
                        </Grid>
                    </Grid>
                </Box>
            </SwipeableDrawer>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={1000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={handleClose}
            >
                <Alert
                    severity={snackbar.severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>

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
const VerticalScrollContainer = styled(Box)(() => ({
    padding: '16px',
    display: 'flex',
    gap: '12px',
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
const Grid = styled(Grid2)(() => ({}))

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


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}
