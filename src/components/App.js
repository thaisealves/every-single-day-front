import { Route, Routes, BrowserRouter } from "react-router-dom";
import Diary from "./Diary";
import Exercises from "./Exercises";
import Food from "./Food";
import Home from "./Home";
import Login from "./Login";
import MainPage from "./MainPage";
import SignUp from "./SignUp";
import Water from "./Water";
import GlobalStyle from "./GlobalStyle";
export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/signup"} element={<SignUp />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/diary"} element={<Diary />} />
        <Route path={"/exercises"} element={<Exercises />} />
        <Route path={"/food"} element={<Food />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/water"} element={<Water />} />
      </Routes>
    </BrowserRouter>
  );
}
