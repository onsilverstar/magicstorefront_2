import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

function Login() {
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  //const [user, setuser] = useState("")
  const handleChangePassword = (e)=> {
    e.preventDefault()
    setPassword(e.target.value);
  }

  const handleChangeEmail = (e)=> {
    e.preventDefault()
    setEmail(e.target.value);
  }
  const handleSubmit = () =>{
    const data = {"email": email, "password": password}
    fetch("http://44.212.67.79/login",
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data),
      config: {"credentials": true}
    }).then((data) => {
      let jsondata=data.json()
      return jsondata
  }
    ).then(data=>{
      if(data)
      console.log(data)
      localStorage.setItem("auth_token", data["access"])
    })
  }
    return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleChangeEmail} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handleChangePassword}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default Login;