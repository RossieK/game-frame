import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wishlist = () => {
    return (
        <StyledWishlist>
            <h1>My Wishlist</h1>
        </StyledWishlist>
    );
};

const StyledWishlist = styled(motion.div)`
    h1{
        color:white;
    }
`;

export default Wishlist;