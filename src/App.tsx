import { RandomNumber } from "./components/restriction/RandomNumber";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* isPositive equals isPositive = {true} */}
      {/* <RandomNumber value={10} isPositive isNegative isZero /> */}
      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
