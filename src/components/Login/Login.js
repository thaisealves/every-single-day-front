import logo from "../../assets/images/target.png";
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Bars } from "react-loader-spinner";
import Grid from "@mui/material/Grid";
import {
  CustomizedTextField,
  Linked,
  Forms,
  Container,
  Logo,
  LoginButton,
} from "./LoginStyle";
import axios from "axios";
import { loginSchema } from "../../schemas/loginSchema";

export default function Login() {
  const navigate = useNavigate();
  const mobile = useMediaQuery("(max-width:980px)");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonCtt, setButtonCtt] = useState("Login");
  const [disable, setDisable] = useState(false);
  return (
    <Container>
      <Logo>
        <h1 onClick={() => navigate("/")}>
          {mobile ? "1% ESD" : "1% Every Single Day"}
        </h1>
        <img src={logo} alt="1%ESD logo" title="1%ESD" />
      </Logo>
      <div>
        <Forms>
          <Disabled disabled={disable}>
            <Grid
              component="form"
              onSubmit={(e) =>
                loginHandler(
                  e,
                  setDisable,
                  password,
                  email,
                  setButtonCtt,
                  navigate
                )
              }
            >
              <CustomizedTextField
                id="email"
                label="E-mail"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={disable}
                style={{ marginBottom: 11 }}
                fullWidth
                data-cy="email"
              />

              <CustomizedTextField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={disable}
                required
                style={{ marginBottom: 11 }}
                fullWidth
                data-cy="password"
              />

              <LoginButton data-cy="loginButton" type="submit">{buttonCtt}</LoginButton>
            </Grid>
          </Disabled>
        </Forms>
        <Linked to={"/signup"}>
          Doesn’t have an account?
          <br />
          Let’s sign up!
        </Linked>
      </div>
    </Container>
  );
}

async function loginHandler(
  event,
  setDisable,
  password,
  email,
  setButtonCtt,
  navigate
) {
  const API_URL = "https://esd-back.onrender.com/login";
  event.preventDefault();
  setButtonCtt(<data.Component {...data.props} />);
  setDisable(true);
  const body = {
    email,
    password,
  };
  const { error } = loginSchema.validate(body);

  if (error) {
    alert("The data is incorrect!");
    setDisable(false);
    setButtonCtt("Login");
    return;
  }
  try {
    const resp = await axios.post(API_URL, body);
    await localStorage.setItem("token", resp.data.token);
    navigate("/home");
    setDisable(false);
  } catch (error) {
    console.log(error);
    alert(`${error.response.data}`);
    setDisable(false);
    setButtonCtt("Login");
  }
}

function Disabled({ disabled, children }) {
  if (disabled) {
    return (
      <div style={{ opacity: 0.5 }} disabled>
        {children}
      </div>
    );
  }

  return <>{children}</>;
}

const data = {
  Component: Bars,
  props: {
    color: "#2b503f",
    height: 40,
    width: 110,
  },
};
