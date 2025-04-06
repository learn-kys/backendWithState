interface IGame {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

export class GameManager {
  games: IGame[] = [];
  private static instance: GameManager;

  private constructor() {
    this.games = [];
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new GameManager();
    }

    return this.instance;
  }

  addMove(gameId: string, move: string) {
    console.log(`Adding move ${move} to game ${gameId}`);
    const game = this.games.find((game) => game.id === gameId);
    game?.moves.push(move);
  }

  addGame(gameId: string) {
    const game: IGame = {
      id: gameId,
      whitePlayerName: "Alice",
      blackPlayerName: "Bob",
      moves: [],
    };
    this.games.push(game);
  }

  log() {
    console.log(this.games);
  }
}
