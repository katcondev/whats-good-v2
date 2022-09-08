import React from 'react';
import cupcake from '../../assets/images/eat-cup.png'
import { Link } from 'react-router-dom';
import './index.css'

import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

function search() {
  return (
    <div className='container animate__animated animate__fadeIn mb-5'>
     <Col sm={80} classname='m-auto'>
        <h1 className='mt-5 mb-5'>search experiences</h1></Col>
       <Form className='mb-5' >
            <Form.Row className='mb-5'>
              <Col className='mb-2' xs={12} md={8}>
              <input name="searchInput" type="text" class="form-control form-control-lg" value=""></input>
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' className='btn-wg btn'>
                  SEARCH
                </Button>
              </Col>
           </Form.Row>
         </Form>
         <h2 className='mt-5 mb-5'>
    “WE NEED MORE LIGHT ABOUT EACH OTHER. LIGHT CREATES UNDERSTANDING, UNDERSTANDING CREATES LOVE, LOVE CREATES PATIENCE, AND PATIENCE CREATES UNITY.” -Malcom X
    </h2>
        <img className='mt-5' id='cupcake' src={cupcake} />
    </div>





  )
}

export default search




