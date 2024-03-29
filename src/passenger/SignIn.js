import React, { useState } from "react";
import { Card, Form, Button, FormText } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function sendPassengerLoginRequest() {
    const reqBody = {
      email: userName,
      password: password,
    };

    axios
      .post("http://localhost:8080/api/v2/open/passenger/login", reqBody)
      .then((r) => {
        console.log(r);
        if (r?.data?.success === true) {
          localStorage.setItem("token", r?.data?.response?.token);
          navigate("/passenger/profile");
        } else {
          alert("Your given email or password is wrong");
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }

  const backgroundStyle = {
    background: "#17134526",
    backgroundImage:
      "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
    height: "560px",
    backgroundSize: "cover",
    marginTop: "50px",
  }

  return (
    <>
      <div  className="p-5 align-items-md-center" style={backgroundStyle} >
        <Card className="p-5" style={{ background: "rgb(255 255 255 / 51%)", maxWidth: "350px" }} >
          <Form>
            <FormText>
              <h3 className="text-center mb-5 text-primary">Sign In Now</h3>
            </FormText>

            <Form.Group controlId="userName" className="mt-4">
              <Form.Label>Email</Form.Label>
              <Form.Control required  type="email" value={userName} onChange={(event) => setUserName(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="password" className="mt-4">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="text"  value={password} onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>

            <Form.Group>
              <Button type="button" className="w-100 mt-5" onClick={sendPassengerLoginRequest} > Sign In </Button>
            </Form.Group>
          </Form>
        </Card>
      </div>
    </>
  );
}
