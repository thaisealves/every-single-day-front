import styled from "styled-components";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

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

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  borderRadius: 5,
  margin: 20,
}));

const Amount = styled.div`
  margin-top: 10vh;
  h1 {
    color: #355326;
    margin: 0 0 10px 20px;
    text-align: start;
    font-weight: 700;
  }
  span {
    font-weight: 400;
  }
  .MuiLinearProgress-root {
    height: 20px;
  }
`;
export { Container, BorderLinearProgress, Amount };
