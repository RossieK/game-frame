//Styling
import styled from 'styled-components';

const Review = ({url, gameName, userName, description}) => {
    return (
        <StyledReview>
            <div className="head-review">
                <img src={url} alt={gameName} width="250px" />
            </div>
            <div className="body-review">
                <div className="game-name">{gameName}</div>
                <div className="name">{userName}</div>
                <div className="description">{description}</div>
            </div>
        </StyledReview>
    );
};

const StyledReview = styled.div`
    margin: 0 1rem;
    min-width: 300px;
    flex:1;

    .head-review{
        margin: 1.75rem auto;
        width: 150px;
        height: 150px;

        img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
        box-shadow: 0 10px 15px#f18d19;
        }
    }

    .body-review{
        background: rgb(224,224,224);
        background: linear-gradient(0deg, rgba(224,224,224,1) 0%, rgba(64,64,64,1) 100%);
        padding: 2.5rem;
        border-radius: 1rem;
        box-shadow: 2px 2px 10px 3px #7d6190;

        .game-name{
            font-family: 'Orbitron', sans-serif;
            font-size: 1.5rem;
            color: #f18d19;
            margin-bottom: .25rem;
        }

        .name{
            color: #D6D6D6;
            font-style: italic;
        }

        .description{
            line-height: 1.5rem;
            letter-spacing: 1px;
            color: black;
        }
    }
`;

export default Review;