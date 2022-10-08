import styled from "styled-components";

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

  h2 {
    color: #355326;
    font-family: "Raleway", sans-serif;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    p {
      font-weight: 600;
      font-style: italic;
    }
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
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
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
  }
  @media (min-width: 980px) {
    margin: 230px 0 100px 0;
  }
`;
const SignUpButton = styled.button`
  background-color: #aad4c1;
  color: #f9f8f6;
`;
const LoginButton = styled.button`
  background-color: #bad5ad;
  color: #355326;
`;

export { Container, LoginButton, SignUpButton, Buttons };
