import React, { useEffect, useState } from 'react';
import {Button, Card} from 'react-bootstrap';


const News = (props) => {
  const [article, setArticle] =  useState([]);
  useEffect(()=> {
    setArticle(props.article)
  },[props.article])
  
  console.log(article);

    return (    
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
      <Card.Title>sdf</Card.Title>
      <Card.Text>
      With supporting text below as a natural lead-in to additional content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>

     
    );
};

export default News;