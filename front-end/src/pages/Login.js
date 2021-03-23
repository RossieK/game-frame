//Functionality
import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authAction';
import { clearErrors } from '../actions/errorAction';
//Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearErrors());
    }, [dispatch]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const error = useSelector(state => state.error);

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const submitLogin = (e) => {
        e.preventDefault();

        //Create User Obj
        const newUser = {
            email,
            password
        };

        //Attempt to register
        dispatch(login(newUser));
    }

    useEffect(() => {
        //Check for register error
        if (error.id === 'LOGIN_FAIL') {
            setErrorMessage(error.message.message);
        } else {
            setErrorMessage(null);
        }
    }, [error]);

    useEffect(() => {
        //Check for register error
        if (isAuthenticated) {
            dispatch(clearErrors());
            history.push('/');
        }
    }, [isAuthenticated, history, dispatch]);

    return (
        <StyledLogin variants={fadeIn} initial="hidden" animate="show">
            <div className="top-container">
                <div className="back-drop"></div>
                <div className="header">
                    <h1>Glad you're back!</h1>
                    <h2>Log in to your account</h2>
                </div>
            </div>
            <div className="inner-container">
                <div className="form-container">
                    {errorMessage ? (<div className="error-notifications">{errorMessage}</div>) : null}
                    <form>
                        <input type="email" placeholder="Email" onChange={emailChangeHandler} />
                        <input type="password" placeholder="Password" onChange={passwordChangeHandler} />
                        <button type="submit" onClick={submitLogin}>Log in</button>
                        <h3>Don't have an account yet? <Link to="/register">Sign up now!</Link></h3>
                    </form>
                </div>
            </div>
        </StyledLogin>
    );
};

const StyledLogin = styled(motion.div)`
    margin: auto;
    margin-top: 10rem;
    margin-bottom: 10rem;
    width: 700px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 10px rgb(240, 231, 231);
    position: relative;
    overflow: hidden;

    .top-container{
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 0 1.8em;
        padding-bottom: 5em;

        .back-drop{
            width: 200%;
            height: 300px;
            position: absolute;
            display: flex;
            flex-direction: column;
            border-radius: 90%;
            transform: rotate(160deg);
            top: -200px;
            left: -60px;
            background: rgb(131,58,180);
            background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(172,113,113,1) 50%, rgba(252,176,69,1) 100%);  
        }

        .header{
            width: 100%;
            display: flex;
            flex-direction: column;

            h1{
                font-size: 40px;
                font-weight: bolder;
                line-height: 1.24;
                color:black;
                z-index: 6;
                margin:0;
            }

            h2{
                color: black;
                font-weight: bolder;
                font-size: 16px;
                font-family: 'Jura', sans-serif;
                z-index: 6;
                margin:0;
                margin-top: 5px;
            }
        }
    }

    .inner-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 1.8rem;

        .form-container{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 2rem;

            .error-notifications{
                border-radius: 1rem;
                box-shadow: 0px 0px 10px #f55f5f;
                padding: 0.5rem 1rem 0.5rem 1rem;
                background: #f55f5f;
                color: white;
                margin-bottom: 1rem;
                font-weight: bolder;
            }

            form{
                width: 100%;
                display: flex;
                flex-direction: column;

                input{
                    margin:auto;
                    margin-top: 1rem;
                    font-size: 16px;
                    font-family: 'Jura', sans-serif;
                    font-weight: bolder;
                    width: 80%;
                    height: 42px;
                    border: none;
                    border-radius: 1rem;
                    box-shadow: 0px 0px 10px #833ab4;
                    padding: 0px 10px;
                    outline: none;

                    &::placeholder {
                    color: rgba(200, 200, 200, 1);
                    }

                    &:focus{
                    outline: none;
                    border-bottom: 5px solid rgb(241, 196, 15);
                    }
                }

                button{
                    margin:auto;
                    margin-top: 2.5rem;
                    width: 50%;
                    padding: 10px 10%;
                    color: black;
                    font-size: 18px;
                    font-family: 'Jura', sans-serif;
                    font-weight: bolder;
                    border:none;
                    border-radius: 100px 100px 100px 100px;
                    cursor: pointer;
                    transition: all, 240ms ease-in-out;
                    background: rgb(131,58,180);
                    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(172,113,113,1) 50%, rgba(252,176,69,1) 100%);

                    &:hover{
                    filter: brightness(1.3);
                    }
                }

                h3{
                    margin-top: 2rem;
                    font-size: 19px;
                    text-align: center;
                }
            }
        }
    }
`;

export default Login;