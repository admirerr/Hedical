

import React from "react";
const Footer=()=>{
    return(
      <footer className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          Our services
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white"> E-Booking </a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Register as a Doctor</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">  Register as a Customer</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white"> Policy for B2C Agents</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
        Resources
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white">Frequently Asked Questions</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Terms and Conditions</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Sitemap</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Landing Pages</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          Booking
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white">Order Medicines in train</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Consult Doctor </a>
          </li>
          {/* <li>
            <a className="text-gray-400 hover:text-white">Third Link</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Fourth Link</a>
          </li> */}
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
          Book our services
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          {/* <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-400"
            >
              Placeholder
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-green-900 focus:border-green-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div> */}
          {/* <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
            Button
          </button> */}
        </div>
        <p className="text-gray-500 text-lg mt-2 md:text-left text-center">
        Get medical services
          <br className="lg:block hidden" />
          while travelling.
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="ml-3 text-xl">Hedical</span>
      </a>
      <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
        © 2024 Hedical —
        <a
          href="https://twitter.com/knyttneve"
          className="text-gray-500 ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          @irctc
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-400" href="https://www.linkedin.com/company/railhealth/">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-400" href="https://www.linkedin.com/company/railhealth/">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-gray-400" href="https://www.linkedin.com/company/railhealth/">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-gray-400" href="https://www.linkedin.com/company/railhealth/">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>

    )
}
export default Footer;


// import React from "react";
// const Footer=()=>{
//     return(
//     <div>
// <div className="pt-15 mx-auto flex flex-col items-center gap-8 bg-info-footer p-8 text-white" style={{backgroundColor:'#252C41'}}>
//   <div className=" screen-content-width w-full">
//     <div className="border-bg-white flex w-full justify-between gap-6 border-b border-opacity-50 pb-9">
//       <div className="w-2/4">
//         <h4 className="footer-header">RailHealth</h4>
//         <p className="footer-list-item mb-4">
//           Get medical services while travelling.
//         </p>
//         <div className="-ml-2.5 flex flex-wrap" id="download-app-section">
//           <a href="https://apps.apple.com/in/app/irctc-catering-food-on-track/id1077183717">
//             <img
//               className="h-16 flex-shrink-0"
//               alt="Download on the App Store"
//               src="https://carbon-v2.ipsator.com/static/images/app-store-download-h99.png"
//             />
//           </a>
//           <a href="https://play.google.com/store/apps/details?id=com.irctc.fot&utm_source=eCatering_Desktop_Website&utm_campaign=Footer_Badge">
//             <img
//               className="h-16  flex-shrink-0"
//               alt="Get it on Google Play"
//               src="https://carbon-v2.ipsator.com/static/images/play-store-download-h99.png"
//             />
//           </a>
//         </div>
//         <div className="mt-8 flex w-full gap-9">
//           <a
//             href="https://www.facebook.com/cateringIRCTC/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className=" rounded flex items-center justify-center overflow-hidden undefined">
//               <img
//                 loading="lazy"
//                 src="https://neon.ipsator.com/c/image/upload/c_scale,q_75,w_30/v1670351843/irctc/icons/social/w/facebook.png"
//                 srcSet=""
//                 className="h-full w-full object-cover "
//                 alt="facebook-icon"
//                 width={30}
//                 height={30}
//                 style={{ width: "100%" }}
//               />
//             </div>
//           </a>
//           <a
//             href="https://twitter.com/ecateringirctc"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className=" rounded flex items-center justify-center overflow-hidden undefined">
//               <img
//                 loading="lazy"
//                 src="https://neon.ipsator.com/c/image/upload/c_scale,q_75,w_30/v1670351843/irctc/icons/social/w/twitter.png"
//                 srcSet=""
//                 className="h-full w-full object-cover "
//                 alt="twitter-icon"
//                 width={30}
//                 height={30}
//                 style={{ width: "100%" }}
//               />
//             </div>
//           </a>
//           <a
//             href="https://www.instagram.com/ecateringirctc/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className=" rounded flex items-center justify-center overflow-hidden undefined">
//               <img
//                 loading="lazy"
//                 src="https://neon.ipsator.com/c/image/upload/c_scale,q_75,w_30/v1670351843/irctc/icons/social/w/instagram.png"
//                 srcSet=""
//                 className="h-full w-full object-cover "
//                 alt="instagram-icon"
//                 width={30}
//                 height={30}
//                 style={{ width: "100%" }}
//               />
//             </div>
//           </a>
//           <a
//             href="https://www.youtube.com/c/IRCTCOFFICIAL/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <div className=" rounded flex items-center justify-center overflow-hidden undefined">
//               <img
//                 loading="lazy"
//                 src="https://neon.ipsator.com/c/image/upload/c_scale,q_75,w_30/v1670351843/irctc/icons/social/w/yt.png"
//                 srcSet=""
//                 className="h-full w-full object-cover "
//                 alt="youtube-icon"
//                 width={30}
//                 height={30}
//                 style={{ width: "100%" }}
//               />
//             </div>
//           </a>
//         </div>
//       </div>
//       <div className="w-2/4">
//         <div className="mb-10 flex gap-16">
//           <div>
//             <h4 className="footer-header">RailHealth</h4>
//             <ul className="footer-list-item list-none">
//               <li>
//                 <a
//                   href="https://irctc.co.in/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {" "}
//                   E-Booking 
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.ecatering.irctc.co.in/admin/vendor-signup"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {" "}
//                   Register as a Doctor
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.ecatering.irctc.co.in/admin/vendor-signup"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {" "}
//                   Register as a Customer
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://carbon-v2.ipsator.com/static/assets/FDA_POLICY_08.11.2021.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {" "}
//                   Policy for B2C Agents
//                 </a>
//               </li>
//               <li>
//                 <a href="/blog">Blog</a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="footer-header">Resources</h4>
//             <ul className="footer-list-item list-none">
//               <a href="/faq">Frequently Asked Questions</a>
//               <li>
//                 <a href="/tnc">Terms and Conditions</a>
//               </li>
//               <li>
//                 <a href="/buy-jain-food-in-train">Order Medicines in Train</a>
//               </li>
//               <li>
//                 <a href="/pages">Landing Pages</a>
//               </li>
//               <li>
//                 <a href="/sitemap">Sitemap</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <small className="text-xs leading-relaxed">
//           By placing order you accept our{" "}
//           <a className="underline" href="/tnc">
//             Terms &amp; Conditions
//           </a>
//           .
//           <div>
//             This site is protected by reCAPTCHA and the Google{" "}
//             <a
//               href="https://policies.google.com/privacy"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="underline"
//             >
//               Privacy Policy
//             </a>{" "}
//             and{" "}
//             <a
//               href="https://policies.google.com/terms"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="underline"
//             >
//               Terms of Service
//             </a>{" "}
//             apply.
//           </div>
//         </small>
//       </div>
//     </div>
//     <div className="pt-9 text-center font-normal">
//       Copyright © 2024 -{" "}
//       <a href="https://www.railhealth.com/">https://www.railhealth.com/</a>. All
//       Rights Reserved.
//     </div>
//   </div>
// </div>
// </div>
//     )
// }
// export default Footer;
