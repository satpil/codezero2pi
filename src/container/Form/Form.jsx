import React from "react";
import Input from "../../component/Input/Input";
import "./Form.css";

function Landing() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [submit, setSubmit] = React.useState(false);

  return (
    <React.Fragment>
      <div className="form">
        <h1
          style={{
            fontSize: "35px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Form
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label for="fname">First Name</label>
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            changeHandler={(e) => setName(e.target.value)}
          />

          <label for="email">Email</label>
          <Input
            type="text"
            name="email"
            placeholder="Enter email"
            changeHandler={(e) => setEmail(e.target.value)}
            required
          />

          <label for="phone">Phone</label>
          <Input
            type="tel"
            name="phone"
            placeholder="Enter phone"
            changeHandler={(e) => setPhone(e.target.value)}
          />

          <label for="address">Address</label>
          <Input
            type="text"
            name="address"
            placeholder="Enter address"
            changeHandler={(e) => setAddress(e.target.value)}
          />
          <input type="submit" value="Submit" onClick={() => setSubmit(true)} />
        </form>
      </div>
      {submit && (
        <div className="form-res">
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>Phone: {phone}</div>
          <div>Address: {address}</div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Landing;
