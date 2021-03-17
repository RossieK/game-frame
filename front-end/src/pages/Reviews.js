//Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Components
import ReviewForm from '../components/ReviewForm';

const Reviews = () => {
    return (
        <>
            <ReviewForm />
            <StyledReviews>
                <h1>Reviews Page</h1>
            </StyledReviews>
        </>
    );
};

const StyledReviews = styled(motion.div)`
    h1{
        color:white;
    }
`;

export default Reviews;