import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from "react-redux"

function Product(props) {
    let product = props.product;
    const data = props.data
    const flag = props.flag
    let productData = useSelector(state => state)
    console.log("productData", productData)
    const dispatch = useDispatch()
    return (
        <Col key={data?.title}>
            <Card border="primary" className='my-3' style={{ width: '23.5rem' }}>
                <Container>
                    <Row className='my-2'>
                        <Col>
                            <Card.Img className={'mx-2'} variant="top" src={data?.image} style={{ width: '5rem', height: '8rem' }} />
                        </Col>
                        <Col>
                            <Card.Body>
                                <Card.Title className="overflow-scroll" style={{ fontSize: '18px', maxHeight: "4rem" }}>{data?.title}</Card.Title>
                                <Card.Text >
                                    {data?.price}
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Card.Footer>
                        <Row className='my-2'>
                            <Col md={'6'}>
                                {flag === "home" ?
                                    <Card.Text className="overflow-scroll" style={{ maxHeight: "4.5rem", fontSize: '12px' }}>
                                        {data.description}
                                    </Card.Text>
                                    :
                                    <Button variant="primary" className='my-2'
                                        onClick={e => props.removeData(data)}
                                    >Remove</Button>
                                }
                            </Col>
                            <Col>
                                {flag === "home" ? <Button variant="primary" className='my-2'
                                    onClick={e => {
                                         let value =productData?.product
                                         console.log("value", value)
                                         console.log("data", data)
                                        if(value.some(val => val?.id === data?.id)){
                                            let position = value.map(e => e.id).indexOf(data.id);
                                            data.qty = value[position].qty + 1
                                        }else{
                                            data.qty = 1
                                        }
                                        
                                        dispatch({ type: "ADD", payload: data })
                                    
                                    }}
                                >Add to Cart</Button> :
                                    <>
                                        <Button variant="primary" className='my-2'
                                            onClick={e => {
                                                if(product.find(value=>value?.id === data?.id)){
                                                    data.qty = data.qty +1;
                                                }else{
                                                    data.qty=1
                                                }
                                                dispatch({ type: "ADD", payload: data })
                                            }}
                                        >+</Button>
                                        <span className='mx-2'>{data.qty}</span>
                                        <Button variant="primary" className='my-2'
                                            onClick={e => { 
                                               if(product.find(value=>value?.id===data?.id)){
                                                console.log("data?.qty",data.qty)
                                                if(data.qty > 1){
                                                    data.qty = data.qty -1;
                                                }else{
                                                   return  props.removeData(data)                                                }
                                               }
                                               
                                                dispatch({ type: "MINUS", payload: data})
                                            }}
                                        >-</Button>
                                    </>

                                }
                            </Col>
                        </Row>
                    </Card.Footer>
                </Container>
            </Card>
        </Col>
    )
}

export default Product