import { useContext, useEffect, useState } from "react";
import PageContext from "../PageContext";
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from "@mui/material";
import { HiOutlinePhotograph } from "react-icons/hi";
import {
  Container,
  Mood,
  Awful,
  Bad,
  Average,
  Good,
  Happy,
  Pictures,
} from "./HomeStyle";
import dayjs from "dayjs";
import axios from "axios";
export default function Home() {
  const { setPageName } = useContext(PageContext);
  useEffect(() => {
    setPageName("Vision Board");
  }, []);
  const [open, setOpen] = useState(false);
  const [visions, setVisions] = useState([]);
  const token = localStorage.getItem("token");
  const date = dayjs();
  const URL_VISION_POST = "http://localhost:4000/vision";
  const URL_VISION_GET = "http://localhost:4000/visions";
  const URL_MOOD = "http://localhost:4000/mood";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(async () => {
    const response = await axios.get(URL_VISION_GET, config);
    setVisions(response.data);
  }, []);

  return (
    <Container>
      <Mood>
        <Happy />
        <Good />
        <Average />
        <Bad />
        <Awful />
      </Mood>
      {visions.length > 0 ? (
        <Pictures></Pictures>
      ) : (
        <div>
          You didn’t make your
          <br />
          vision board yet :(
          <br />
          Put here a image of some things
          <br />
          you dream of conquering on life!
        </div>
      )}
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
