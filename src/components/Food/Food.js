import { Container, BorderLinearProgress, Amount } from "./FoodStyle";
import { useContext, useEffect, useState } from "react";
import PageContext from "../PageContext";
import { SpeedDialAction, SpeedDial, SpeedDialIcon } from "@mui/material";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { MdOutlineFoodBank } from "react-icons/md";
import { AiOutlineFieldNumber } from "react-icons/ai";
import axios from "axios";
export default function Food() {
  const { setPageName } = useContext(PageContext);
  useEffect(() => {
    setPageName("Food Plan");
  }, []);

  const [open, setOpen] = useState(false);
  const [food, setFood] = useState([]);
  const [number, setNumber] = useState([]);

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
    const URL_API_FOOD = `https://esd-back.onrender.com/food/${date.format(
      "DD-MM-YYYY"
    )}`;
    try {
      const responseFood = await axios.get(URL_API_FOOD, config);
      setFood(responseFood.data);
    } catch (error) {
      console.log(error);
      setFood(0);
    }
  }, []);

  useEffect(async () => {
    const URL_API_NUMBER = `https://esd-back.onrender.com/number`;
    try {
      const responsenumber = await axios.get(URL_API_NUMBER, config);
      setNumber(responsenumber.data[0].number);
    } catch (error) {
      console.log(error);
      setNumber(null);
    }
  }, []);
  const dials = [
    {
      icon: <AiOutlineFieldNumber />,
      name: "Nº of meals",
      type: "number",
    },
    {
      icon: <MdOutlineFoodBank />,
      name: "Meal",
      type: "meal",
    },
    ,
  ];
  const percentage = (food / number) * 100;
  return (
    <Container>
      <h1>{date.format("DD/MM/YYYY, dddd")}</h1>
      {number ? (
        <>
          <h1>You've ate {food}/{number} number</h1>
          <BorderLinearProgress
            color="success"
            variant="determinate"
            value={percentage > 100 ? 100 : percentage}
            data-cy="progress"
          />
        </>
      ) : null}
      {number ? (
        <Amount data-cy="amount">
          <h1>
            Ideal amount of food:
            <span> {(number * 0.05).toFixed(2)}L/Day </span>
          </h1>
          <h1>
            Min. amount of food:<span> {(number * 0.03).toFixed(2)}L/Day</span>
          </h1>
          {food ? (
            <>
              <h1>
                You've drinked: <span> {food}L</span>
              </h1>
              <BorderLinearProgress
                color="success"
                variant="determinate"
                value={percentage}
                data-cy="progress"
              />
            </>
          ) : null}
        </Amount>
      ) : (
        <Amount>
          {food ? (
            <h1>
              You've drinked: <span> {food}</span>
            </h1>
          ) : null}
          <h1>Write down your number here!</h1>
        </Amount>
      )}
      <SpeedDial
        ariaLabel="Adding a meal"
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
  if (type === "meal") {
    navigate("/addfood");
  } else if (type === "number") {
    navigate("/numbernum");
  }
}
