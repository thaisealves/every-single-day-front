import { TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
export default function NewDiary() {
    const [diary, setDiary] = useState("")
  return (
    <Container>
      <TextField
        id="diary"
        label="Multiline"
        multiline
        rows={4}
        defaultValue={diary}
        onChange={(e)=> setDiary(e.target.value)}
      />
    </Container>
  );
}

const Container = styled.div`

`