import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Modal, Nav, Navbar, Table } from 'react-bootstrap'
import { ImEye } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { samplecontext } from './App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosSearch } from "react-icons/io";

const Tables = () => {
  const { hide, sethide, setnum, product, setproduct, setinput, abc, setabc, data } = useContext(samplecontext)
  const search = (index) => {
    console.log(index.target.value);
    setproduct(data.filter((arg) =>
      (arg.title).toLowerCase().includes(index.target.value) ||
      arg.brand.toLowerCase().includes(index.target.value) ||
      arg.category.toLowerCase().includes(index.target.value)
    ))
  }

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = (arg) => {
    setShow2(true);
    console.log(arg);
    setabc(arg)
  }

  const deleterow = () => {
    toast.success("Product deleted succesfully.",
      {
        autoClose: 2000,
      })
    setproduct(product.filter((index) => index !== abc))
    console.log(abc);
    setShow2(false)
  }

  const addproduct = () => {
    setnum("")
    setinput("")
  }
  const edit = (i) => {
    setnum(i)
    setinput({
      id: i.id,
      title: i.title,
      brand: i.brand,
      category: i.category
    })
  }
  const get = () => {
    sethide(false)
  }
  useEffect(() => {
    sethide(true)
  })

  const [values, setvalues] = useState();
  const [title, settitle] = useState([]);
  const [brand, setbrand] = useState([]);
  const [image, setimage] = useState([]);
  const [detail, setdetail] = useState([]);
  const [price, setprice] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (i) => {
    setShow(true);
    settitle(i.title);
    setbrand(i.brand);
    setimage(i.thumbnail);
    setdetail(i.description);
    setprice(i.price);
    setvalues(i.rating);
  }

  return (
    <div>
      <Navbar expand="lg" className="navbar">
        <Container className='navcontainer'>
          <Navbar.Brand className='navtitle ' > <b>MANAGE PRODUCTS</b>  </Navbar.Brand>
          <Nav className='navinput ' >
            <IoIosSearch className='searchicon ' />
            <input
              type="search"
              placeholder='Search Products'
              className='search '

              name="inputvalue"
              onChange={search}
            />
          </Nav>
          <Link to={"/form"}>
            <button className='addproduct' onClick={addproduct} >Add New Products</button>
          </Link>
        </Container>
      </Navbar>

      {hide === true ? <Table bordered className='table'>
        <thead>
          <tr >
            <th style={{ textAlign: "center" }} >NO</th>
            <th>Product</th>
            <th>Brand</th>
            <th>Category</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        {
          product.map((i) => {
            return (<tbody className='tablebody' key={i.id}>
              <tr className='tablerow' >
                <td style={{ textAlign: "center" }}>{i.id}</td>
                <td>{i.title}</td>
                <td>{i.brand}</td>
                <td>{i.category}</td>
                <td style={{ textAlign: "center" }}>
                  <ImEye onClick={() => handleShow(i)} className='viewicon' />
                  <Link to={"/form"} onClick={get}>
                    <FaEdit className='editicon' onClick={() => edit(i)} />
                  </Link>
                  <MdDelete className='deleteicon' onClick={() => handleShow2(i)} /></td>
              </tr>
            </tbody>
            )
          })
        }
      </Table> : ""}
      {/* modal for view button */}
      <>
        <Modal className='viewmodal' show={show} onHide={handleClose}>
          <img src={image} alt="" height="200px" />
          <Modal.Title className='ms-4'>{brand} {title}</Modal.Title>
          <p className='ms-4'>{detail} </p>
          <p className='ms-4'>Price:${price}</p>
          <Box sx={{ '& > legend': { mt: 2 }, }}>
            <Rating className='ms-3' value={values} readOnly></Rating>
          </Box>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      {/* modal for delete button */}
      <>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure want to delete the product ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Cancel
            </Button>
            <Button className='formbutton' onClick={deleterow}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer />
      </>
    </div>
  )
}
export default Tables