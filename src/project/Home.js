import React from 'react'
import { useEffect, useState } from 'react';
import Product from './Product';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

function Home() {
    const [product, seProduct] = useState([])
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => seProduct(data))
    }, [])
  return (
    <Container>
    <Row xl={'3'} className="g-4">
      {product.map(data => { return <Product data={data} flag ={"home"} product = {product}/> })}
    </Row>
  </Container>
  )
}

export default Home