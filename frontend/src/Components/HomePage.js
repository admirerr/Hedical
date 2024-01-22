import React from 'react';
import LocationCard from './LocationCard';
import MainPage from './MainPage';
import Stations from './Station';
import GetAmbulance from './GetAmbulance';
import Contact from './Contact';
const HomePage = () => {
    return (
        <div>
            {/* <h1>Home Page</h1> */}
           <MainPage />
           <Stations />
           <Contact  />
           <GetAmbulance/>
        </div>
    );
}
export default HomePage;