import styled from 'styled-components';

const ReviewForm = () => {
    return (
        <StyledReviewForm>
            <div className="top-container">
                <div className="giphy">
                    <img src="https://media.giphy.com/media/nDV1pz6h3Ux9kP7a4z/giphy.gif" alt="Giphy" />
                </div>
                <div className="form-container">
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Game name" />
                        <textarea placeholder="Review" />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </StyledReviewForm>
    );
};

const StyledReviewForm = styled.div`
    margin: auto;
    margin-top: 5rem;
    margin-bottom: 10rem;
    width: 800px;
    min-height: 600px;
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
        display: flex;
        flex-direction: column;
        padding: 0 1.8rem;

        .giphy{
            margin-top: 2rem;
            width: 100%;

            img{
                width: 30%;
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