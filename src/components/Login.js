import React from "react";
import logo from "../assets/img/kairos.png";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";

const Login = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card col-12 col-sm-12 col-md-10 col-lg-8 rounded-0 p-0 mt-2 ">
          <Form floating>
            <div className="headerForm p-1 d-flex">
              <img
                alt="Kairos Tower"
                src={logo}
                style={{
                  height: 40,
                  width: 40,
                  marginRight: 5,
                }}
              />
              <h5 className="text text-align-center mt-2">Kairos Tower</h5>
            </div>
            <FormGroup className="p-2" floating>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
              />
              <Label for="exampleEmail">Correo electronico</Label>
            </FormGroup >
            <FormGroup  className="p-2" floating>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
              />
              <Label for="examplePassword">Contraseña</Label>
              <Button className="w-100 btn btn-dark mt-2">Confirmar</Button>
            </FormGroup>{" "}
           
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Login;
