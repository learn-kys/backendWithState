interface IGame {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}
export const game: IGame[] = [];
