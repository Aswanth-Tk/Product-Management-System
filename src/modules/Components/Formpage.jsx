import  { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createProduct } from '../api/products/CreateProductsApi';

const Formpage = () => {
  // const { currentproduct, product, setproduct, setdata } = useContext(samplecontext)
  const navigate = useNavigate();

  const [input, setinput] = useState(
    {
      name: "",
      category:'',
      price: "",
      description:''
    }
  )

  const handleSubmit = async () => {
  for (const [value] of Object.entries(input)) {
    if (!value || value.trim() === '') {
      toast.error('Please fill required fields');
      return;
    }

  // ✅ All fields valid
  // submit API call here
};

    const response = await createProduct(input)
    console.log('create api response', response);
    if (response.statusCode === 200 || response.statusCode === 201) {
      toast.success('Product created succesfully')
      setTimeout(() => navigate('/products'), 1500);
    } else {
      toast.error('Failed to create the product')
    }
  }

  const handleChange = (event) => {
    // console.log({ ...input, [event.target.name]: event.target.value });
    setinput({ ...input, [event.target.name]: event.target.value });
  }

  return (
    <div className='formpage'>
      <div className='p-5'>
        <Form className='form'   >
          <h3 className='formhead'>Enter product details</h3>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number</Form.Label>
            <Form.Control className='formplaceholder' type="number" onChange={handleChange} name="id" />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Product <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control className='formplaceholder' type="text" onChange={handleChange} name="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Category <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control className='formplaceholder' type="text" onChange={handleChange} name="category" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control className='formplaceholder' type="text" onChange={handleChange} name="price" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description <span style={{color:'red'}}>*</span></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="formplaceholder"
              onChange={handleChange}
              name="description"
            />
          </Form.Group>

          <div className='text-center' >
            <Button className='formbutton ' onClick={handleSubmit} >
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