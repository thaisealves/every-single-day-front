import styled from "styled-components";
import { TextField } from "@mui/material";
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
const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 100px 30px;
`;
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
export { Container, CustomizedTextField, Cancel, Send, Adding };
