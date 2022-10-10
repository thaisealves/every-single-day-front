import { Route, Routes, BrowserRouter } from "react-router-dom";
import Diary from "./Diary/Diary";
import Exercises from "./Exercises";
import Food from "./Food";
import Home from "./Home/Home";
import Login from "./Login/Login";
import MainPage from "./MainPage/MainPage";
import SignUp from "./SignUp/SignUp";
import Water from "./Water/Water";
import GlobalStyle from "./GlobalStyle";
import Header from "./Layout/Header";
import PageContext from "./PageContext";
import { useState } from "react";
import Footer from "./Layout/Footer";
import AddVision from "./Home/AddVision";
import NewDiary from "./Diary/NewDiary";
import NewPlan from "./Diary/NewPlan";
import AddWater from "./Water/AddWater";
import AddWeight from "./Water/AddWeight";
import Logout from "./Layout/Logout";
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
          <Route path={"/vision"} element={<AddVision />} />
          <Route path={"/newdiary"} element={<NewDiary />} />
          <Route path={"/newplan"} element={<NewPlan />} />
          <Route path={"/addwater"} element={<AddWater />} />
          <Route path={"/addweight"} element={<AddWeight />} />
          <Route path={"/logout"} element={<Logout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PageContext.Provider>
  );
}
