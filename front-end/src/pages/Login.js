import styled from 'styled-components';
import { motion } from 'framer-motion';

const Login = () => {
    return (
        <StyledLogin>
            <h1>Login Page</h1>
        </StyledLogin>
    );
};

const StyledLogin = styled(motion.div)`
    h1{
        color:white;
    }
`;

export default Login;