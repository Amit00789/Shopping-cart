import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/Button'
import { empty, remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux'
import { toast } from "react-toastify";


export default function Cart() {

  const products = useSelector(state => state.cart)
  const dispatch = useDispatch();

  const removeFromCart = (product) => {
    dispatch(remove(product))
    toast('Hello Geeks')
  }

  const emptyCart = () => {
    dispatch(empty())
  }

  const cards = products.map(products => (
    <div className="col-md-4 my-3">
      <Card key={products.id} className="h-100">
        <div className="text-center">
            <Card.Img variant="top" src={products.image} style={{height : '130px', width: '100px'}}/>
        </div>
        
        <Card.Body>
          <Card.Title>{products.title}</Card.Title>
          <Card.Text>{products.price}</Card.Text>
          
        </Card.Body>
        <Card.Footer>
            <Button variant="danger" onClick={() => removeFromCart(products.id)}>Remove from cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));


  return (
    
    <div className='row'>
      {cards}
      {products.length > 0 ? 
        <Card.Footer>
            <Button variant="danger"onClick={() => emptyCart()}>Empty cart</Button> 
        </Card.Footer> : '  Cart is empty'
      }
    </div>
  );
}
