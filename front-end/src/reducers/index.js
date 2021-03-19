import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import detailReducer from './detailReducer';
import reviewsReducer from './reviewsReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer,
    reviews: reviewsReducer
});

export default rootReducer;