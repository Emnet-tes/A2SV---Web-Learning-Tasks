"use client";
import { useUser } from "../contexts/UserContext"; // Adjust the path if necessary
import Home from "./Home/page";
import SignIn from "./signin/page";

export default function Page() {
  const { isLoggedIn } = useUser();
  console.log(useUser());
  return <div>{isLoggedIn ? <Home /> : <SignIn />}</div>;
}
