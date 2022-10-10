import { TextField } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  margin: 70px 20px;
  h1 {
    color: #355326;
    font-weight: 700;
    text-align: center;
    margin-bottom: 15px;
  }
  h2 {
    text-align: center;
    color: #40677b;
    font-family: "Coustard";
    margin-bottom: 20px;
  }
`;
const CustomizedTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#AAD4C1",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#AAD4C1",
    },
    "&:hover fieldset": {
      borderColor: "#AAD4C1",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#AAD4C1",
    },
  },
});

const Adding = styled.div`
  text-align: end;
  margin: 10px 0;
  span {
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    &:hover {
      cursor: pointer;
    }
  }
`;
const Cancel = styled.span`
  color: #40677b;
`;
const Send = styled.span`
  color: #355326;
  margin-left: 15px;
`;

export { Container, Adding, CustomizedTextField, Cancel, Send };

