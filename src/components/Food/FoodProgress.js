import styled from "styled-components";
import construction from "../../assets/images/construction.gif";
import { useContext, useEffect } from "react";
import PageContext from "../PageContext";
export default function Food() {
  const { setPageName } = useContext(PageContext);
  useEffect(() => {
    setPageName("Food Plan");
  }, []);
  return (
    <Container>
      <img src={construction} />;<h1>In progress</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: #40677b;
    font-size: 50px;
    font-weight: 600;
    font-style: italic;
  }
`;
