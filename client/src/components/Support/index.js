import React from 'react'
import { Form, Button, Col } from 'react-bootstrap';
import './index.css'

const Support = () => {
  return (
    <><div className='container animate__animated animate__fadeIn mb-5'>
      <Col sm={80} className='m-auto'>
        <h1 className='mt-5 mb-5'>Support Our Work</h1></Col>

      <p>Make the best choice in deciding where to invest your time and money with our Whats-Good mobileapp.
        It allows BIPOC clients to view and post reviews about their experiences through the lenses of Black people. Our
        app is to bring awareness to Black peoples' experiences, whether they be positive or negative.</p>
      
      <container className='container animate__animated animate__fadeIn'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" className="form-control form-control-lg" />
              <Form.Text className="text-muted">
                We'll never share your name with anyone else.
              </Form.Text>
            </Form.Group>
            
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" className="form-control form-control-lg" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicDonation">
              <Form.Label>Donation</Form.Label>
              <Form.Control type="donation" placeholder="Donation" className="form-control form-control-lg" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className='btn-wg btn' type="submit">
              DONATE
            </Button>
        </Form>
      </container>
        
      </div></>   
  )
}

export default Support;


