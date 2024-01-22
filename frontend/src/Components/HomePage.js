import React from 'react';
import LocationCard from './LocationCard';
import MainPage from './MainPage';
import Stations from './Station';
import Contact from './Contact';
const HomePage = () => {
    return (
        <div>
            {/* <h1>Home Page</h1> */}
           <MainPage />
           <Stations />
           <Contact  />
        </div>
    );
}
export default HomePage;