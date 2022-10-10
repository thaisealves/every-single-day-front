import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  CustomizedTextField,
  Cancel,
  Send,
  Adding,
} from "./AddVisionStyle";

export default function AddVision() {
  const URL_VISION_POST = "http://localhost:4000/vision";
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    <Container>
      <CustomizedTextField
        label="Image Url"
        variant="outlined"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
        data-cy="newVision"
      />
      <Adding>
        <Cancel onClick={() => navigate("/home")} data-cy="cancel">
          Cancel
        </Cancel>
        <Send
          onClick={() => handleSend(URL_VISION_POST, image, config, setImage)}
          data-cy="send"
        >
          Send
        </Send>
      </Adding>
    </Container>
  );
}

async function handleSend(URL_VISION_POST, image, config, setImage) {
  const body = { image };
  try {
    await axios.post(URL_VISION_POST, body, config);
    setImage("");
  } catch (err) {
    alert(`${err.response.data}`);
    setImage("");
  }
}
