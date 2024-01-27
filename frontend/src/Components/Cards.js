import React from "react";
function Card(){
    return (
        <>
  <div className=" w-[60%]  lg:flex ml-[27.5vw] mt-[10vh] " style={{width:"50%"}}>
  <div class="h-48 lg:h-30 lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{"background-image": "url('https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=996&t=st=1706204647~exp=1706205247~hmac=c13f9e69074f75c0b0ad0cade936ff9ea369a74e9fb86f22a7cd0a7758234884')",border:'2px solid black'}} title="Woman holding a mug">
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-2 flex flex-col justify-between leading-normal " style={{height:'27vh'}}>
    <div className="mb-2 ">
      <p class="text-sm text-gray-600 flex items-center">
        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    {/* <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
      <div className="text-sm">
        <p className="text-gray-900 leading-none">Jonathan Reinink</p>
        <p className="text-gray-600">Aug 18</p>
      </div>
    </div> */}
  </div>
</div>
</>
    )
}
export default Card;