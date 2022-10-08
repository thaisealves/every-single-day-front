import { Route, Routes, BrowserRouter } from "react-router-dom";
import Diary from "./Diary";
import Exercises from "./Exercises";
import Food from "./Food";
import Home from "./Home/Home";
import Login from "./Login/Login";
import MainPage from "./MainPage";
import SignUp from "./SignUp/SignUp";
import Water from "./Water";
import GlobalStyle from "./GlobalStyle";
import Header from "./Layout/Header";
import PageContext from "./PageContext";
import { useState } from "react";
export default function App() {
  const [pageName, setPageName] = useState("");
  return (
    <PageContext.Provider value={{ pageName, setPageName }}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
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
    </PageContext.Provider>
  );
}
