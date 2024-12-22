import { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getTodo = async () => {
      const res = await axios.get("http://127.0.0.1:3003/todo");
      console.log(res.data);
    };
    const getUser = async () => {
      const res = await axios.get("http://127.0.0.1:3003/user");
      console.log(res.data);
      setUsers(res.data);
    };
    getTodo();
    getUser();
  },[]);
  return (
    <div className="">
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.username}</h3>
            <p>age: {user.age}</p>
            <p>hobby: {user.hobbies.join(",")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Example;
