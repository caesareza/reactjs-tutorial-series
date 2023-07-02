import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isInternetRestored, setIsInternetRestored] = useState(false);

  const statusInternet = () => {
    console.log("navigator.onLine", navigator.onLine);
    setIsOnline(navigator.onLine);

    if (navigator.onLine && !isOnline) {
      setTimeout(() => {
        setIsInternetRestored(true);
      }, 1000);
    }
  };

  useEffect(() => {
    if (isInternetRestored) {
      setTimeout(() => {
        setIsInternetRestored(false);
      }, 3000);
    }
  }, [isInternetRestored]);

  useEffect(() => {
    window.addEventListener("online", statusInternet);
    window.addEventListener("offline", statusInternet);

    return () => {
      window.removeEventListener("online", statusInternet);
      window.removeEventListener("offline", statusInternet);
    };
  }, [isOnline]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {!isOnline && <div className="offline">Internet Putus</div>}
      {isInternetRestored && (
        <div className="online">Internet Sudah Kembali</div>
      )}
    </>
  );
}

export default App;
