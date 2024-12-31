

import React, { useState } from "react";
import { useAuth } from "../../contexts/authContext";

const Home = () => {
  const { currentUser } = useAuth();
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    
    <div className="relative">
      {/* Popup Message */}
      {showPopup && (
        <div
          className="w-200 h-13 fixed left-1/2 top-20 transform -translate-x-1/2 bg-blue-500 text-white p-4 rounded-lg shadow-lg text-sm flex items-center"
          style={{ zIndex: 100 }}
        >
          <p className="mr-4" styles={{fontSize:"5px"}}>
            Hello{" "}
            {currentUser.displayName ? currentUser.displayName : currentUser.email},
            you are now logged in.
          </p>
          <button
            onClick={closePopup}
            className="w-8 h-6 flex items-center justify-center bg-white text-green-500 rounded-full text-xl font-bold hover:bg-green-100 transition"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
