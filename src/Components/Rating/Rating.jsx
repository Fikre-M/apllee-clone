import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

function Rating() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };

  const decrement = () => {
    setValue(value - 1);
  };

  return (
    <Container
      fluid
      className="bg-secondary p-5 text-white" 
    >
      {" "}
      {/* dark background and padding */}
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <div className="text-center">
            <h2>Rating block</h2>
            <Button variant="primary" onClick={increment} className="mx-2">
              Increment
            </Button>
            <Button variant="danger" onClick={decrement} className="mx-2">
              Decrement
            </Button>
            <div
              className="mt-3 p-3"
              style={{ backgroundColor: "white", color: "black" }}
            >
              Your rated this product: {value}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Rating;
