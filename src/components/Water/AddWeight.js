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
export default function AddWeight() {
  const [weight, setWeight] = useState("");
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
      <h1>What's your current weight?</h1>
      <CustomizedTextField
        type="number"
        id="weight"
        label="Add current weight"
        defaultValue={weight}
        InputProps={{
          endAdornment: <InputAdornment position="end">kg</InputAdornment>,
        }}
        onChange={(e) => setWeight(e.target.value)}
        fullWidth={true}
        data-cy="addweight"
      />
      <Adding>
        <Cancel data-cy="cancel" onClick={() => navigate("/water")}>Cancel</Cancel>
        <Send data-cy="send" onClick={() => handleSend(weight, config, navigate)}>Send</Send>
      </Adding>
    </Container>
  );
}

async function handleSend(weight, config, navigate) {
  const createdAt = dayjs().format("DD-MM-YYYY");
  const URL_API = "http://localhost:4000/weight";
  const body = {
    weight: Number(weight),
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
