import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';
import { fadeIn } from '../animations';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
    //Search functionality
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");
    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    };
    const clearSearched = () => {
        dispatch({ type: "CLEAR_SEARCHED" });
    }

    return (
        <StyledSearch variants={fadeIn} initial="hidden" animate="show">
            <form className="search">
                <FontAwesomeIcon className="x-search" size="1x" icon={faArrowCircleLeft} onClick={clearSearched}/>
                <input value={textInput} onChange={inputHandler} type="text" />
                <button onClick={submitSearch} type="submit"> <FontAwesomeIcon size="1x" icon={faSearch} /></button>
            </form>
        </StyledSearch>
    );
};

const StyledSearch = styled(motion.div)`
    padding: 8rem 5rem 5rem 5rem;
    text-align: left;
    font-size: 2rem;
    input{
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        border-bottom-left-radius: 1rem;
        border-top-left-radius: 1rem;
        box-shadow: 0px 0px 20px #f18d19;
        font-weight: bold;
    }
    button{
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #f18d19;
        color: white;
        border-bottom-right-radius: 1rem;
        border-top-right-radius: 1rem;
        box-shadow: 0px 0px 10px #FFFFFF;
    }
`;

export default Search;