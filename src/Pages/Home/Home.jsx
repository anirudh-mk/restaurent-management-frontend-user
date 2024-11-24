import { Alert, Badge, Box, Button, Checkbox, Chip, Divider, FormControlLabel, FormGroup, Grid2, IconButton, Radio, RadioGroup, Slider, Snackbar, SwipeableDrawer, Typography, styled } from '@mui/material'
import SearchBar from '../../Components/SearchBar';
import FilterCard from '../../Components/FilterCard';
import PopularCard from '../../Components/PopularCard';
import MenuCard from '../../Components/MenuCard';
import { grey } from '@mui/material/colors';
import Product from '../Product/Product'
import { useEffect, useState } from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { FilterOptions, MenuFoods, PriceMarker, RatingFilter } from '../../Utils/SupportFunctions';
import { useNavigate, useParams } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TuneIcon from '@mui/icons-material/Tune';
import { getRestaurantAPI } from '../../apis/restaurant/RestaurantAPIs';
import { getCatogeryListAPI } from '../../apis/food/foodAPIs';

function Home() {

    const navigation = useNavigate()
    const { restaurant_id } = useParams()

    const [state, setState] = useState({
        openDrawer: false,
        filterItem: 'All',
        food: null,
        openFilterDrawer: false,
        tabValue: 0,
        sliderValue: [200, 500]
    })

    const [response, setResponse] = useState({
        restaurant: null,
        category: []
    })
    const [snackbar, setSnackbar] = useState({
        severity: '',
        message: '',
        open: false
    })
    const [selectedFilter, setSelectedFilter] = useState({
        catogery: ['All'],
        rating: [],
        vegOrNon: [],
        amount: [],
        sortBy: 'popular',
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

    const handleFilterDrawer = (state, tab = 0) => {
        setState((prevState) => ({
            ...prevState,
            openFilterDrawer: state,
            tabValue: tab
        }))
    }

    const handleChange = (event, newValue) => {
        setState((prevState) => ({
            ...prevState,
            tabValue: newValue
        }))
    };

    const handleSliderChange = (event, newValue) => {
        setState((prevState) => ({
            ...prevState,
            sliderValue: newValue
        }));
    };

    const handleFilterSelection = (e, type) => {
        const { name } = e.target
        if (!selectedFilter[type].includes(name)) {
            setSelectedFilter((prevState) => ({
                ...prevState,
                [type]: [...prevState[type], name]

            }))
        }
        else {
            setSelectedFilter((prevState) => ({
                ...prevState,
                [type]: prevState[type].filter(
                    item => item !== name
                )
            }))
        }
    }

    // ================= API =================

    const fetchData = async () => {
        const resturentAPiResponse = await getRestaurantAPI(restaurant_id)
        if (resturentAPiResponse.statusCode === 200) {
            setResponse((prevState) => ({
                ...prevState,
                restaurant: resturentAPiResponse.response
            }))
        }
        const categoryAPiResponse = await getCatogeryListAPI(restaurant_id)
        console.log(categoryAPiResponse);
        if (categoryAPiResponse.statusCode === 200) {
            setResponse((prevState) => ({
                ...prevState,
                category: categoryAPiResponse.response
            }))
        }
    }
    // console.log(response.category);
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Box>
                <Container sx={{ paddingBottom: 0 }}>
                    <Typography variant='h1' sx={{ paddingBottom: '4px' }}>
                        {response.restaurant?.name}
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

                    <Badge badgeContent={20} color="secondary">
                        <Chip
                            avatar={<TuneIcon />}
                            label="Filter"
                            onClick={() => handleFilterDrawer(true, 0)}
                            onDelete={() => handleFilterDrawer(true, 0)}
                            deleteIcon={<ArrowDropDownIcon />}
                            variant="outlined"
                        />
                    </Badge>
                    <Chip
                        label="Sort by"
                        onClick={() => handleFilterDrawer(true, 4)}
                        onDelete={() => handleFilterDrawer(true, 4)}
                        deleteIcon={<ArrowDropDownIcon />}
                        variant="outlined"
                    />
                    {(selectedFilter.catogery.length > 0) &&
                        <Badge
                            badgeContent={selectedFilter.catogery.length}
                            color="secondary"
                        >
                            <Chip
                                label="Catogery"
                                onClick={() => handleFilterDrawer(true, 0)}
                                onDelete={() => handleFilterDrawer(true, 0)}
                                deleteIcon={<ArrowDropDownIcon />}
                                variant="outlined"
                            />
                        </Badge>
                    }
                    {(selectedFilter.rating.length > 0) &&
                        <Badge
                            badgeContent={selectedFilter.rating.length}
                            color="secondary"
                        >
                            <Chip
                                label="Rating"
                                onClick={() => handleFilterDrawer(true, 1)}
                                onDelete={() => handleFilterDrawer(true, 1)}
                                deleteIcon={<ArrowDropDownIcon />}
                                variant="outlined"
                            />
                        </Badge>
                    }
                </VerticalScrollContainer>
                <VerticalScrollContainer sx={{ paddingTop: '8px' }}>
                    <FilterCard
                        img='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        name='All'
                        onClick={() => handleFilterClick('All')}
                        selectedItem={state.filterItem}
                        isStatic
                    />
                    {response.category.map((item, index) =>
                        <FilterCard
                            key={index}
                            img={item.image}
                            name={item.name}
                            onClick={() => handleFilterClick(item.name)}
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
                        value={state.tabValue}
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
                    <TabPanel value={state.tabValue} index={0}>
                        <FormControlLabel
                            control={<Checkbox checked={selectedFilter.catogery.includes('All')} />}
                            label='All'
                            name='All'
                            onClick={(e) => {
                                handleFilterSelection(e, 'catogery')
                            }}
                        />
                        <FormGroup>
                            {FilterOptions.map((item, index) =>
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox checked={selectedFilter.catogery.includes(item.title)} />
                                    }
                                    label={item.title}
                                    name={item.title}
                                    onClick={(e) => {
                                        handleFilterSelection(e, 'catogery')
                                    }}
                                />
                            )}
                        </FormGroup>
                    </TabPanel>
                    <TabPanel value={state.tabValue} index={1}>
                        <FormGroup>
                            {RatingFilter.map((item, index) =>
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox checked={selectedFilter.rating.includes(item.name)} />
                                    }
                                    name={item.name}
                                    label={item.label}
                                    onClick={(e) => handleFilterSelection(e, 'rating')}
                                />
                            )}
                        </FormGroup>
                    </TabPanel>
                    <TabPanel value={state.tabValue} index={2}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Veg" />
                            <FormControlLabel control={<Checkbox />} label="NonVeg" />
                        </FormGroup>
                    </TabPanel>
                    <TabPanel value={state.tabValue} index={3}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox />} label="Under Rs 1000" />
                            <FormControlLabel control={<Checkbox />} label="Rs 1000 to Rs 500" />
                            <FormControlLabel control={<Checkbox />} label="Rs 499 to Rs 0" />
                            <Slider
                                getAriaLabel={() => 'Temperature range'}
                                value={state.sliderValue}
                                onChange={handleSliderChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={2000}
                                marks={PriceMarker}
                            />
                        </FormGroup>
                    </TabPanel>
                    <TabPanel value={state.tabValue} index={4}>
                        <RadioGroup name="use-radio-group" defaultValue="first">
                            <FormControlLabel value="price" control={<Radio />} label="Price" />
                            <FormControlLabel value="rating" control={<Radio />} label="Rating" />
                        </RadioGroup>
                    </TabPanel>
                </Box>
                <Divider />
                <Box sx={{ p: '16px' }}>
                    <Grid2 container spacing={2}>
                        <Grid2 size={6}>
                            <Button variant="outlined" sx={{ width: '100%' }}>Clear all</Button>
                        </Grid2>
                        <Grid2 size={6}>
                            <Button variant="contained" sx={{ width: '100%' }}>Filter</Button>
                        </Grid2>
                    </Grid2>
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
                    {children}
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
