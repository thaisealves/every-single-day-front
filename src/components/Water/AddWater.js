import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Adding,
  CustomizedTextField,
  Cancel,
  Send,
} from "./WaterStyles";
import { InputAdornment } from "@mui/material";
import PageContext from "../PageContext";
export default function AddWater() {
  const [water, setWater] = useState("");
  const { setPageName } = useContext(PageContext);
  const date = dayjs().format("DD/MM/YYYY, dddd");
  const navigate = useNavigate();
  useEffect(() => {
    setPageName("Water");
  }, []);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return (
    <Container>
      <h2>{date}</h2>
      <h1>
        What is the amount of water <br /> you've drinked?
      </h1>
      <CustomizedTextField
        id="water"
        type="number"
        label="Add water drinked"
        defaultValue={water}
        InputProps={{
          endAdornment: <InputAdornment position="end">L</InputAdornment>,
        }}
        onChange={(e) => setWater(e.target.value)}
        fullWidth={true}
        data-cy="addwater"
      />
      <Adding>
        <Cancel data-cy="cancel" onClick={() => navigate("/water")}>
          Cancel
        </Cancel>
        <Send
          data-cy="send"
          onClick={() => handleSend(water, config, navigate)}
        >
          Send
        </Send>
      </Adding>
    </Container>
  );
}

async function handleSend(water, config, navigate) {
  const createdAt = dayjs().format("DD-MM-YYYY");
  const URL_API = "http://localhost:4000/water";
  const body = {
    waterQuantity: Number(water),
    createdAt,
  };
  try {
    await axios.post(URL_API, body, config);
    navigate("/water");
  } catch (error) {
    alert(error.response.data);
    console.log(error);
    navigate("/water");
  }
}
