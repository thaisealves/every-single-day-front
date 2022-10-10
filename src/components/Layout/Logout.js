import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageContext from "../PageContext";
import { useContext, useEffect } from "react";
export default function Logout() {
  const navigate = useNavigate();
  const { setPageName } = useContext(PageContext);
  useEffect(() => {
    setPageName("Logout");
  }, []);
  return (
    <Container>
      <button onClick={() => handleLogOut(navigate)}>Logout</button>
    </Container>
  );
}
function handleLogOut(navigate) {
  localStorage.clear();
  navigate("/login");
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
 
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 30%;
    height: 50px;
    background-color: #aad4c1;
    border: none;
    border-radius: 5px;
    color: #40677b;
  }
`;
