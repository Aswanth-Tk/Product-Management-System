import { useEffect, useState } from 'react'
import { Container, Nav, Navbar, Table } from 'react-bootstrap'
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosSearch } from "react-icons/io";
import { getProducts } from '../api/products/GetProductsApi';
// import { getProducts } from '../api/GetProductsAPi';

const Tables = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(); // 👈 response here
        setProducts(response);
        console.log("products", response);
      } catch (err) {
        console.error(err);
      } finally {
        // setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const search = (index) => {
    console.log(index.target.value);
    // setproduct(data.filter((arg) =>
    //   (arg.title)?.toLowerCase().includes(index.target.value) ||
    //   arg.brand?.toLowerCase().includes(index.target.value) ||
    //   arg.category?.toLowerCase().includes(index.target.value)
    // ))
  }

  const addproduct = () => {
    navigate('/form')
  }

  const handleProductClick = (id) => {
    navigate(`/product-details/${id}`);
    console.log('row id', id);

  };

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



      {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, width:700 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: "center" }}> <b>ID</b></TableCell>
              <TableCell style={{ paddingLeft: "50px" }} align="left"> <b>Product</b></TableCell>
              <TableCell align="left"> <b>Category</b></TableCell>
              <TableCell align="left"> <b>Price</b></TableCell>
            </TableRow>
          </TableHead>

          {
            products.map((product) => {
              return (
                <TableBody className='tablebody'>

                  <TableRow className='tablerow'>
                    <TableCell
                    onClick={()=>handleProductClick(product._id)}
                    style={{ textAlign: "left", width:"200px", color:'green', cursor:'pointer' }} component="th" scope="row">
                      {product._id}
                    </TableCell>
                    <TableCell
                    style={{ paddingLeft: "50px" }} align="left">{product.name}</TableCell>
                    <TableCell align="left">{product.category?product.category:'-'}</TableCell>
                    <TableCell align="left">${product.price }</TableCell>
                  </TableRow>
                </TableBody>
              )
            })}
        </Table>
      </TableContainer> */}
      <div>
        <TableContainer
          component={Paper}
          style={{
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.06)',
            display:'flex', justifyContent:'center', alignItems:'center'
          }}
        >
          <Table
            size="small"
            aria-label="product table"
            style={{
              minWidth: '650px',
              width: '98%',
              marginTop:'20px',
              borderCollapse: 'separate',
              borderSpacing: '0',
            }}
          >
            <TableHead>
              <TableRow
                style={{
                  backgroundColor: '#f5f7fa',
                }}
              >
                <TableCell
                  style={{
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#444',
                  }}
                >
                  ID
                </TableCell>

                <TableCell
                  align="left"
                  style={{
                    paddingLeft: '50px',
                    fontWeight: '600',
                    color: '#444',
                  }}
                >
                  Product
                </TableCell>

                <TableCell
                  align="left"
                  style={{
                    fontWeight: '600',
                    color: '#444',
                  }}
                >
                  Category
                </TableCell>

                <TableCell
                  align="left"
                  style={{
                    fontWeight: '600',
                    color: '#444',
                  }}
                >
                  Price
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product._id}
                  onClick={() => handleProductClick(product._id)}
                  style={{
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = '#f9fbfd')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = 'transparent')
                  }
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{
                      textAlign: 'center',
                      maxWidth: '140px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      color: '#1ca79b',
                      fontWeight: '500',
                    }}
                  >
                    {product._id}
                  </TableCell>

                  <TableCell
                    align="left"
                    style={{
                      paddingLeft: '50px',
                      fontWeight: '500',
                    }}
                  >
                    {product.name}
                  </TableCell>

                  <TableCell
                    align="left"
                    style={{
                      color: '#666',
                    }}
                  >
                    {product.category ? product.category : '-'}
                  </TableCell>

                  <TableCell
                    align="left"
                    style={{
                      fontWeight: '600',
                    }}
                  >
                    ₹{product.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </div>


      <ToastContainer />
    </div>
  )
}
export default Tables