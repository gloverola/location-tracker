import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import { GlobalStyle } from './styles/GlobalStyles';


const App = () => {

    return (
          <>
            <GlobalStyle />
            <Header />
            <Map />
          </>
    );
}

export default App;
