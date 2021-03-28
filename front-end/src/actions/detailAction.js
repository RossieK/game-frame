import axios from 'axios';
import { gameDetailsUrl } from '../api';

//Get game details
export const loadDetail = (id, short_screenshots) => async(dispatch) => {
    dispatch({
        type: "LOADING_DETAIL"
    });

    const detailData = await axios.get(gameDetailsUrl(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screens: short_screenshots
        }
    });
};

//Clear details from state
export const noDetailsLoaded = () => async(dispatch) => {
    dispatch({
        type: "NO_DETAILS_LOADED"
    });
};