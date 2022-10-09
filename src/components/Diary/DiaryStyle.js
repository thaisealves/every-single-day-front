import styled from "styled-components";

const Container = styled.div`
  margin: 70px 0;
  h1 {
    text-align: center;
    color: #40677b;
    font-family: "Coustard";
  }
  h2 {
    text-align: center;
    color: #355326;
    font-family: "Coustard";
    margin-top: 20vh;
  }
  .MuiSpeedDial-root button {
    background-color: #7c9982;
  }
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin: 20px;
    color: #355326;
    font-weight: 700;
    font-family: "Raleway";
    text-align: start;
    width: 80%;
  }
`;

const Box = styled.div`
  box-sizing: border-box;
  padding: 10px;
  background-color: #f9fff5;
  width: 80%;
  min-height: 30vh;
  border: 1px solid #bad5ad;
  border-radius: 6px;
  text-align: start;
`;
export { Container, Texts, Box };
