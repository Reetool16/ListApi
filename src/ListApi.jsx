import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ListApi = () => {
  const [apiData, setApiData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((response) => {
      setApiData(response.data.data);
    });
  }, []);

  const handleRowClick = (user) => {
    navigate(`/user/${user.id}`, { state: { user } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email,
    };

    console.log(newUser);

    axios
      .post("https://reqres.in/api/users", newUser)
      .then((response) => {
        // Add new user to the state
        setApiData([...apiData, response.data]);
        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
      })
      .catch((error) => {
        console.error("There was an error creating the user!", error);
      });
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add User</button>
      </form>

      <h2>User List</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((item) => (
            <tr
              key={item.id}
              onClick={() => handleRowClick(item)}
              style={{ cursor: "pointer" }}
            >
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>
                <img
                  src={item.avatar}
                  alt={`${item.first_name}'s avatar`}
                  width="50"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListApi;
