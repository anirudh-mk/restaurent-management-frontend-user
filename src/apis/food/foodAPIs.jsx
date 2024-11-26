import axios from 'axios';

const getFoodListAPI = async function (restauarnt_id, search, sortBy, category, rating, price) {
    const base_url = `http://localhost:8000/api/v1/food/list/${restauarnt_id}/`
    const params = new URLSearchParams();

    if (search) params.append('search', search);
    if (sortBy) params.append('sortBy', sortBy);
    if (category && category.length > 0) params.append('category', JSON.stringify(category));
    if (rating && rating.length > 0) params.append('rating', JSON.stringify(rating));
    if (price && price.length > 0) params.append('price', JSON.stringify(price));

    try {
        const response = await axios.get(`${base_url}?${params.toString()}`);
        return response.data
    } catch (error) {
        return error
    }
}

const getCatogeryListAPI = async function (restauarnt_id) {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/food/category/list/${restauarnt_id}/`);
        return response.data
    } catch (error) {
        return error
    }
}

const getPopularFoodsListAPI = async function (restauarnt_id) {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/food/popular/list/${restauarnt_id}/`);
        return response.data
    } catch (error) {
        return error
    }
}

const getFoodDetailsAPI = async function (food_id) {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/food/get/${food_id}/`);
        return response.data
    } catch (error) {
        return error
    }
}

export { getFoodListAPI, getCatogeryListAPI, getPopularFoodsListAPI, getFoodDetailsAPI }