import React from 'react';
import LocationCard from '../Components/LocationCard';
import MainPage from '../Components/MainPage';
import Stations from '../Components/Station';
import GetAmbulance from '../Components/GetAmbulance';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import About from '../Components/About';
import Form from '../Components/Form';
import Consultancy from './Consultancy';
import Carts from './Carts';

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
           <Consultancy/>
           <Carts/>
         
        </div>
    );
}
export default HomePage;