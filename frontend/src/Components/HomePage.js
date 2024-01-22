import React from 'react';
import LocationCard from './LocationCard';
import MainPage from './MainPage';
import Stations from './Station';
import GetAmbulance from './GetAmbulance';
const HomePage = () => {
    return (
        <div>
            {/* <h1>Home Page</h1> */}
           <MainPage/>
           <Stations/>
           <GetAmbulance/>
        </div>
    );
}
export default HomePage;