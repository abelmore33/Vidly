import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

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
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
