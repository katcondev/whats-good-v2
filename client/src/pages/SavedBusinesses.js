import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import { useQuery, useMutation } from "@apollo/client";

import Auth from '../utils/auth';
import { removeBusinessId, saveBusinessIds } from "../utils/localStorage";
import { GET_ME } from "../utils/queries";
import { REMOVE_BUSINESS } from "../utils/mutations";

const SavedBusinesses = () => {
  const { loading, data } = useQuery(GET_ME);
  
  const userData = data?.me || [];
  const [removeBusiness] = useMutation(REMOVE_BUSINESS);

  // create function that accepts the business's mongo _id value as param and deletes the business from the database
  const handleDeleteBusiness = async businessId => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await removeBusiness({
        variables: { businessId: businessId },
      });


      removeBusinessId(businessId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }
  debugger
  // get info from localStorage by the use data queries
  const savedBusinesIds = userData.savedBusiness.map(businesses => businesses.businessId);
  saveBusinessIds(savedBusinessIds);

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved businesses!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.savedBusinesses.length
            ? `Viewing ${userData.savedBusinesses.length} saved ${userData.savedBusinesses.length === 1 ? 'business' : 'businesses'}:`
            : 'You have no saved businesses!'}
        </h2>
        <CardColumns>
          {userData.savedBusinesses.map((businesses) => {
            return (
              <Card key={businesses.businessId} border='dark'>
                {businesses.image_url ? <Card.Img src={businesses.image_url} alt={`The cover for ${businesses.alias}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{businesses.alias}</Card.Title>
                  <p className='small'>Authors: {businesses.name}</p>
                  <Card.Text>{businesses.city}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBusiness(businesses.businessId)}>
                    Delete this business!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBusinesses;
