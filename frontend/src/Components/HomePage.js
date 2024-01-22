import React from 'react';
import LocationCard from './LocationCard';
import MainPage from './MainPage';
import Stations from './Station';
import GetAmbulance from './GetAmbulance';
import Contact from './Contact';
import Footer from './Footer';
import About from './About';
import Form from './Form';
const HomePage = () => {
    return (
        <div>
            {/* <h1>Home Page</h1> */}
           <MainPage />
           <Stations />
           
           <GetAmbulance/>
           <Contact  />
           <About/>
           <Form/>
           <Footer/>
           
        </div>
    );
}
export default HomePage;