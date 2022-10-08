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
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
`;

const Happy = styled(CgSmileMouthOpen)`
  color: #355326;
  font-size: 56px;
  background-color: #6868682a;
  border-radius: 5px;
`;
const Good = styled(CgSmile)`
  color: #7c9982;
  font-size: 56px;
  background-color: #6868682a;
  border-radius: 5px;
`;
const Average = styled(CgSmileNone)`
  color: #d6ab7e;
  font-size: 56px;
  background-color: #6868682a;
  border-radius: 5px;
`;
const Bad = styled(CgSmileSad)`
  color: #d18a39;
  font-size: 56px;
  background-color: #6868682a;
  border-radius: 5px;
`;
const Awful = styled(IoSadOutline)`
  color: #b39d96;
  font-size: 56px;
  background-color: #6868682a;
  border-radius: 5px;
`;

export { Container, Mood, Awful, Bad, Average, Good, Happy };
