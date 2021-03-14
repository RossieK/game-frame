import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import github from '../img/github.svg';
import linkedin from '../img/linkedin.svg';

const Footer = () => {
    return (
        <StyledFooter variants={fadeIn} initial="hidden" animate="show">
            <h3>Game rating app developed for educational purposes by Rositsa Kirova <a href="https://github.com/RossieK"><img src={github} alt="Github logo" /></a><a href="https://www.linkedin.com/in/rosi-kirova-24b524136/"><img src={linkedin} alt="LinkedIn logo" /></a></h3>
            <h4><FontAwesomeIcon size="1x" icon={faCopyright} /> 2021, Softuni, ReactJS</h4>
        </StyledFooter>
    );
};

const StyledFooter = styled(motion.div)`
    margin-top: 6rem;
    background-color: #f18d19;
    box-shadow: 0px 0px 20px #f18d19;
    text-align: center;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    h3{
        font-size: 1.2rem;
        color:black;
        padding-left:1rem;
        display: inline-block;
        text-align: left;
    }
    h4{
        padding-left:30rem;
        display: inline-block;
        color:black;
    }
    img{
        margin-left: 1.2rem;
        height: 1.7rem;
        width: 1.7rem;
        display:inline-block;
    }
`;

export default Footer;