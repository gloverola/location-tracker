import React, {useContext} from 'react'
import styled from 'styled-components';
import { LocationContext } from '../context/AppContext';

const Details = () => {

    const { locations } = useContext( LocationContext );
    console.log(locations)
    

    return (
      <DetailsWrapper>
        <Column>
          <span>IP ADDRESS</span>
          <h2>{locations.query}</h2>
        </Column>
        <Column>
          <span>LOCATION</span>
          <h2>
            { locations.city } , {locations.countryCode}
          </h2>
        </Column>
        <Column>
          <span>TIMEZONE</span>
          <h2>{locations.timezone}</h2>
        </Column>
        <Column>
          <span>ISP</span>
          <h2>{locations.isp}</h2>
        </Column>
      </DetailsWrapper>
    );
}

export default Details;

const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 60%;
  position: absolute;
  background: #fff;
  top: 220px;
  padding: 20px;
  z-index: 1000;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  align-items: flex-start;
  justify-content: space-between;
  box-shadow: 0px 0px 7px -2px rgba(148, 148, 148, 0.73);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    top: 290px;
    padding: 20px;
    height: 100%;
  }
`;

const Column = styled.div`
  margin-left: 1rem;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
    margin-left: 0;
  }

  span {
    margin-bottom: 40px;
    color: #7d7d7d;

    @media screen and (max-width: 768px) {
      font-size: 0.7rem;
    }
  }

  h2 {
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;
