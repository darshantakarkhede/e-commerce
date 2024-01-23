import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import Container from 'react-bootstrap/esm/Container'
import Product from './Product'
import Row from 'react-bootstrap/esm/Row'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Cart() {
    let productData = useSelector(state => state)
    const [product, setProduct] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        let uniqueArray = [];
        for (let i = 0; i < productData.product.length; i++) {
            if (!uniqueArray.includes(productData.product[i])) {
                uniqueArray.push(productData.product[i])
            }
        }

        setProduct(state => ([...uniqueArray]))
    }, [productData])



    const removeData = (data) => {
        dispatch({ type: "REMOVE", payload: data })
    }
    // console.log("products",product)
    const res = product.map(value =>
        ({ ...value, totalPrice: value.qty * value.price })
    );
    const totalPrice = () => {
        let total = 0
        for (let i = 0; i < res.length; i++) {
            total = total + res[i].totalPrice
        }
        return Math.ceil(total);
    }

    return (
        <div>
            <Container>
                <Row xl={'3'} className="g-4">
                    {product.length > 0 ? (product.map(data => { return <Product data={data} key={"cart"} removeData={removeData} product={product} /> }))
                        : <div>
                            Please Add Items to the cart
                        </div>}
                </Row>
            </Container>
            <Navbar bg="primary" data-bs-theme="dark" fixed="bottom">
                <Container>
                    <Navbar.Brand >Total : {totalPrice()}</Navbar.Brand>

                </Container>
            </Navbar>

        </div>
    )
}

export default Cart