import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import detailReducer from './detailReducer';
import reviewsReducer from './reviewsReducer';
import wishesReducer from './wishesReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer,
    reviews: reviewsReducer,
    wishGames: wishesReducer,
    error: errorReducer,
    auth: authReducer
});

export default rootReducer;