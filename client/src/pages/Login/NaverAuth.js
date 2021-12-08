import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { naverSignIn } from "../../apis/auth";

export default function NaverAuth() {
  const location = useLocation();

  useEffect(() => {
    console.log(
      "location",
      location.pathname.split("/")[1],
      location.search.split("&")[0].split("=")[1],
      location.search.split("&")[1].split("=")[1]
    );
    naverSignIn(
      location.search.split("&")[0].split("=")[1],
      location.search.split("&")[1].split("=")[1]
    ).then((res)=>console.log(res.data));
  }, []);
  return null;
}