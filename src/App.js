import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);
  // old method
  // useEffect(() => {
  //   const getUsers = () => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setusers(data))
  //       .catch((err) => console.log(err));
  //   };
  //   getUsers();
  //   setloading(false);
  //   console.log(users);
  // }, []);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(res);
        setusers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
    setloading(false);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        users.map((el) => (
          <div style={{ border: "1px solid black" }}>
            <h3>{el.name}</h3>
            <h3>{el.email}</h3>
            <h3>{el.address.street}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
