import { useContext, useEffect, useState } from "react";
import PageContext from "../PageContext";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import { HiOutlinePhotograph } from "react-icons/hi";
import {
  CgSmileMouthOpen,
  CgSmileNone,
  CgSmileSad,
  CgSmile,
} from "react-icons/cg";
import { IoSadOutline } from "react-icons/io5";
import styled from "styled-components";
export default function Home() {
  const { setPageName } = useContext(PageContext);
  useEffect(() => {
    setPageName("Vision Board");
  }, []);
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Mood>
        <Happy />
        <Good />
        <Average />
        <Bad />
        <Awful />
      </Mood>
      <SpeedDial
        ariaLabel="Adding a vision"
        sx={{ position: "absolute", bottom: 80, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <SpeedDialAction
          icon={<HiOutlinePhotograph />}
          tooltipTitle={"Vision"}
          tooltipOpen
        />
      </SpeedDial>
    </Container>
  );
}

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
`;
const Good = styled(CgSmile)`
  color: #7c9982;
  font-size: 56px;
`;
const Average = styled(CgSmileNone)`
  color: #d6ab7e;
  font-size: 56px;
`;
const Bad = styled(CgSmileSad)`
  color: #d18a39;
  font-size: 56px;
`;
const Awful = styled(IoSadOutline)`
  color: #b39d96;
  font-size: 56px;
`;
