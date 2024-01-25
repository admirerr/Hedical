import React from 'react';
import LocationCard from './LocationCard';
import MainPage from './MainPage';
import Stations from './Station';
import GetAmbulance from './GetAmbulance';
import Contact from './Contact';
import Footer from './Footer';
import MainComponent from './MainComponent';
import About from './About';
import Card from './Cards';
import Form from './Form';
import Consultancy from './Consultancy';
const HomePage = () => {
    return (
        <div>
           <MainPage />
           <MainComponent />
           <Stations />
           <GetAmbulance/>
           <Contact  />
           <About/>
           <Form/>
           <Footer/>
           <Consultancy/>
        </div>
    );
}
export default HomePage;