import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [internetStatus, setInternetStatus] = useState(navigator.onLine);

  useEffect(() => {
    window.addEventListener("online", () => {
      setInternetStatus(true);
    });
    window.addEventListener("offline", () => {
      setInternetStatus(false);
    });
  }, []);

  return internetStatus;
};

export default useOnlineStatus;
