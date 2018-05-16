import {Map} from 'immutable'

let board = Map();

export const move = (player, coord) => {
  return { type: "MOVE", position: coord, player };
};

export default function reducer(state = { turn: 'X', board: board }, action) {
  const { type, position, player } = action;
  const currentBoard = state.board;

  switch (type) {
  case "MOVE":
    const newBoard = currentBoard.setIn(position, player)
    const newPlayer = player === "X" ? "O" : "X";

    return { turn: newPlayer, board: newBoard }
  default:
    return state;
  }

}
