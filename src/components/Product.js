import React from "react";
import { useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/Button'
import Alert  from 'react-bootstrap/Alert'
import { useDispatch, useSelector } from 'react-redux'
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import { StatusCode } from "../utils/errorCode";

export default function Product() {
 
  const dispatch = useDispatch();
  const {data: products, status} = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts())
  },[]);

  const addToCart = (product) => {
      dispatch(add(product))
  }

  if(status === StatusCode.Loading){
    return <h1>loading....</h1>
  }

  if(status === StatusCode.Error){
    return <Alert variant="danger">
      Please try again !!!!!
    </Alert>
  }

  const cards = products.map(products => (
    <div className="col-md-3 my-3">
      <Card key={products.title} className="h-100">
        <div className="text-center">
            <Card.Img variant="top" src={products.image} style={{height : '130px', width: '100px'}}/>
        </div>
        
        <Card.Body>
          <Card.Title>{products.title}</Card.Title>
          <Card.Text>{products.price}</Card.Text>
          
        </Card.Body>
        <Card.Footer>
            <Button variant="primary" onClick={() => addToCart(products)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row">  {cards } </div>
    </>
  );
}
