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
  SignUpButton,
} from "./SignUpStyle";
import { signUpSchema } from "../../schemas/signUpSchema";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();
  const mobile = useMediaQuery("(max-width:980px)");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonCtt, setButtonCtt] = useState("Sign Up");
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
                signUpHandler(
                  e,
                  setDisable,
                  name,
                  password,
                  email,
                  confirmPassword,
                  setButtonCtt,
                  navigate
                )
              }
            >
              <CustomizedTextField
                id="name"
                label="Name"
                variant="outlined"
                required
                value={name}
                disabled={disable}
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: 11 }}
                fullWidth
                data-cy="name"
              />

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
              <CustomizedTextField
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={disable}
                style={{ marginBottom: 11 }}
                fullWidth
                data-cy="confirmPassword"
              />
              <SignUpButton data-cy="signUpButton" type="submit">
                {buttonCtt}
              </SignUpButton>
            </Grid>
          </Disabled>
        </Forms>
        <Linked to={"/login"}>
          Already have an account?
          <br />
          Let’s login!
        </Linked>
      </div>
    </Container>
  );
}

async function signUpHandler(
  event,
  setDisable,
  name,
  password,
  email,
  confirmPassword,
  setButtonCtt,
  navigate
) {
  const API_URL = "http://localhost:4000/signup";
  event.preventDefault();
  setButtonCtt(<data.Component {...data.props} />);
  setDisable(true);
  const body = {
    name,
    email,
    password,
    confirmPassword,
  };
  const { error } = signUpSchema.validate(body);

  if (error) {
    alert("The data is incorrect!");
    setDisable(false);
    setButtonCtt("Sign Up");
    return;
  }
  try {
    await axios.post(API_URL, body);
    navigate("/login");
    setDisable(false);
  } catch (error) {
    console.log(error);
    alert(`${error.response.data}`);
    setDisable(false);
    setButtonCtt("Sign Up");
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
