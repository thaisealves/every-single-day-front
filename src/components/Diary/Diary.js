import { Container, Texts, Box } from "./DiaryStyle";
import { useContext, useEffect, useState } from "react";
import PageContext from "../PageContext";
import { SpeedDialAction, SpeedDial, SpeedDialIcon } from "@mui/material";
import dayjs from "dayjs";
import { BiPencil } from "react-icons/bi";
import { GiArrowScope } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Diary() {
  const { setPageName } = useContext(PageContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      alert("You must login");
      navigate("/");
    }
  }, [token]);
  useEffect(() => {
    setPageName("Diary");
  }, []);

  const [open, setOpen] = useState(false);
  const [diaries, setDiaries] = useState([]);

  const date = dayjs();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(async () => {
    const URL_API = `https://every-single-day.herokuapp.com/diary/${date.format("DD-MM-YYYY")}`;
    try {
      const response = await axios.get(URL_API, config);
      setDiaries(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const dials = [
    {
      icon: <BiPencil />,
      name: "Diary",
      type: "diary",
    },
    {
      icon: <GiArrowScope />,
      name: "Plans",
      type: "plans",
    },
    ,
  ];

  return (
    <Container>
      <h1>{date.format("DD/MM/YYYY, dddd")}</h1>
      {diaries.length === 0 ? (
        <h2>You don't have Diary or Plans for today</h2>
      ) : (
        diaries.map((el) =>
          el.type === "diary" ? (
            <Texts data-cy="text">
              <h1>Diary</h1> <Box>{el.text}</Box>
            </Texts>
          ) : (
            <Texts data-cy="text">
              <h1>Plans</h1>
              <Box>{el.text}</Box>
            </Texts>
          )
        )
      )}

      <SpeedDial
        ariaLabel="Adding a vision"
        sx={{ position: "fixed", bottom: 65, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        {dials.map((el) => (
          <SpeedDialAction
            icon={el.icon}
            tooltipTitle={el.name}
            tooltipOpen
            key={el.type}
            id={el.type}
            data-cy={el.type}
            onClick={() => handleAction(el.type, navigate)}
          />
        ))}
      </SpeedDial>
    </Container>
  );
}

function handleAction(type, navigate) {
  if (type === "plans") {
    navigate("/newplan");
  } else if (type === "diary") {
    navigate("/newdiary");
  }
}
