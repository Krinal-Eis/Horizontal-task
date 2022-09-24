import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { productData } from '../../data/product-data';
import { addToCart } from '../../redux/actions/cart';
import { decreaseProductQnt, getProducts, increaseProductQnt } from '../../redux/actions/product';

const ProductListPage = () => {
  const {products} = useSelector(state => state.productsReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts(productData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleGoToCart = () => {
    navigate('/cart-page');
  }
  return (
    <>
      <div> <h1 className='mt-5'>PRODUCT LIST PAGE</h1> </div>
      <CardGroup className='m-5'>
        {products && products?.map(item => (
          <Card key={`products-${item.id}`} className="m-3 border">
            <Card.Img variant="top" src={item.image} alt="img" style={{height: '200px'}} />
            <Card.Body>
              <Card.Title>{item.product_title}</Card.Title>
              <Card.Text>
                {item.description}
              </Card.Text>
              
              <div>
                <span>Quantity: </span> 
                <Button onClick={() => dispatch(decreaseProductQnt(item))} className="ml-2">-</Button>
                &nbsp;
                <span className='p-2'>{item.quantity}</span>
                <Button onClick={() => dispatch(increaseProductQnt(item))}>+</Button>
              </div>
              <h6 className='mt-3'>Price: $ {item.Price * item.quantity}</h6>
              <Button className="btn btn-primary btn-block" onClick={() => dispatch(addToCart(item))}>Add to cart</Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>

      <Button className='mt-5 p-10 display-3' onClick={handleGoToCart}>GO TO CART</Button>
    </>
 
  );
}

export default ProductListPage;
