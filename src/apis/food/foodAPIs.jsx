import axios from 'axios';

const getFoodListAPI = async function (restauarnt_id) {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/food/list/${restauarnt_id}`);
        return response
    } catch (error) {
        return error
    }
}

const getCatogeryListAPI = async function (restauarnt_id) {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/food/category/list/${restauarnt_id}`);
        return response
    } catch (error) {
        return error
    }
}

const getPopularFoodsListAPI = async function (restauarnt_id) {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/food/popular/list/${restauarnt_id}`);
        return response
    } catch (error) {
        return error
    }
}

const getFoodDetailsAPI = async function (food_id) {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/food/get/${food_id}`);
        return response
    } catch (error) {
        return error
    }
}

export default { getFoodListAPI, getCatogeryListAPI, getPopularFoodsListAPI, getFoodDetailsAPI }