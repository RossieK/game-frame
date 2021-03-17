import styled from 'styled-components';
import { motion } from 'framer-motion';

const Reviews = () => {
    return (
        <StyledReviews>
            <h1>Reviews Page</h1>
        </StyledReviews>
    );
};

const StyledReviews = styled(motion.div)`
    h1{
        color:white;
    }
`;

export default Reviews;