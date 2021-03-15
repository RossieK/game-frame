//Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
//Image
import logout from '../img/logout.jpeg';

const Logout = () => {
    return (
        <StyledLogout variants={fadeIn} initial="hidden" animate="show">
            <div>
                <button><FontAwesomeIcon size="3x" icon={faHome} /><h3>Back to Games</h3></button>
                <button><FontAwesomeIcon size="3x" icon={faSignOutAlt} /><h3>Logout</h3></button>
            </div>
            <img src={logout} alt="Sad cat" />
        </StyledLogout>
    );
};

const StyledLogout = styled(motion.div)`
    img{
        margin-top: 9rem;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 30%;
    }

    h1{
        color:white;
    }

    div{
        text-align: center;

        button{
            margin-top: 5rem;
            background-color: #f18d19;
            border: none;
            border-radius: 1rem;
            box-shadow: 0px 0px 20px #f18d19;
            height:7rem;
            width:10rem;
            cursor: pointer;
        }

        button + button{
            margin-left: 10rem;
        }

        h3{
            color: black;
            font-family: 'Jura', sans-serif;
        }
    }
`;

export default Logout;