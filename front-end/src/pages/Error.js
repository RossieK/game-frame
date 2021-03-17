import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
//Image
import error from '../img/error.jpeg';

const Error = () => {
    return (
        <StyledError variants={fadeIn} initial="hidden" animate="show">
            <img src={error} alt="Error" />
            <div>
                <h1>AWWWW... Don't Cry.</h1>
                <h3>It's just a 404 error.</h3>
            </div>
        </StyledError>
    );
};

const StyledError = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        margin-top: 7rem;
        margin-left: 10rem;
        width: 25%;
        border-radius:1rem;

    }
    div {
        display: relative;
        margin-left: 10rem;
        text-align: center;

        h1{
        color:white;
        font-size: 3rem;
        font-weight: bold;
        }
        h3{
        color:white;
        font-size: 2rem;
        font-weight: bold;
        }
    }
`;

export default Error;