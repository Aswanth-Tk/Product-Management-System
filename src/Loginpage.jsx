import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Loginpage = () => {
  const [input, setinput] = useState({
    email: "",
    password: ""
  })
  const notify=()=>{
    toast.error((input.email==="" || input.password===""?"required fields are empty":"email or password is incorrect"),
    {
      autoClose: 2000,
    })
    }
  const get = (i) => {
    setinput({ ...input, [i.target.name]: i.target.value })
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
            <Link to={ input.email === "demo123@gmail.com" && input.password === "demo123" ?'/tables':""}>
            <Button className='formbutton' type="submit" onClick={notify} >
              Login
            </Button>
            </Link>
          </div>
        </Form>
      </div>
      <div className='demo'>
        <p>Email: demo123@gmail.com</p>
        <p>Password: demo123</p>
      </div>
      <ToastContainer />
    </div>
  )
}
export default Loginpage