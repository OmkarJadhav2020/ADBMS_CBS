import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  });

  function handleDelete(id) {
    axios
      .delete("http://localhost:3000/deleteuser/" + id)
      .then((result) => window.location.reload())
      .catch((err) => console.log(err));
  }
  return (
    <div className="container">
      <table border={2} className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button>
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                  </button>
                  <button
                    onClick={(e) => handleDelete(user._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/create" className="btn btn-success">
        Add +
      </Link>
    </div>
  );
}
