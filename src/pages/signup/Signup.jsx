// import React, { Component } from "react";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.scss";

import { useHistory } from "react-router-dom";

const Signup = () => {
  // destructure ARRAY
  const [allValues, setAllValues] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
  });

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // destructure OBJECT
    const { name, email, password, date } = allValues;
    axios({
      method: "POST",
      baseURL: "http://localhost:3005",
      url: "/users",
      data: {
        name,
        email,
        password,
        date,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    history.push("/profil");
  };

  const handleChange = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup">
      <div className="signup-form">
        <h1>Create your account</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Your name.."
            id="name"
            value={allValues.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            value={allValues.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={allValues.password}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="date"> Date of birth: </label>
          <input
            type="date"
            name="date"
            id="date"
            value={allValues.date}
            onChange={handleChange}
          />
          <br />
          <div className="button-signup">
            <button type="submit">SUBMIT</button>
            <br />
            {/* <Link to="/profil">
                <button type="submit">SUBMIT</button>
                <br />
              </Link> */}
            <Link to="/">
              <button type="button">HOME</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// import React, { Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import "./design/signup.css";

// class Signup extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       password: "",
//       date: "",
//     };
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     const { name, email, password, date } = this.state;
//     axios({
//       method: "POST",
//       baseURL: "http://localhost:3005",
//       url: "/users",
//       data: {
//         name,
//         email,
//         password,
//         date,
//       },
//     })
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     this.props.history.push("/profil");
//   };

//   handleChange = (event) => {
//     const { value, name } = event.target;
//     // console.log({ value, name });
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div className="signup">
//         <div className="signup-form">
//           <h1>Create your account</h1>
//           <form onSubmit={(event) => this.handleSubmit(event)}>
//             <label htmlFor="name">Name: </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your name.."
//               id=""
//               value={this.state.name}
//               onChange={(event) => this.handleChange(event)}
//             />
//             <br />
//             <label htmlFor="email">Email: </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               id=""
//               value={this.state.email}
//               onChange={(event) => this.handleChange(event)}
//             />
//             <br />
//             <label htmlFor="password">Password: </label>
//             <input
//               type="password"
//               name="password"
//               id=""
//               value={this.state.password}
//               onChange={(event) => this.handleChange(event)}
//             />
//             <br />
//             <label htmlFor="date"> Date of birth: </label>
//             <input
//               type="date"
//               name="date"
//               id=""
//               value={this.state.date}
//               onChange={(event) => this.handleChange(event)}
//             />
//             <br />
//             <div className="button-signup">
//               <button type="submit">SUBMIT</button>
//               <br />
//               {/* <Link to="/profil">
//                 <button type="submit">SUBMIT</button>
//                 <br />
//               </Link> */}
//               <Link to="/">
//                 <button type="button">HOME</button>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Signup;
