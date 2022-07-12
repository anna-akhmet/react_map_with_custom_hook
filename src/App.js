import React, { useEffect, useState } from "react";
import useMapbox from "./useMapbox.js";
import {Button} from "./Button.js";

export default function App() {
  const [random, setRandom] = useState(Math.random());

  useMapbox();

  return (
    <>
      <Button onClick={() => setRandom(Math.random())}>Ререндер!</Button>
      <div id="map"></div>
    </>
  );
}

