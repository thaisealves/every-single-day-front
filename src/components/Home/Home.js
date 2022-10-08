import { useContext, useEffect, useState } from "react";
import PageContext from "../PageContext";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import { HiOutlinePhotograph } from "react-icons/hi";
import { Container, Mood, Awful, Bad, Average, Good, Happy } from "./HomeStyle";
import dayjs from "dayjs";

export default function Home() {
  const { setPageName } = useContext(PageContext);
  useEffect(() => {
    setPageName("Vision Board");
  }, []);
  const [open, setOpen] = useState(false);
  const date = dayjs();
  
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
