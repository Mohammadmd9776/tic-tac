import { useState } from "react";
import "./App.css";
import Result from "./components/Result";
import Square from "./components/Square";
function App() {
  const [state, setState] = useState({
    player: "Cross",
    positions: [
      "EMPTY",
      "EMPTY",
      "EMPTY",
      "EMPTY",
      "EMPTY",
      "EMPTY",
      "EMPTY",
      "EMPTY",
      "EMPTY",
    ],
  });

  const takeTurn = (position) => {
    const positions = [...state.positions];

    positions[position] = state.player;
    setState({
      player: state.player === "Cross" ? "Circle" : "Cross",
      positions,
    });
  };

  function winner(p) {
    if (p[0] === "Circle" && p[1] === "Circle" && p[2]) return "Circle";
    if (p[3] === "Circle" && p[4] === "Circle" && p[5]) return "Circle";
    if (p[6] === "Circle" && p[7] === "Circle" && p[8]) return "Circle";
    if (p[0] === "Circle" && p[3] === "Circle" && p[6]) return "Circle";
    if (p[1] === "Circle" && p[4] === "Circle" && p[7]) return "Circle";
    if (p[2] === "Circle" && p[5] === "Circle" && p[8]) return "Circle";
    if (p[0] === "Circle" && p[4] === "Circle" && p[8]) return "Circle";
    if (p[2] === "Circle" && p[4] === "Circle" && p[6]) return "Circle";
    if (p[0] === "Cross" && p[1] === "Cross" && p[2]) return "Cross";
    if (p[3] === "Cross" && p[4] === "Cross" && p[5]) return "Cross";
    if (p[6] === "Cross" && p[7] === "Cross" && p[8]) return "Cross";
    if (p[0] === "Cross" && p[3] === "Cross" && p[6]) return "Cross";
    if (p[1] === "Cross" && p[4] === "Cross" && p[7]) return "Cross";
    if (p[2] === "Cross" && p[5] === "Cross" && p[8]) return "Cross";
    if (p[0] === "Cross" && p[4] === "Cross" && p[8]) return "Cross";
    if (p[2] === "Cross" && p[4] === "Cross" && p[6]) return "Cross";
    if (p.every((position) => position !== "EMPTY")) return "it is tie";
  }
  const winner1 = winner(state.positions);

  return (
    <div className="app">
      <div className="grid">
        <Square position={0} value={state.positions[0]} takeTurn={takeTurn} />
        <Square position={1} value={state.positions[1]} takeTurn={takeTurn} />
        <Square position={2} value={state.positions[2]} takeTurn={takeTurn} />
        <Square position={3} value={state.positions[3]} takeTurn={takeTurn} />
        <Square position={4} value={state.positions[4]} takeTurn={takeTurn} />
        <Square position={5} value={state.positions[5]} takeTurn={takeTurn} />
        <Square position={6} value={state.positions[6]} takeTurn={takeTurn} />
        <Square position={7} value={state.positions[7]} takeTurn={takeTurn} />
        <Square position={8} value={state.positions[8]} takeTurn={takeTurn} />
      </div>
      {winner1 && <Result winner1={winner1} />}
    </div>
  );
}

export default App;
