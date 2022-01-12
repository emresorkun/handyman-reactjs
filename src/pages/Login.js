import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useUser } from "../context/userContext";

function Login() {
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  const { setIsUser } = useUser();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  console.log(user);
  onAuthStateChanged(auth, (currentUser) => {
    console.log("ex");
    setUser(currentUser);
    if (currentUser) {
      setIsUser(true);
    }
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setIsUser(false);
  };
  console.log(user);

  return (
    <div className="App">
      <div className="admin-login">
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button onClick={login}> Login</button>
        <h4> User Logged In: </h4>
        {user?.email}

        <button onClick={logout}> Sign Out </button>
      </div>
    </div>
  );
}
export default Login;
