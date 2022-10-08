import { useContext, useEffect, useState } from "react";
import PageContext from "../PageContext";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import { HiOutlinePhotograph } from "react-icons/hi";
import styled from "styled-components";
export default function Home() {
  const { setPageName } = useContext(PageContext);
  useEffect(() => {
    setPageName("Vision Board");
  }, []);
  const [open, setOpen] = useState(false);

  return (
    <Container>
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
  .MuiSpeedDial-root button{
  background-color: #7C9982;
  }
`;
