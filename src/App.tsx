import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  const personName = {
    first: "Ahmed",
    last: "Zaid",
  };

  const namesList = [
    {
      first: "Ahmed2",
      last: "Zaid2",
    },
    {
      first: "Ahmed3",
      last: "Zaid3",
    },
    {
      first: "Ahmed4",
      last: "Zaid4",
    },
  ];

  return (
    <div className="App">
      <Greet name="Mohammed" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={namesList} />
    </div>
  );
}

export default App;
