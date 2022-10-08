import {
  CgSmileMouthOpen,
  CgSmileNone,
  CgSmileSad,
  CgSmile,
} from "react-icons/cg";
import { IoSadOutline } from "react-icons/io5";
import styled from "styled-components";

const Container = styled.div`
  margin: 59px 0;
  .MuiSpeedDial-root button {
    background-color: #7c9982;
  }
`;

const Mood = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  div {
    justify-content: space-between;
    display: flex;
  }
  h2 {
    color: #40677b;
    text-align: center;
    margin-bottom: 10px;
  }
  .MuiToggleButton-root {
    border: none;
  }
  
`;

const Happy = styled(CgSmileMouthOpen)`
  color: #355326;
  font-size: 56px;
  border-radius: 5px;
`;
const Good = styled(CgSmile)`
  color: #7c9982;
  font-size: 56px;
  border-radius: 5px;
`;
const Average = styled(CgSmileNone)`
  color: #d6ab7e;
  font-size: 56px;
  border-radius: 5px;
`;
const Bad = styled(CgSmileSad)`
  color: #d18a39;
  font-size: 56px;
  border-radius: 5px;
`;
const Awful = styled(IoSadOutline)`
  color: #b39d96;
  font-size: 56px;
  border-radius: 5px;
`;
const Pictures = styled.div`
  padding-bottom: 70px;
`;
const NoPicture = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50vh;
  h3 {
    width: 100%;
    color: #40677b;
    font-weight: 400;
    text-align: center;
  }
`;

export {
  Container,
  Mood,
  Awful,
  Bad,
  Average,
  Good,
  Happy,
  Pictures,
  NoPicture,
};
