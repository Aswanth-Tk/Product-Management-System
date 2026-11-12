import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProducts } from '../api/products/GetProductsApi';
import { deleteProduct } from '../api/products/DeleteProductApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = () => {

  const { id } = useParams();
  const [products, setProducts] = useState([])
  const navigate = useNavigate();
  useEffect(()=>{
    console.log('row id detail page', id);
    console.log('products detail page', products);
    
  },[products])
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(); // 👈 response here
        const product = response.find((item)=>item._id === id)

        setProducts(product);
        console.log("products",response);
        
      } catch (err) {
        console.error(err);
      } finally {
        // setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);

  const handleDeleteProduct =async (id)=>{

    const response = await deleteProduct(id) 
    console.log('delete api response',response);
    

    if (response.statusCode === 200 || response.statusCode === 201) {
      console.log('product response', response);
      toast.success('Product deleted succcesfully.')
      setTimeout(() => navigate('/products'), 1500);
      // navigate('/products')
    } else {
      toast.error('Failed to delete the product')
    }

  }
  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif' }}>
      <ToastContainer />
      
      {/* Breadcrumb */}
      <div style={{ marginBottom: '20px', fontSize: '14px', color: '#666' }}>
        <span onClick={()=>navigate('/products')} style={{ cursor: 'pointer', color: '#007bff' }}>Home</span>
        <span style={{ margin: '0 8px' }}>/</span>
        {/* <span style={{ cursor: 'pointer', color: '#007bff' }}>Products</span>
        <span style={{ margin: '0 8px' }}>/</span> */}
        <span style={{ color: '#000' }}>Product Details</span>
      </div>

      {/* Page Title */}
      <h2 style={{ marginBottom: '20px' }}>Product Details</h2>

      {/* Main Container */}
      <div
        style={{
          display: 'flex',
          gap: '24px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          padding: '20px',
        }}
      >
        {/* Left - Image */}
        <div
          style={{
            width: '300px',
            height: '300px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f9f9f9',
            fontSize: '14px',
            color: '#999',
          }}
        >
          Product Image
        </div>

        {/* Right - Details */}
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '10px' }}>{products?.name}</h3>

          <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
            ₹ 1,999
          </p>

          <p style={{ marginBottom: '12px', color: '#555' }}>
            Category: <strong>{products.category}</strong>
          </p>

          <p style={{ marginBottom: '12px', color: '#555' }}>
            Stock Status: <strong style={{ color: 'green' }}>In Stock</strong>
          </p>

          <p style={{ marginBottom: '16px', lineHeight: '1.6', color: '#444' }}>
            This is a sample product description. It explains the features, usage,
            and benefits of the product. This content is static and used only for
            UI design purposes.
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
  disabled
  style={{
    padding: '10px 16px',
    backgroundColor: '#ccc',
    color: '#777',
    border: 'none',
    borderRadius: '4px',
    cursor: 'not-allowed',
    opacity: 0.7,
  }}
>
  Edit Product
</button>


            <button
            onClick={()=>handleDeleteProduct(products._id)}
              style={{
                padding: '10px 16px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Delete Product
            </button>
          </div>
        </div>
      </div>
       {/* <Modal show={show2} onHide={handleClose2}>
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
              </Modal> */}
    </div>
  );
};

export default ProductDetails;
