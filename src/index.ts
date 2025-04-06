import { game } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
  game.push({
    id: Math.random().toString(),
    whitePlayerName: "Alice",
    blackPlayerName: "Bob",
    moves: [],
  });
}, 5000);
