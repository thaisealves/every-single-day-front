import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContext from "../PageContext";
import {
  Container,
  Adding,
  CustomizedTextField,
  Cancel,
  Send,
} from "./NewTextStyle";
export default function NewDiary() {
  const [diary, setDiary] = useState("");
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
      <h1>Write here how was your day:</h1>
      <CustomizedTextField
        id="diary"
        label="Add a diary"
        multiline
        rows={4}
        defaultValue={diary}
        onChange={(e) => setDiary(e.target.value)}
        fullWidth={true}
        data-cy="newdiary"
      />
      <Adding>
        <Cancel data-cy="cancel" onClick={() => navigate("/diary")}>
          Cancel
        </Cancel>
        <Send
          data-cy="send"
          onClick={() => handleSend(diary, config, navigate)}
        >
          Send
        </Send>
      </Adding>
    </Container>
  );
}

async function handleSend(text, config, navigate) {
  const createdAt = dayjs().format("DD-MM-YYYY");
  const URL_API = "https://esd-back.onrender.com/diary";
  const body = {
    type: "diary",
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
