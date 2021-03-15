import styled from 'styled-components';
import { motion } from 'framer-motion';

const Logout = () => {
    return (
        <StyledLogout>
            <h1>Logout Page</h1>
        </StyledLogout>
    );
};

const StyledLogout = styled(motion.div)`
    h1{
        color:white;
    }
`;

export default Logout;