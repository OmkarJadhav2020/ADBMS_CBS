import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
export default function UpdateUsers() {
  const { id } = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/getUser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch((err) => console.log(err));
  }, []);
  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/updateUser/"+id, { name, email, age })
      .then((result) => navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={Update}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter age"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
        <br />
        <br />
        <button className="btn btn-success">Update </button>
      </form>
    </div>
  );
}
