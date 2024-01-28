import React from "react";

function LoginPopup({ onClose }) {
  return (
    <>
      {/* <div className="fixed inset-0 bg-black opacity-90 backdrop-filter backdrop-blur-md z-50"></div> */}
      <div className="bg-white h-full w-1/4 absolute right-0">
        <div className="flex flex-col items-center justify-center h-full relative">
          <h1 className="text-2xl text-black">QUICK LOGIN</h1>
          <button
            className="mt-2 px-4 py-2 bg-[#17A589] text-white rounded hover:bg-blue-600 absolute right-0"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <div className="flex flex-row items-center">
          <form>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="mb-4 ml-5 w-80 p-2 mt-4 rounded border-black"
              required
              pattern="[0-9]{10}"
            />
            <button
              type="submit"
              className="w-80 ml-5 bg-[#17A589] text-white p-2 rounded"
            >
              Send OTP
            </button>
          </form>
        </div>
        <div className="text-sm mt-4 mb-2 mt-90%">
          By continuing, you agree with our{" "}
          <a href="https://www.google.com/" className="text-black">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://www.google.com/" className="text-black">
            Terms and Conditions
          </a>
        </div>
      </div>
    </>
  );
}

export default LoginPopup;
