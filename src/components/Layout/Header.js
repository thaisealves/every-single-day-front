import styled from "styled-components";
import logo from "../../assets/images/target.png";
import { BiUser } from "react-icons/bi";
import PageContext from "../PageContext";
import { useContext } from "react";
export default function Header() {
  const { pageName } = useContext(PageContext);
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/login" ||
    window.location.pathname === "/signup"
  ) {
    return null;
  }
  return (
    <Container>
      <img src={logo} alt={"Logo"} title={"1%ESD"} />
      <h1>{pageName}</h1>
      <User />
    </Container>
  );
}

const Container = styled.div`
  background-color: #aad4c1;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.103);
  img {
    height: 40px;
  }
  h1{
    font-weight: 400;
    font-size: 18px;
    font-family: "Coustard", serif;
    color: #40677B;
  }
`;

const User = styled(BiUser)`
  color: #7c9982;
  font-size: 18px;
`;
