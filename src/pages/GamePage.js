import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Game301501 from "./Game301501";

function GamePage() {
  const [selectedGame, setSelectedGame] = useState(null);

  if (selectedGame === "501301") {
    return <Game301501 />;
  }

  return (
    <Container className="text-center">
      <h1>Play Darts</h1>
      <h2>Choose a game</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>501/301</Card.Title>
              <Card.Text></Card.Text>
              <Button
                variant="primary"
                onClick={() => setSelectedGame("501301")}
              >
                Play
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Around the Clock</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Play</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>High Score</Card.Title>
              <Card.Text></Card.Text>
              <Button variant="primary">Play</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GamePage;
