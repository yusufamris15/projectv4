
import "./status.scss";
import axios from "axios";
import React, { useState } from "react";

const Status = () => {
  const [allValues, setAllValues] = useState({
    status: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { status } = allValues;
    axios({
      method: "POST",
      baseURL: "http://localhost:3005",
      url: "/posts",
      data: {
        status,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleChange = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-1">
      <div className="form-status">
        <form onSubmit={handleSubmit}>
          <label htmlFor="status">
            <textarea
              name="status"
              placeholder="What's on your mind?"
              id="status"
              value={allValues.status}
              onChange={handleChange}
              cols="83"
              rows="2"
            ></textarea>
            <br />
            <button type="submit">Post</button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Status;
