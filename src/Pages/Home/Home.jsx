import { Alert, Badge, Box, Button, Checkbox, Chip, Divider, FormControlLabel, FormGroup, Grid2, Radio, RadioGroup, Slider, Snackbar, SwipeableDrawer, Typography, styled } from '@mui/material'
import SearchBar from '../../Components/SearchBar';
import FilterCard from '../../Components/FilterCard';
import PopularCard from '../../Components/PopularCard';
import MenuCard from '../../Components/MenuCard';
import { grey } from '@mui/material/colors';
import Product from '../Product/Product'
import { useEffect, useState } from 'react';
import { FilterOptions, PriceFilter, PriceMarker, RatingFilter, SortBy } from '../../Utils/SupportFunctions';
import { useParams } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TuneIcon from '@mui/icons-material/Tune';
import { getRestaurantAPI } from '../../apis/restaurant/RestaurantAPIs';
import { getCatogeryListAPI, getFoodListAPI, getPopularFoodsListAPI } from '../../apis/food/foodAPIs';

function Home() {

    // const navigation = useNavigate()
    const { restaurant_id } = useParams()

    const [state, setState] = useState({
        openDrawer: false,
        filterItem: 'All',
        food: null,
        openFilterDrawer: false,
        tabValue: 0,
        sliderValue: [200, 500],
        search: ''
    })

    const [response, setResponse] = useState({
        restaurant: null,
        category: [],
        popularFoods: [],
        foods: []
    })

    const [snackbar, setSnackbar] = useState({
        severity: '',
        message: '',
        open: false
    })
    const [selectedFilter, setSelectedFilter] = useState({
        isAllCategory: false,
        category: [],
        rating: [],
        vegOrNon: [],
        amount: [],
        sortBy: '-rating',
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

        setSelectedFilter((prevState) => ({
            ...prevState,
            amount: newValue
        }))
    };

    const handleFilterSelection = (e, type) => {
        const { value } = e.target

        if (type == 'amount') {
            const { value } = e.target;
            const parsedValue = JSON.parse(value);

            let category_length = selectedFilter.category.length;
            let total_category = response.category.length;

            setState((prevState) => ({
                ...prevState,
                sliderValue: [0, 100]
            }));

            if (!selectedFilter[type].some(item => JSON.stringify(item) === JSON.stringify(parsedValue))) {
                category_length += 1;
                setSelectedFilter((prevState) => ({
                    ...prevState,
                    [type]: [...prevState[type], parsedValue],
                    isAllCategory: total_category === category_length ? true : false
                }));
            } else {
                setSelectedFilter((prevState) => ({
                    ...prevState,
                    [type]: prevState[type].filter(
                        item => JSON.stringify(item) !== JSON.stringify(parsedValue)
                    ),
                    isAllCategory: false
                }));
            }
        }
        else {
            let category_length = selectedFilter.category.length
            let total_category = response.category.length

            if (!selectedFilter[type].includes(value)) {
                category_length += 1
                setSelectedFilter((prevState) => ({
                    ...prevState,
                    [type]: [...prevState[type], value],
                    isAllCategory: total_category === category_length ? true : false
                }))
            }
            else {
                setSelectedFilter((prevState) => ({
                    ...prevState,
                    [type]: prevState[type].filter(
                        item => item !== value
                    ),
                    isAllCategory: false
                }))
            }
        }
    }

    const containsItem = (list, item) => {
        return list.some(element => {
            if (Array.isArray(element) && Array.isArray(item)) {
                return JSON.stringify(element) === JSON.stringify(item);
            }
            return element === item;
        });
    };

    const handleSelectAllCategory = () => {
        if (!selectedFilter.isAllCategory) {
            setSelectedFilter((prevState) => ({
                ...prevState,
                category: response.category.map(item => item.id),
                isAllCategory: true
            }))
        }
        else {
            setSelectedFilter((prevState) => ({
                ...prevState,
                category: [],
                isAllCategory: false
            }))
        }
    }
    const handleSearch = (e) => {
        const { value } = e.target
        setState((prevState) => ({
            ...prevState,
            search: value
        }))
    }
    // ================= API =================

    const foodAPi = async () => {
        const foodAPiResponse = await getFoodListAPI(
            restaurant_id,
            state.search,
            selectedFilter.sortBy,
            selectedFilter.category.filter(item => item !== 'All'),
            selectedFilter.rating,
            selectedFilter.amount
        )
        if (foodAPiResponse.statusCode === 200) {
            setResponse((prevState) => ({
                ...prevState,
                foods: foodAPiResponse.response.data
            }))
        }
    }

    const popularFoodsAPi = async () => {
        const popularFoodAPiResponse = await getPopularFoodsListAPI(restaurant_id)
        if (popularFoodAPiResponse.statusCode === 200) {
            setResponse((prevState) => ({
                ...prevState,
                popularFoods: popularFoodAPiResponse.response
            }))
        }
    }
    const handleFilter = () => {
        foodAPi()
        popularFoodsAPi()
        handleFilterDrawer(false)
    }
    const fetchData = async () => {
        const resturentAPiResponse = await getRestaurantAPI(restaurant_id)
        if (resturentAPiResponse.statusCode === 200) {
            setResponse((prevState) => ({
                ...prevState,
                restaurant: resturentAPiResponse.response
            }))
        }
        const categoryAPiResponse = await getCatogeryListAPI(restaurant_id)
        if (categoryAPiResponse.statusCode === 200) {
            setResponse((prevState) => ({
                ...prevState,
                category: categoryAPiResponse.response
            }))
        }
        popularFoodsAPi()
        foodAPi()
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        foodAPi()
    }, [state.search])
    return (
        <>
            <Box>
                <Container sx={{ paddingBottom: 0 }}>
                    <Typography variant='h1' sx={{ paddingBottom: '4px' }}>
                        {response.restaurant?.name}
                    </Typography>
                    {/* <IconButton aria-label="delete" onClick={() => navigation('cart')}>
                        <Badge badgeContent={20} color="secondary">
                            <LocalMallIcon sx={{ color: 'black' }} />
                        </Badge>
                    </IconButton> */}
                </Container>
                <SearchBarContainer>
                    <SearchBar onChange={(e) => handleSearch(e)} />
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
                    {(selectedFilter.category.length > 0) &&
                        <Badge
                            badgeContent={selectedFilter.category.length}
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
                    {response.popularFoods.map((item, index) =>
                        <PopularCard
                            key={index}
                            img={item.images[0]}
                            name={item.name}
                            rating={item.rating}
                            onClick={() => handleFoodClick(true, item)}
                        />

                    )}

                </VerticalScrollContainer>
                <Typography variant='h2' sx={{ px: '16px' }}>
                    Menu
                </Typography>
                <MenuContainer>
                    {response.foods.map((item, index) =>
                        <MenuCard
                            key={index}
                            img={item.images[0]}
                            name={item.name}
                            amount={item.price}
                            isVeg={item.is_veg}
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
                            control={<Checkbox checked={selectedFilter.isAllCategory} />}
                            label='All'
                            onClick={() => {
                                handleSelectAllCategory()
                            }}
                        />
                        <FormGroup>
                            {response.category.map((item, index) =>
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox checked={selectedFilter.category.includes(item.id)} />
                                    }
                                    label={item.name}
                                    value={item.id}
                                    onClick={(e) => {
                                        handleFilterSelection(e, 'category')
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
                                    value={item.name}
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
                            {PriceFilter.map((item, index) =>
                                <FormControlLabel
                                    key={index}
                                    control={
                                        <Checkbox checked={containsItem(selectedFilter.amount, item.value)} />
                                    }
                                    label={item.label}
                                    value={JSON.stringify(item.value)}
                                    onClick={(e) => handleFilterSelection(e, 'amount')}
                                />

                            )}
                            <Slider
                                // getAriaLabel={() => 'Temperature range'}
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
                            {SortBy.map((item, index) =>
                                <FormControlLabel
                                    key={index}
                                    value={item.value}
                                    control={<Radio />}
                                    label={item.name}
                                />
                            )}
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
                            <Button variant="contained" sx={{ width: '100%' }} onClick={handleFilter}>Filter</Button>
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
