import styled from "styled-components";
import { BsGrid1X2 } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { MdOutlineWaterDrop, MdOutlineRestaurant } from "react-icons/md";
import { TbNotebook } from "react-icons/tb";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/login" ||
    window.location.pathname === "/signup"
  ) {
    return null;
  }
  return (
    <IconContext.Provider value={{ color: "#355326", size: "20px" }}>
      <Container>
        <Link to={"/exercises"}>
          <CgGym />
        </Link>
        <Link to={"/water"}>
          <MdOutlineWaterDrop />
        </Link>
        <Link to={"/home"}>
          <BsGrid1X2 />
        </Link>
        <Link to={"/diary"}>
          <TbNotebook />
        </Link>
        <Link to={"/food"}>
          <MdOutlineRestaurant />
        </Link>
      </Container>
    </IconContext.Provider>
  );
}

const Container = styled.div`
  background-color: #aad4c1;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  box-sizing: border-box;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.103);
  position: fixed;
  bottom: 0;
  left: 0;
  img {
    height: 40px;
  }
  h1 {
    font-weight: 400;
    font-size: 18px;
    font-family: "Coustard", serif;
    color: #40677b;
  }
`;
