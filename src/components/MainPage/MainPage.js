import logo from "../../assets/images/target.png";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, LoginButton, SignUpButton, Buttons } from "./MainPageStyle";
export default function MainPage() {
  const navigate = useNavigate();
  const mobile = useMediaQuery("(max-width:980px)");
  return (
    <Container>
      <div>
        <h1> {mobile ? "1% ESD" : "1% Every Single Day"}</h1>
        <img src={logo} alt="1%ESD logo" title="1%ESD" />
      </div>
      <div>
        <Buttons>
          <LoginButton onClick={() => navigate("/login")}>Login</LoginButton>
          <SignUpButton onClick={() => navigate("/signup")}>
            Sign Up
          </SignUpButton>
        </Buttons>
        <h2>
          Developing yourself
          <p>Every Single Day</p>
        </h2>
      </div>
    </Container>
  );
}
