import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration Successful, you can proceed to login");
    } catch (error) {
      alert("Registration failed, try again later :(");
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-32">
        <h1 className="text-4xl text-center">Register</h1>
        <form className="max-w-md mx-auto " onSubmit={registerUser}>
          <input
            type="text"
            name=""
            id=""
            placeholder={"John"}
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
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
          <button className="primary">Register</button>
        </form>
        <div className="text-center text-gray-500 py-2">
          Already have an account?{" "}
          <Link className="text-black underline" to={"/register"}>
            Login!
          </Link>
        </div>
      </div>
    </div>
  );
}
