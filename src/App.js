import React, { useState } from "react";
import useMapbox from "./useMapbox.js";

export default function App() {
  const [random, setRandom] = useState(Math.random());

  useMapbox();

  return (
    <>
      <button id="rerender" onClick={() => setRandom(Math.random())}>
        Ререндер!
      </button>
      <div id="map"></div>
    </>
  );
}

