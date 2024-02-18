import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      setUser(data);
      alert('Login successful');
      setRedirect(true);
    } catch (error) {
      console.log(error)
      alert("Login failed");
    }
  }
  if(redirect){
    return <Navigate to={'/'} />
  }
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            name=""
            id=""
            placeholder={"your@email.com"}
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button className="primary">Login</button>
        </form>
        <div className="text-center text-gray-500 py-2">
          Dont have an account yet?{" "}
          <Link className="text-black underline" to={"/register"}>
            Register Now!
          </Link>
        </div>
      </div>
    </div>
  );
}


//ayegbami, ekolagba nur/pri school, through alagbado mm fillling station, alfa on tiro, 