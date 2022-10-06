import styled from "styled-components";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

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

  & > div {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 980px) {
    flex-direction: row;

    h2 {
      font-size: 30px;
    }
    h1 {
      margin-bottom: 51px;
    }
    & > div {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;
const Logo = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 20%;
  justify-content: space-between;

  padding-bottom: 10px;
  img {
    width: 80%;
  }
  h1 {
    font-family: "Coustard", serif;
    font-weight: 400;
    font-size: 50px;
    text-align: center;
    padding-bottom: 15px;
  }
  @media (min-width: 980px) {
    img {
      width: 499px;
    }
  }
`;
const Forms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 980px) {
    padding: 0 50px;
    box-sizing: border-box;

    margin: 230px 0 100px 0;
  }
  & > form,
  & > div {
    width: 100%;
  }
`;
const SignUpButton = styled.button`
  background-color: #aad4c1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f9f8f6;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  width: 100%;
  height: 41.14px;
  margin-bottom: 11px;
  padding: 0;
  z-index: 1;
  @media (min-width: 980px) {
    width: 100%;
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

export { CustomizedTextField, Linked, Forms, Container, Logo, SignUpButton };
