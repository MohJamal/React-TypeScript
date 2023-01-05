import { Login } from "./Login";

export const Private = ({ isLoggedIn, Component }) => {
  if (isLoggedIn) {
    return <Component name="Vishwas" />;
  } else {
    return <Login />;
  }
};
