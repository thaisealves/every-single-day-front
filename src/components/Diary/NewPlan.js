import { TextField } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
export default function NewPlan() {
  const [plan, setPlan] = useState("");
  return (
    <Container>
      <TextField
        id="plan"
        label="Multiline"
        multiline
        rows={4}
        defaultValue={plan}
        onChange={(e)=> setPlan(e.target.value)}
      />
    </Container>
  );
}

const Container = styled.div``;
