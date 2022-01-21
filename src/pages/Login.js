import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { useUser } from "../context/userContext";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function Login() {
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  const { setIsUser } = useUser();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
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
      // console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setIsUser(false);
  };
  // console.log(user);

  return (
    <div className="App">
      <div className="container-login">
        <div class="wrapper">
          <div class="container-title">
            <span>Admin Login</span>
          </div>
          <div class="container-row">
            <i>
              <UserOutlined />
            </i>
            <input
              placeholder="Email..."
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
          </div>
          <div class="container-row">
            <i>
              <LockOutlined />
            </i>
            <input
              type="password"
              placeholder="Password..."
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
          </div>
          <div className="login-button">
            <button onClick={login}> Login</button>
          </div>
          <div className="login-button">
            <button onClick={logout}> Log Out </button>
          </div>
          {user?.email && (
            <div className="logged-in"> {user?.email} in the house</div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Login;
