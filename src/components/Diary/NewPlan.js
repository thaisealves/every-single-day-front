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
} from "./NewTextStyle";
import PageContext from "../PageContext";
export default function NewPlan() {
  const [plan, setPlan] = useState("");
  const { setPageName } = useContext(PageContext);
  const date = dayjs().format("DD/MM/YYYY, dddd");
  const navigate = useNavigate();
  useEffect(() => {
    setPageName("Diary");
  }, []);
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    if (!token) {
      alert("You must login")
      navigate("/");
    }
  }, [token]);
  return (
    <Container>
      <h2>{date}</h2>
      <h1>
        What are the things you want <br /> to increase 1% tomorrow?
      </h1>
      <CustomizedTextField
        id="plan"
        label="Add a plan"
        multiline
        rows={4}
        defaultValue={plan}
        onChange={(e) => setPlan(e.target.value)}
        fullWidth={true}
        data-cy="newplan"
      />
      <Adding>
        <Cancel data-cy="cancel" onClick={() => navigate("/diary")}>
          Cancel
        </Cancel>
        <Send data-cy="send" onClick={() => handleSend(plan, config, navigate)}>
          Send
        </Send>
      </Adding>
    </Container>
  );
}

async function handleSend(text, config, navigate) {
  const createdAt = dayjs().format("DD-MM-YYYY");
  const URL_API = "http://localhost:4000/diary";
  const body = {
    type: "plans",
    text,
    createdAt,
  };
  try {
    await axios.post(URL_API, body, config);
    navigate("/diary");
  } catch (error) {
    alert(error.response.data);
    console.log(error);
    navigate("/diary");
  }
}
