import { useState } from "react";
import "./App.css";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const calculate = (operator) => {
    try {
      let num = parseFloat(input);
      if (isNaN(num)) return;
      switch (operator) {
        case "add":
          setResult((prev) => prev + num);
          break;
        case "subtract":
          setResult((prev) => prev - num);
          break;
        case "multiply":
          setResult((prev) => prev * num);
          break;
        case "divide":
          setResult((prev) => (num !== 0 ? prev / num : "Error"));
          break;
        default:
          break;
      }
    } catch (error) {
      setResult("Error");
    }
  };

  const resetInput = () => setInput("");
  const resetResult = () => setResult(0);

  return (
    <div className="calculator">
      <h2>Simplest Working Calculator</h2>
      <div className="result">{result}</div>
      <input
        type="number"
        value={input}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <div>
        <button onClick={() => calculate("add")} className="add">add</button>
        <button onClick={() => calculate("subtract")} className="subtract">subtract</button>
        <button onClick={() => calculate("multiply")} className="multiply">multiply</button>
        <button onClick={() => calculate("divide")} className="divide">divide</button>
      </div>
      <div>
        <button onClick={resetInput} className="reset">reset input</button>
        <button onClick={resetResult} className="reset">reset result</button>
      </div>
    </div>
  );
} 
