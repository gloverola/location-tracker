import React from 'react';
import styled from 'styled-components';
import { RiArrowDropRightLine } from "react-icons/ri";
import {LocationContext} from '../context/AppContext'

const SearchForm = ( { title } ) => {
    
    const appContext = React.useContext( LocationContext );

    const { handleSearchChange, handleSubmit, search } = appContext;
    
    return (
      <SearchWrapper>
        <Title>{title}</Title>
        <div>
          <input
            type='text'
                    placeholder='Paste any IP address or domain here'
                    value={search}
            onChange={(e) => handleSearchChange(e)}
          />
          <Button as='button' onClick={(e) => handleSubmit(e)}>
            <RiArrowDropRightLine size={30} />
          </Button>
        </div>
      </SearchWrapper>
    );
}

export default SearchForm;

const SearchWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 1rem;
width: 100%;
align-items: center;
justify-content: flex-start;

div {
    display: flex;
    padding: 2rem;

    input {
        width: 25rem;
        padding: 10px;
        outline: none;
        border: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;

        @media screen and (max-width: 768px) {
            width: 18rem;
        }
    }
}
`;

const Title = styled.h2`
color: #fff;
`;

const Button = styled.button`
padding: 10px;
background-color: #000;
color: #fff;
border: none;
outline: none;
font-size: 1rem;
border-radius: 0 5px 5px 0;
transition: all .3s ease;

&:hover {
    background-color: #fff;
    color: #2e4dd6;
}
`

