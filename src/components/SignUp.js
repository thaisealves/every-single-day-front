import styled from "styled-components";
import logo from "../assets/images/target.png";
import { Link, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";
import { Bars } from "react-loader-spinner";
import TextField from "@mui/material/TextField";
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
      <div>
        <h1> {mobile ? "1% ESD" : "1% Every Single Day"}</h1>
        <img src={logo} alt="1%ESD logo" title="1%ESD" />
      </div>
      <div>
        <Forms>
          <Disabled disabled={disable}>
            <CustomizedTextField
              id="name"
              label="Name"
              variant="outlined"
              required
              value={name}
              disabled={disable}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: 11 }}
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
            />

            <SignUpButton type="submit">{buttonCtt}</SignUpButton>
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
    color: "#7bcca8",
    height: 40,
    width: 110,
  },
};
const Container = styled.div`
  background-color: #f9f8f6;
  color: #40677b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
  padding: 50px 0;
  box-sizing: border-box;
  img {
    width: 277px;
  }
  h1 {
    font-family: "Coustard", serif;
    font-weight: 400;
    font-size: 50px;
    text-align: center;
  }

  @media (min-width: 980px) {
    flex-direction: row;
    img {
      width: 499px;
    }
    h2 {
      font-size: 30px;
    }
    h1 {
      margin-bottom: 51px;
    }
  }
`;
const Forms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 980px) {
    margin: 230px 0 100px 0;
  }
`;
const SignUpButton = styled.button`
  background-color: #aad4c1;
  color: #f9f8f6;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  width: 316px;
  height: 41.14px;
  margin-bottom: 11px;
  @media (min-width: 980px) {
    width: 493px;
    height: 64px;
    margin-bottom: 25px;
  }
`;

const Linked = styled(Link)`
  color: #355326;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  @media (min-width: 980px) {
    font-size: 30px;
  }
`;

const CustomizedTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#AAD4C1",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#AAD4C1",
    },
    "&:hover fieldset": {
      borderColor: "#AAD4C1",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#AAD4C1",
    },
  },
});
