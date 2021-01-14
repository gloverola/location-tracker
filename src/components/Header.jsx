import React from 'react';
import Details from './Details';
import SearchForm from './SearchForm';
import styled from 'styled-components'
import HeaderBg from '../assets/ip2.jpg'


const Header = () => {
    return (
        <HeaderWrapper bg={HeaderBg}>
            <SearchForm title="IP Address Tracker" />
            <Details />
        </HeaderWrapper>
    )
}

export default Header


const HeaderWrapper = styled.div`
background-image: url(${props => props.bg});
background-repeat: no-repeat;
background-size: cover;
width: 100vw;
height: 30vh;
display: flex;
flex-direction: column;
position: relative;
`