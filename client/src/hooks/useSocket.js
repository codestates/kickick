import { useState } from "react"
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

export function useSocket() { 
  const [alarm, setAlarm] = useState([]);
  const socketClient = io("http://localhost:4000");
  const isLogin = useSelector((state) => state.login.isLogin);
  
  if (isLogin) {
    socketClient.on("connect", () => {
      console.log("connection server");
      socketClient.emit("signin", { username: isLogin.username });
    });

    socketClient.on("alarms", (data) => {
      console.log("난 알람이야", data);
      setAlarm([...data]);
    });
  }

  return [
    isLogin
      ? () => socketClient.emit("alarms", { username: isLogin.username })
      : () => null,
    alarm,
  ];
}