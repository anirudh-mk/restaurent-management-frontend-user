import axios from 'axios';

const getRestaurantAPI = async function (restauarnt_id) {
    try {
        const response = await axios.get(`http://localhost:8000/api/v1/restaurant/get/${restauarnt_id}/`);
        return response.data
    } catch (error) {
        return error
    }
}

export { getRestaurantAPI }