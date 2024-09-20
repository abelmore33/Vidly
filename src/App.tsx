import { useState } from "react";
import { Button } from "@chakra-ui/react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button colorScheme="blue">Click Me</Button>
    </div>
  );
}

export default App;
