//Functionality
import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
//Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Images
import logo from '../img/logo.svg';

const Navbar = () => {
    const { pathname } = useLocation();

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <StyledNavbar>
            <h1 id="logo"><img src={logo} alt="logo" /><Link to="/">Game Frame</Link></h1>
            <ul>
                {isAuthenticated ? (
                    <>
                        <li>
                            <Link to="/">All Games</Link>
                            <StyledLine transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/" ? "50%" : "0%" }} />
                        </li>
                        <li>
                            <Link to="/reviews">Reviews</Link>
                            <StyledLine transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/reviews" ? "50%" : "0%" }} />
                        </li>
                        <li>
                            <Link to="/wishlist">Wishlist</Link>
                            <StyledLine transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/wishlist" ? "50%" : "0%" }} />
                        </li>
                        <li>
                            <Link to="/logout">Logout</Link>
                            <StyledLine transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/logout" ? "50%" : "0%" }} />
                        </li>
                    </>
                ) : (
                        <>
                            <li>
                                <Link to="/">Home</Link>
                                <StyledLine transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/" ? "50%" : "0%" }} />
                            </li>
                            <li>
                                <Link to="/register">Register</Link>
                                <StyledLine transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/register" ? "50%" : "0%" }} />
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                                <StyledLine transition={{ duration: 0.75 }} initial={{ width: "0%" }} animate={{ width: pathname === "/login" ? "50%" : "0%" }} />
                            </li>
                        </>
                    )}
            </ul>
        </StyledNavbar>
    );
};

const StyledNavbar = styled.div`
    min-height:8vh;
    display:flex;
    margin:auto;
    justify-content:space-between;
    align-items:center;
    padding:0rem 5rem 0rem 3rem;
    background: #f18d19;
    position:sticky;
    top:0;
    z-index:10;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    box-shadow: 20px 1px 20px #f18d19;

    a{
    color:white;
    font-size: 1.2rem;
    font-family: 'Orbitron', sans-serif;
    text-decoration:none;
    }

    ul{
    display:flex;
    list-style:none;
    }

    #logo{
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
        img{
        height: 4rem;
        width: 4rem;
        }

        a{
        font-size:3.5rem;
        font-family: 'Jura', sans-serif;
        color:black;
        }
    }

    li{
    padding-left:5rem;
    position:relative;
    }

    @media (max-width:1300px){
        flex-direction:column;
        padding: 2rem 1rem;
        
        #logo{
            display:inline-block;
            margin:2rem;
        }
        ul{
            padding:2rem;
            justify-content:space-around;
            width:100%;
            li{
                padding:0;
            }
        }
    }
`;

const StyledLine = styled(motion.div)`
height:0.3rem;
background:#303548;
width:0%;
position:absolute;
bottom:-80%;
left:51%;
@media (max-width:1300px){
    left: 0%;
}
`;

export default Navbar;