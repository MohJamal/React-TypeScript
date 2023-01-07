import { CustomButton } from "./components/html/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        <div>Button Label</div>
      </CustomButton> */}

      <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Button Label
      </CustomButton>
    </div>
  );
}

export default App;
