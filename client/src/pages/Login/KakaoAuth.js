import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { kakaoSignIn } from "../../apis/auth"

export default function KakaoAuth() {
  const location = useLocation();

  useEffect(() => {
    console.log(
      "location",
      location.pathname.split("/")[1],
      location.search.split("=")[1]
    );
    kakaoSignIn(location.search.split("=")[1])
      .then((res)=>console.log(res.data));
  }, []);
  return null;
}