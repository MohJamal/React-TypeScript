import { Text } from "./components/polymorphic/Text";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Text size="lg" as="h1" htmlFor="Id">
        Heading
      </Text> */}
      <Text size="lg" as="h1">
        Heading
      </Text>
      <Text size="md" as="p">
        Paragraph
      </Text>
      <Text size="sm" color="secondary" as="label" htmlFor="someId">
        Label
      </Text>
    </div>
  );
}

export default App;
