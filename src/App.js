import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("red")
  const [disabled, setDisabled] = useState(false)
  const newColor = color === "red" ? "blue" : "red";

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => setColor(newColor)}
        disabled={disabled}
      >
        Change to {newColor}
      </button>
      <input
        id="checkbox-id"
        type="checkbox"
        onChange={(e) => setDisabled(e.target.checked)}
        value={disabled}
      />
      <label htmlFor="checkbox-id">Disable button</label>
    </div>
  );
}

export default App;
