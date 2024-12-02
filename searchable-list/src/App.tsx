import { useEffect, useState } from "react";

interface User {
  firstName: string;
  // Add other fields as necessary
}

export default function App() {
  const [input, setInput] = useState("");

  const [userData, setUserData] = useState<User[]>([]);
  const [filterData, setFilterData] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.users);
        setFilterData(data.users);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const data = userData.filter((user) =>
      user.firstName.toLowerCase().includes(input.toLowerCase())
    );
    setFilterData(data);
  }, [input, userData]);

  return (
    <div className="App">
      <input
        value={input}
        placeholder="input name for filtering..."
        onChange={(e) => setInput(e.target.value)}
      />
      <ul className="list">
        {filterData.map((user) => (
          <li>{user.firstName} </li>
        ))}
      </ul>
    </div>
  );
}