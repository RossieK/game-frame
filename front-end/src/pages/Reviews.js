//Functionality
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadReviews } from '../actions/reviewsAction';
import { Redirect } from 'react-router-dom';
//Styling
import styled from 'styled-components';
//Components
import ReviewForm from '../components/ReviewForm';
import Review from '../components/Review';

const Reviews = () => {
    //Fetch Reviews Data
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadReviews());
    }, [dispatch]);

    //Get reviews data from state
    const reviews = useSelector(state => state.reviews);
    //Get auth from state
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <>
            {isAuthenticated ? (
                <>
                    <ReviewForm />
                    <StyledReviews>
                        {reviews.length ?
                            reviews.map(review => (
                                <Review
                                    userName={review.user}
                                    gameName={review.game}
                                    url={review.imageUrl}
                                    description={review.description}
                                    key={review._id}
                                />
                            )) : ""}
                    </StyledReviews>
                </>
            ) : (
                    <Redirect to={{"pathname": "/login"}}/>
                )}
        </>
    );
};

const StyledReviews = styled.div`
    box-sizing: border-box;
    margin: 2rem auto;
    display: flex;
    flex-wrap: wrap;
`;


export default Reviews;