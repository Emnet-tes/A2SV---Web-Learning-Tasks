"use client";
import { useUser } from "../contexts/UserContext";
import { Provider } from "react-redux";
import store from "./lib/store";
import Home from "./Home/page";
import SignIn from "./signin/page";

export default function Page() {
  const { isLoggedIn } = useUser();
  console.log(useUser());
  return (
    <Provider store={store}>{isLoggedIn ? <Home /> : <SignIn />}</Provider>
  );
}
