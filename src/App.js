import React from "react";
import Home from "./pages/Home";

import { ChakraProvider, theme } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
