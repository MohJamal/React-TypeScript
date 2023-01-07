import { CustomButton } from "./components/html/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        <div>Button Label</div>
      </CustomButton>
    </div>
  );
}

export default App;
