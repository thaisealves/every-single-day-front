import { Container, BorderLinearProgress, Amount } from "./MainWaterStyle";
import { useContext, useEffect, useState } from "react";
import PageContext from "../PageContext";
import { SpeedDialAction, SpeedDial, SpeedDialIcon } from "@mui/material";
import dayjs from "dayjs";
import { FaWeight } from "react-icons/fa";
import { GiWaterBottle } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Water() {
  const { setPageName } = useContext(PageContext);
  useEffect(() => {
    setPageName("Water");
  }, []);

  const [open, setOpen] = useState(false);
  const [water, setWater] = useState([]);
  const [weight, setWeight] = useState([]);

  const navigate = useNavigate();
  const date = dayjs();

  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    if (!token) {
      alert("You must login");
      navigate("/");
    }
  }, [token]);
  useEffect(async () => {
    const URL_API_WATER = `https://esd-back.onrender.com/water/${date.format(
      "DD-MM-YYYY"
    )}`;
    try {
      const responseWater = await axios.get(URL_API_WATER, config);
      setWater(responseWater.data.waterQuantity);
    } catch (error) {
      console.log(error);
      setWater(0);
    }
  }, []);

  useEffect(async () => {
    const URL_API_WEIGHT = `https://esd-back.onrender.com/weight`;
    try {
      const responseWeight = await axios.get(URL_API_WEIGHT, config);
      setWeight(responseWeight.data[0].weight);
    } catch (error) {
      console.log(error);
      setWeight(null);
    }
  }, []);
  const dials = [
    {
      icon: <FaWeight />,
      name: "Weight",
      type: "weight",
    },
    {
      icon: <GiWaterBottle />,
      name: "Water",
      type: "water",
    },
    ,
  ];
  const percentage = (water / (weight * 0.05)) * 100;
  return (
    <Container>
      <h1>{date.format("DD/MM/YYYY, dddd")}</h1>
      {weight ? (
        <Amount data-cy="amount">
          <h1>
            Ideal amount of Water:
            <span> {(weight * 0.05).toFixed(2)}L/Day </span>
          </h1>
          <h1>
            Min. amount of Water:<span> {(weight * 0.03).toFixed(2)}L/Day</span>
          </h1>
          {water ? (
            <>
              <h1>
                You've drinked: <span> {water}L</span>
              </h1>
              <BorderLinearProgress
                color="success"
                variant="determinate"
                value={percentage > 100 ? 100 : percentage}
                data-cy="progress"
              />
            </>
          ) : null}
        </Amount>
      ) : (
        <Amount>
          {water ? (
            <h1>
              You've drinked: <span> {water}L</span>
            </h1>
          ) : null}
          <h1>
            Set up your weight to see how much water you should be drinking
          </h1>
        </Amount>
      )}
      <SpeedDial
        ariaLabel="Adding an amount of water"
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
            onClick={() => handleAction(el.type, navigate)}
            data-cy={el.type}
          />
        ))}
      </SpeedDial>
    </Container>
  );
}

function handleAction(type, navigate) {
  if (type === "weight") {
    navigate("/addweight");
  } else if (type === "water") {
    navigate("/addwater");
  }
}
