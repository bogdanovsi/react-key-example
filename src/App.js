import { useEffect, useState } from "react";
import "./styles.css";

import userData from "./dataUsers";

import User from "./user";

export default function App() {
  let [users, setUsers] = useState(userData);

  useEffect(() => {
    setTimeout(() => {
      users.splice(1, 1);
      setUsers([...users]);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <User users={users} />
      <User users={users} withoutKey={true} />
    </div>
  );
}
