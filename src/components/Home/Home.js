import { useContext } from "react";
import PageContext from "../PageContext";

export default function Home() {
  const { setPageName } = useContext(PageContext);
  // setPageName("Vision Board");
  return <div>Home</div>;
}
