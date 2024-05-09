import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Loginpage = () => {
  const navigate = useNavigate()
  const [input, setinput] = useState({
    email: "",
    password: ""
  })
  const get = (i) => {
    setinput({ ...input, [i.target.name]: i.target.value })
  }
  const change = () => {
    navigate(input.email === "demo123@gmail.com" && input.password === "demo123" ? '/tables' : "")
  }
  return (
    <div className='formpage'>
      <div className='login'>
        <Form className='form'>
          <h1 className='formhead'>LOGIN</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className='formplaceholder' type="email" placeholder="Enter email" onChange={get} name="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className='formplaceholder' type="password" placeholder="Password" onChange={get} name="password" />
          </Form.Group>
          <div className='text-center'>
            <Button className='formbutton' type="submit" onClick={change}>
              Login
            </Button>
          </div>
        </Form>
      </div>
      <div className='demo'>
        <p>Email: demo123@gmail.com</p>
        <p>Password: demo123</p>
      </div>
    </div>
  )
}
export default Loginpage