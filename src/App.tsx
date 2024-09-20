import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main" `,
          lg: `"nav nav" "aside main" `,
        }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="green">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
