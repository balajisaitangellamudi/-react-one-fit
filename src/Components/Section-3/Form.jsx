import { useState } from "react";

function Form() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form>
      <div>
        <input
          type="text"
          onChange={handleUserNameChange}
          value={userName}
          placeholder="username"
        />
        <div>
          <input
            type="password"
            onChange={handlePasswordChange}
            value={password}
            placeholder="password"
          />
        </div>
      </div>
      <div className="justify-content-space-between">
        <button>Login</button>
        <button className="ms-2">Reset</button>
      </div>
    </form>
  );
}

export default Form;
