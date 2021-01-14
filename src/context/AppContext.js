import React, { useState, useEffect } from "react";

const LocationContext = React.createContext();



const LocationProvider = ( { children } ) => {
    
  
  const [locations, setLocation] = useState([]);
  const [loading, setLoading] = useState(true);
    const [ search, setSearch ] = useState( "" );

    
    

    const fetchLocation = () => {
       
        let url = "http://ip-api.com/json/";

        fetch( url )
            .then( ( res ) => res.json() )
            .then( ( data ) => {
                setLocation( data );
                setLoading( false );
                setSearch("");
                console.log( data );
            } );
    };

    const handleSearchChange = async (e) => {
      setSearch(e.target.value);
     
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();

        let url = `http://ip-api.com/json/${search}`;

        fetch(url)
          .then((res) => res.json())
          .then((data) => {
              setLocation( data );
              setLoading( false );
              setSearch( "" );
            console.log(data);
          });

    };

    useEffect(() => {
        fetchLocation();
    }, []);

  return (
    <LocationContext.Provider
      value={{
        loading,
        search,
        locations,
        handleSearchChange,
              handleSubmit,
        fetchLocation
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider, LocationContext };
