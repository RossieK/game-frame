import axios from 'axios';
import { gameDetailsUrl } from '../api';

export const loadDetail = (id, short_screenshots) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsUrl(id));

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screens: short_screenshots
        }
    });
};