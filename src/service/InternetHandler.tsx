import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const InternetConnection = ({ children }: any) => {
  // state variable holds the state of the internet connection
  const [isOnline, setOnline] = useState(true);

  // On initization set the isOnline state.
  useEffect(() => {
    setOnline(navigator.onLine);
    // event listeners to update the state
    window.addEventListener("online", () => {
      setOnline(true);
    });

    window.addEventListener("offline", () => {
      setOnline(false);
    });
  }, []);

  // if user is online, return the child component else return a custom component
  if (isOnline) {
    return children;
  } else {
    (() => toast("Plz Connect Internet"))();
    return <Navigate to="/" />;
  }
};

export default InternetConnection;
