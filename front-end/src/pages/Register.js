import styled from 'styled-components';
import { motion } from 'framer-motion';

const Register = () => {
    return (
        <StyledRegister>
            <h1>Register Page</h1>
        </StyledRegister>
    );
};

const StyledRegister = styled(motion.div)`
    h1{
        color:white;
    }
`;

export default Register;