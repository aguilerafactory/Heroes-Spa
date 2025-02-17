import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";

export const LoginPage = () => {

  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  

  const handleLogin = () => {
    console.log(user);
    navigate('/', { replace: true });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr/>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  )
}
