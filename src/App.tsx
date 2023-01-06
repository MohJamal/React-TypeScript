import { RandomNumber } from "./components/restriction/RandomNumber";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RandomNumber value={10} isPositive isNegative isZero />
    </div>
  );
}

export default App;
