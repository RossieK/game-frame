//Functionality
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../actions/reviewsAction';
import { clearErrors } from '../actions/errorAction';
//Styling
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

const ReviewForm = () => {
    const dispatch = useDispatch();

    //Clear errors upon rendering
    useEffect(() => {
        dispatch(clearErrors());
    }, [dispatch]);

    //Prepare state
    const [user, setUser] = useState("");
    const [game, setGame] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    //Get errors from state
    const error = useSelector(state => state.error);

    //Set state with form data
    const userChangeHandler = (e) => {
        setUser(e.target.value);
    }

    const gameChangeHandler = (e) => {
        setGame(e.target.value);
    }

    const imageUrlChangeHandler = (e) => {
        setImageUrl(e.target.value);
    }

    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value);
    }

    //Form submissiong
    const submitReview = (e) => {
        e.preventDefault();

        //Create Review Obj
        const newReview = {
            user,
            game,
            imageUrl,
            description
        };

        //Attempt to add review
        dispatch(addReview(newReview));

        //Clear Input
        setUser("");
        setGame("");
        setImageUrl("");
        setDescription("");
    }

    //Set errors if any
    useEffect(() => {
        //Check for review error
        if (error.id === 'ADD_REVIEW_FAIL') {
            setErrorMessage(error.message.message);
        } else {
            setErrorMessage(null);
        }
    }, [error]);

    return (
        <StyledReviewForm variants={fadeIn} initial="hidden" animate="show">
            <div className="top-container">
                <div className="giphy">
                    <img src="https://media.giphy.com/media/nDV1pz6h3Ux9kP7a4z/giphy.gif" alt="Giphy" />
                </div>
                <div className="form-container">
                    {errorMessage ? (<div className="error-notifications">{errorMessage}</div>) : null}
                    <form>
                        <input value={user} type="text" placeholder="Name" onChange={userChangeHandler} />
                        <input value={game} type="text" placeholder="Game name" onChange={gameChangeHandler} />
                        <input value={imageUrl} type="text" placeholder="Game cover URL" onChange={imageUrlChangeHandler} />
                        <textarea value={description} placeholder="Review" onChange={descriptionChangeHandler} />
                        <button type="submit" onClick={submitReview}>Submit</button>
                    </form>
                </div>
            </div>
        </StyledReviewForm>
    );
};

const StyledReviewForm = styled(motion.div)`
    margin: auto;
    margin-top: 5rem;
    margin-bottom: 10rem;
    width: 800px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background: rgb(224,224,224);
    background: linear-gradient(0deg, rgba(224,224,224,1) 0%, rgba(64,64,64,1) 100%);
    box-shadow: 0 0 10px #f18d19;
    position: relative;
    overflow: hidden;

    .top-container{
        width: 100%;
        padding: 0 1.8rem;
        display: grid;
        grid-column: 1fr;
        grid-template-areas: "giphy form";

        .giphy{
            margin-top: 2rem;
            width: 100%;
            grid-area: giphy;
            align-self: center;

            img{
                width: 90%;
                margin: auto;
            }
        }

        .form-container{
            width: 100%;
            display: flex;
            flex-direction: column;
            text-align: center;
            margin-top: 2rem;
            margin-bottom: 2rem;
            grid-area: form;
            align-self: center;

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
                display: inline-block;
                flex-direction: column;

                textarea, input{
                    background-color:#7d6190;
                    margin:auto;
                    margin-top: 1rem;
                    font-size: 16px;
                    font-family: 'Jura', sans-serif;
                    font-weight: bolder;
                    width: 90%;
                    height: 42px;
                    border: none;
                    border-radius: 1rem;
                    box-shadow: 0px 0px 10px #f18d19;
                    padding: 0px 10px;
                    outline: none;

                    &::placeholder {
                    color: white;
                    }

                    &:focus{
                    outline: none;
                    border-bottom: 5px solid rgb(241, 196, 15);
                    }
                }

                textarea{
                    width: 90%;
                    height: 150px;
                }

                button{
                    margin:auto;
                    margin-top: 2.5rem;
                    width: 50%;
                    padding: 10px 10%;
                    color: white;
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

export default ReviewForm;