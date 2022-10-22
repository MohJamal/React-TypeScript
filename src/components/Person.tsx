import { PersonProps } from "./Person.types";

const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.first}
    </div>
  );
};

export default Person;
