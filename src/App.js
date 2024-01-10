import { useState, useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./routers";
import FontFaceObserver from "fontfaceobserver";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const font1 = new FontFaceObserver("Helvetica");
    const font2 = new FontFaceObserver("HelveticaLight");
    const font3 = new FontFaceObserver("Mea");

    Promise.all([font1.load(), font3.load()])
      .then(() => {
        // Fonts are loaded, wait for an additional 2000 milliseconds (2 seconds)
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error loading fonts:", error);
      });
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
