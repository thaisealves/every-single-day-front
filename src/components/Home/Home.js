import { useContext, useEffect, useState } from "react";
import PageContext from "../PageContext";
import {
  SpeedDial,
  SpeedDialIcon,
  SpeedDialAction,
  ImageListItem,
  ImageList,
  ToggleButtonGroup,
  ToggleButton,
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
  const [mood, setMood] = useState("");

  const token = localStorage.getItem("token");
  const date = dayjs();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      alert("You must login")
      navigate("/");
    }
  }, [token]);
  
  const URL_VISION_GET = "http://localhost:4000/visions";
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(async () => {
    const day = date.format("DD-MM-YYYY");
    const URL_MOOD = `http://localhost:4000/mood/${day}`;
    try {
      const response = await axios.get(URL_MOOD, config);
      setMood(response.data.mood);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setPageName("Vision Board");
  }, []);

  useEffect(async () => {
    const response = await axios.get(URL_VISION_GET, config);
    setVisions(response.data);
  }, []);

  const handleMood = async (event, newMood) => {
    const URL_MOOD = `http://localhost:4000/mood`;
    const createdAt = date.format("DD-MM-YYYY");

    const body = {
      mood: newMood,
      createdAt,
    };
    try {
      await axios.post(URL_MOOD, body, config);
    } catch (error) {
      console.log(error);
    }
    setMood(newMood);
  };

  return (
    <Container>
      <Mood>
        <h2>How was the average of today?</h2>
        <ToggleButtonGroup
          color="success"
          value={mood}
          exclusive
          onChange={handleMood}
          aria-label="Moods"
          data-cy="mood"
        >
          <ToggleButton data-cy="clickMood" value="happy" aria-label="happy">
            <Happy />
          </ToggleButton>
          <ToggleButton value="good" aria-label="good">
            <Good />
          </ToggleButton>
          <ToggleButton value="average" aria-label="average">
            <Average />
          </ToggleButton>
          <ToggleButton value="bad" aria-label="bad">
            <Bad />
          </ToggleButton>
          <ToggleButton value="awful" aria-label="awful">
            <Awful />
          </ToggleButton>
        </ToggleButtonGroup>
      </Mood>
      {visions.length > 0 ? (
        <Pictures data-cy="pictures">
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
        data-cy="speedDial"
      >
        <SpeedDialAction
          icon={<HiOutlinePhotograph />}
          tooltipTitle={"Vision"}
          tooltipOpen
          onClick={() => navigate("/vision")}
          data-cy="addPic"
        />
      </SpeedDial>
    </Container>
  );
}
