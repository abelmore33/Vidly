import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, errors } = useGames();

  return (
    <>
      {errors && <Text>{errors}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h1>{game.name}</h1>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
