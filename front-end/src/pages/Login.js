import styled from 'styled-components';
import { motion } from 'framer-motion';

const Login = () => {
    return (
        <StyledLogin>
            <div className="top-container">
                <div className="back-drop"></div>
                <div className="header">
                    <h1>Login form</h1>
                    <h2>Please login</h2>
                </div>
            </div>
            <div className="inner-container">
                <div className="form-container">
                    <form>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Sign in</button>
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
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
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
                font-size: 30px;
                font-weight: 600;
                line-height: 1.24;
                color: #fff;
                z-index: 6;
                margin:0;
            }
            h2{
                color: #fff;
                font-weight: 500;
                font-size: 11px;
                z-index: 6;
                margin:0;
                margin-top: 7px;
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
            margin-top: 3rem;

            form{
                width: 100%;
                display: flex;
                flex-direction: column;

                input{
                    margin:auto;
                    margin-top: 1rem;
                    width: 80%;
                    height: 42px;
                    outline: none;
                    border: none;
                    border-radius: 1rem;
                    box-shadow: 0px 0px 10px #833ab4;
                    padding: 0px 10px;
                    outline: none;
                    border-bottom: 1.4px solid transparent;

                    &::placeholder {
                    color: rgba(200, 200, 200, 1);
                    }

                    &::not(:last-of-type){
                    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
                    }

                    &:focus{
                    outline: none;
                    border-bottom: 2px solid rgb(241, 196, 15);
                    }
                }

                button{
                    margin:auto;
                    margin-top: 4rem;
                    width: 50%;
                    padding: 10px 10%;
                    color: #fff;
                    font-size: 15px;
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
            }
        }
    }
`;

export default Login;