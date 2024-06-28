import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";

const Index = () => {
  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Order Management System</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="text-end">
          <Button variant="primary">Add New Order</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ORD001</td>
                <td>John Doe</td>
                <td>Laptop</td>
                <td>1</td>
                <td>Pending</td>
                <td>
                  <Button variant="warning" size="sm" className="me-2">Edit</Button>
                  <Button variant="danger" size="sm">Delete</Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>ORD002</td>
                <td>Jane Smith</td>
                <td>Smartphone</td>
                <td>2</td>
                <td>Shipped</td>
                <td>
                  <Button variant="warning" size="sm" className="me-2">Edit</Button>
                  <Button variant="danger" size="sm">Delete</Button>
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;