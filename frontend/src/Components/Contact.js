import React from 'react';
import 'tailwindcss/tailwind.css';
import appstore from "../images/appstore.png";
import playstore from "../images/playstore.png";
import phone from "../images/phone.png";

const Contact = () => {
    return (
        <div className="bg-gray-200 p-4 flex flex-col sm:flex-row items-center justify-between">
          
            <div className="max-w-lg mb-4 sm:mb-0">
                <h1 className="text-3xl font-bold mb-4 ml-40">Download the Food on Track app!</h1>
                <p className="text-xl mb-4 ml-40">For order status updates & more</p>
                <p className="text-xl mb-4 ml-40">With handy features like timely order status updates, one-tap calling & PNR auto-pasting, lesser data usage, faster load times & fluid animations, the app is crafted to delight you with a great eCatering order experience.</p>

                <div className="flex items-center">
                    <img
                        src={appstore}
                        width="150"
                        height="150"
                        className="inline-block align-top mt-1 mr-2 ml-40"
                        alt="App Store"
                    />
                    <img
                        src={playstore}
                        width="150"
                        height="150"
                        className="inline-block align-top mt-1 mr-2 ml-2 sm:flex-col"
                        alt="Play Store"
                    />
                </div>
            </div>

            <img
                src={phone}
                width="300"
                height="300"
                className="inline-block align-top mt-1 ml-2 sm:ml-0"  
                alt="Phone"
            />
        </div>
    );
};

export default Contact;
