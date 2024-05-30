import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import { samplecontext } from './App'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Formpage = () => {
  const { currentproduct, input, setinput, product, setproduct, setdata } = useContext(samplecontext)
  const navigate = useNavigate();
  const notify = () => {
    const update = product.map((index) => {
      if (index === currentproduct) {
        return input
      }
      else { return index }
    })
    setproduct((currentproduct === "" && input !== "" ? [...product, input] : update))
    setdata((currentproduct === "" && input !== "" ? [...product, input] : update))
    input !== "" ?
      toast.success((currentproduct === "" && input !== "" ? "product created successfully" : "product edited successfully"),
        {
          autoClose: 2000,
          theme: "dark",
        }) :
      toast.error("all fields are empty",
        {
          autoClose: 2000,
        })
    setTimeout(() => {
      navigate(input !== "" ? '/tables' :
        "")
    }, 2500)
  }



  const change = (i) => {
    console.log({ ...input, [i.target.name]: i.target.value });
    setinput({ ...input, [i.target.name]: i.target.value });
  }

  return (
    <div className='formpage'>
      <div className='p-5'>
        <Form className='form'   >
          <h3 className='formhead'>{currentproduct === "" ? "Enter product details" : "Edit product details"}</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number</Form.Label>
            <Form.Control className='formplaceholder' type="number" defaultValue={currentproduct.id} onChange={change} name="id" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Product</Form.Label>
            <Form.Control className='formplaceholder' type="text" defaultValue={currentproduct.title} onChange={change} name="title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Category</Form.Label>
            <Form.Control className='formplaceholder' type="text" defaultValue={currentproduct.category} onChange={change} name="category" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price</Form.Label>
            <Form.Control className='formplaceholder' type="text" defaultValue={currentproduct.price} onChange={change} name="price" />
          </Form.Group>
          <div className='text-center' >
            <Button className='formbutton ' onClick={notify} >
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