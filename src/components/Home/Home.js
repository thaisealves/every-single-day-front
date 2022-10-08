import { useContext, useEffect, useState } from "react";
import PageContext from "../PageContext";
import {
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  ImageListItem,
  ImageList,
} from "@mui/material";
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
  NoPicture,
} from "./HomeStyle";
import dayjs from "dayjs";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const { setPageName } = useContext(PageContext);
  const [open, setOpen] = useState(false);
  const [visions, setVisions] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const URL_VISION_GET = "http://localhost:4000/visions";
  const URL_MOOD = "http://localhost:4000/mood";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    setPageName("Vision Board");
  }, []);

  useEffect(async () => {
    const response = await axios.get(URL_VISION_GET, config);
    setVisions(response.data);
  }, []);

  return (
    <Container>
      <Mood>
        <h2>How was the average of today?</h2>
        <div>
          <Happy />
          <Good />
          <Average />
          <Bad />
          <Awful />
        </div>
      </Mood>
      {visions.length > 0 ? (
        <Pictures>
          <ImageList variant="masonry">
            {visions.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  src={`${item.image}`}
                  srcSet={`${item.image}`}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Pictures>
      ) : (
        <NoPicture>
          <h3>
            You didn’t make your
            <br />
            vision board yet :(
            <br />
            Put here the image of some things
            <br />
            you dream of conquering on life!
          </h3>
        </NoPicture>
      )}
      <SpeedDial
        ariaLabel="Adding a vision"
        sx={{ position: "fixed", bottom: 65, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <SpeedDialAction
          icon={<HiOutlinePhotograph />}
          tooltipTitle={"Vision"}
          tooltipOpen
          onClick={() => navigate("/vision")}
        />
      </SpeedDial>
    </Container>
  );
}
