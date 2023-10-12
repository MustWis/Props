import { useEffect, useState } from "react";
import UserInfo from "../UserInfo/UserInfo";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const writeUsername = () => {
    console.log(username);
  };

  return (
    <div>
      <div>Kullanıcı Adı:</div>
      <input onChange={(event) => setUsername(event.target.value)}></input>
      <div>Şifre:</div>
      <input
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      ></input>
      <div>
        <button className="LoginButton">Giriş</button>
      </div>
      <UserInfo
        username={username}
        password={password}
        writeUsername={writeUsername}
      />
    </div>
  );
};
export default LoginForm;
