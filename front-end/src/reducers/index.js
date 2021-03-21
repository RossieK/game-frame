import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import detailReducer from './detailReducer';
import reviewsReducer from './reviewsReducer';
import wishesReducer from './wishesReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer,
    reviews: reviewsReducer,
    wishGames: wishesReducer
});

export default rootReducer;