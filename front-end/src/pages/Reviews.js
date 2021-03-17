//Styling
import styled from 'styled-components';
//Components
import ReviewForm from '../components/ReviewForm';
import Review from '../components/Review';

const Reviews = () => {
    return (
        <>
            <ReviewForm />
            <StyledReviews>
                <Review url="https://picsum.photos/200/300" gameName="Test Game 1" userName="User 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt libero tempore hic dignissimos aspernatur totam a accusantium ipsa iure repudiandae deleniti nemo animi cum, vero illum accusamus necessitatibus consequuntur!" />
                <Review url="https://picsum.photos/200/300" gameName="Test Game 2" userName="User 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt libero tempore hic dignissimos aspernatur totam a accusantium ipsa iure repudiandae deleniti nemo animi cum, vero illum accusamus necessitatibus consequuntur!" />
                <Review url="https://picsum.photos/200/300" gameName="Test Game 3" userName="User 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt libero tempore hic dignissimos aspernatur totam a accusantium ipsa iure repudiandae deleniti nemo animi cum, vero illum accusamus necessitatibus consequuntur!" />
                <Review url="https://picsum.photos/200/300" gameName="Test Game 4" userName="User 4" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sunt libero tempore hic dignissimos aspernatur totam a accusantium ipsa iure repudiandae deleniti nemo animi cum, vero illum accusamus necessitatibus consequuntur!" />
            </StyledReviews>
        </>
    );
};

const StyledReviews = styled.div`
    box-sizing: border-box;
    margin: 2rem auto;
    display: flex;
    flex-wrap: wrap;
`;


export default Reviews;