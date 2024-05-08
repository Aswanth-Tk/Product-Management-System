import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { samplecontext } from './App'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Formpage = () => {
  const navigate = useNavigate();

  const notify = () => {
    const update = product.map((p) => {
      if (p === num) {
        return input
      }
      else { return p }
    })
    setproduct((num === "" && input !== "" ? [...product, input] : update))
    setdata((num === "" && input !== "" ? [...product, input] : update))
    input !== "" ?
      toast.success((num === "" && input !== "" ? "product created successfully" : "product edited successfully"),
        {
          autoClose: 2000,
          theme: "dark",
        }) :
      toast.error("all fields are empty",
        {
          autoClose: 2000,
        })
    setTimeout(() => {
      navigate(input !== "" ? '/' :
        "")
    }, 2500)
  }

  const example = useContext(samplecontext)
  const { num, input, setinput, product, setproduct, setdata } = example
  const change = (i) => {
    console.log({ ...input, [i.target.name]: i.target.value });
    setinput({ ...input, [i.target.name]: i.target.value });
  }

  return (
    <div className='formpage'>
      <div className='p-5'>
        <Form className='form'   >
          <h3 className='formhead'>{num === "" ? "Enter product details" : "Edit product details"}</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number</Form.Label>
            <Form.Control className='formplaceholder' type="number" defaultValue={num.id} onChange={change} name="id" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Product</Form.Label>
            <Form.Control className='formplaceholder' type="text" defaultValue={num.title} onChange={change} name="title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Brand</Form.Label>
            <Form.Control className='formplaceholder' type="text" defaultValue={num.brand} onChange={change} name="brand" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Category</Form.Label>
            <Form.Control className='formplaceholder' type="text" defaultValue={num.category} onChange={change} name="category" />
          </Form.Group>
          <div className='text-center' >
            <Button className='formbutton' onClick={notify} >
              Submit
            </Button>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </div>
  )
}
export default Formpage