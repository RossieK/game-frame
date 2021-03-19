import axios from 'axios';

//Actipn Creator
export const loadReviews = () => async(dispatch) => {
    //Fetching data
    const reviewsData = await axios.get("http://localhost:5000/reviews");

    dispatch({
        type: "FETCH_REVIEWS",
        payload: {
            reviews: reviewsData.data
        }
    });
}