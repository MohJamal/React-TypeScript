import "./App.css";
import Button from "./components/Button";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
      {/* <Greet name="Mohammed" messageCount={10} isLoggedIn={true} /> */}
      <Person name={personName} />
      <PersonList names={namesList} />
      <Status status="loading" />
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario!</Heading>
      </Oscar>
      <Greet name="Mohammed" isLoggedIn={true} />
      <Button
        handleClick={(event, id) => console.log("Button Clicked", event, id)}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
