import React from "react";
import "./ItemCard.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ItemCard = ({ dataProduct }) => {
  return (
    <Card style={{height:360}}>
      <Card.Img
        className="img-fluid border-bottom mx-auto d-block"
        style={{ maxHeight: 200 , maxWidth:200}}
        variant="top"
        src={dataProduct.imagen}
      />
      <Card.Body>
        <Card.Title style={{height:50}} className="fs-5 text-center border-bottom">{dataProduct.nombre}</Card.Title>
        <Card.Text className="d-flex fs-6 justify-content-around">
          ${dataProduct.precio}
          <Button as={Link} to={`/productos/${dataProduct.id}`} className="btn-sm" variant="dark">+Info</Button>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted text-uppercase">
          {dataProduct.category}
        </small>
      </Card.Footer>
      
    </Card>
  );
};

export default ItemCard;
