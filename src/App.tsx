import { DomRef } from "./components/refs/DomRef";
import { MutableRef } from "./components/refs/MutableRef";

import "./App.css";

function App() {
  return (
    <div className="App">
      <DomRef />
      <MutableRef />
    </div>
  );
}

export default App;
