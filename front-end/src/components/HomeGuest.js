//Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

const HomeGuest = () => {
    return (
        <StyledGuestHome variants={fadeIn} initial="hidden" animate="show">
           <h1>Hello Guest!</h1>
        </StyledGuestHome>
    );
};

const StyledGuestHome = styled(motion.div)`

`;

export default HomeGuest;