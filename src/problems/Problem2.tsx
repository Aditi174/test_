import React, { useState } from "react";

function Problem() {
  const [randomuser, setRandomUser] = useState<any[]>([]);

  async function randomUser() {
    const response = await fetch(
      `https://swapi.dev/api/people/${Math.floor(Math.random() * 10) + 1}`
    );
    const data = await response.json();
    console.log(data);
    setRandomUser((prevUsers) => [...prevUsers, data]);
  }

  const handleDelete = (index: number) => {
    const updatedUsers = randomuser.filter((_, idx) => idx !== index);
    setRandomUser(updatedUsers);
  };

  return (
    <div
      style={{
        border: "2px solid black",
        // padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "50%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "centre",
          flexDirection: "column",
          width: "20%",
          padding: "10px",
        }}
      >
        <button onClick={randomUser}>Add Record</button>
        <div>Name</div>
      </div>
      <div>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "space-between",
          }}
        >
          {randomuser.map((user: any, index: number) => (
            <li key={index}>
              {user.name}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Problem;
