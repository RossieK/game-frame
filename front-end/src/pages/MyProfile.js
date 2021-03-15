import styled from 'styled-components';
import { motion } from 'framer-motion';

const MyProfile = () => {
    return (
        <StyledProfile>
            <h1>My Profile Page</h1>
        </StyledProfile>
    );
};

const StyledProfile = styled(motion.div)`
    h1{
        color:white;
    }
`;

export default MyProfile;