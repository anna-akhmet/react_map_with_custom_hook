import React, { useState } from "react";
import useMapbox from "./useMapbox.js";
import {Button} from "./Button.js";
import {createGlobalStyle, ThemeProvider} from "styled-components";

const theme = {
  colors: {
    primary: "#0000ff",
    secondary: "#5efc8d",
    lightGray: "#cccccc"
  }
};

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Helvetica;
  }
`

export default function App() {
  const [random, setRandom] = useState(Math.random());

  useMapbox();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Button onClick={() => setRandom(Math.random())}>Ререндер!</Button>
        <div id="map"></div>
      </ThemeProvider>
    </>
  );
}

