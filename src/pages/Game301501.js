// src/features/Game301501.js

import React, { useState } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Table,
  Form,
  Modal,
} from "react-bootstrap";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBz9AzFufNxW8cTUQ0fUXA7eFVVIgDC45U",
  authDomain: "frickdart.firebaseapp.com",
  databaseURL:
    "https://frickdart-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "frickdart",
  storageBucket: "frickdart.firebasestorage.app",
  messagingSenderId: "224031870744",
  appId: "1:224031870744:web:3e4526cf69c0859d4a986d",
  measurementId: "G-B43GFWSBKD",
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Game301501 = () => {
  const [gameType, setGameType] = useState(null);
  const [players, setPlayers] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [showSetupModal, setShowSetupModal] = useState(true);
  const [playerCount, setPlayerCount] = useState(2);
  const [turn, setTurn] = useState([]); // Current round throws
  const [history, setHistory] = useState([]); // Game history
  const [multiplier, setMultiplier] = useState(1); // 1 = single, 2 = double, 3 = triple

  // Initialize game with players and game type
  const initializeGame = () => {
    const newPlayers = [];
    for (let i = 0; i < playerCount; i++) {
      newPlayers.push({
        name: `Player ${i + 1}`,
        score: gameType,
        history: [],
      });
    }
    setPlayers(newPlayers);
    setShowSetupModal(false);
  };

  // Handle score input with multiplier
  const handleScore = (points) => {
    // Add check for maximum throws
    if (turn.length >= 3) {
      alert("Maximum 3 Würfe pro Runde erreicht!");
      return;
    }

    const currentPlayer = players[currentPlayerIndex];
    const newScore = currentPlayer.score - points * multiplier;

    // Check if this would be a valid throw
    if (newScore < 0) {
      alert("Punktzahl zu hoch! Versuche es erneut.");
      return;
    }

    // Check double-out rule
    if (newScore === 0 && multiplier !== 2) {
      alert("Du musst mit einem Double beenden!");
      return;
    }

    // Add throw to current turn
    setTurn([...turn, { points, multiplier }]);

    // Update player's score
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayerIndex].score = newScore;
    setPlayers(updatedPlayers);

    // Check for win
    if (newScore === 0) {
      alert(`${currentPlayer.name} hat gewonnen!`);
      // Save game to Firebase here if needed
      return;
    }
  };

  // End current player's turn
  const endTurn = () => {
    // Add turn to player's history
    const updatedPlayers = [...players];
    updatedPlayers[currentPlayerIndex].history.push([...turn]);
    setPlayers(updatedPlayers);

    // Clear current turn
    setTurn([]);

    // Move to next player
    setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);

    // Reset multiplier
    setMultiplier(1);

    // Save to Firebase
    const gameRef = ref(database, "games/301501");
    set(gameRef, {
      players: updatedPlayers,
      currentPlayerIndex: (currentPlayerIndex + 1) % players.length,
      gameType,
    });
  };

  // Reset game
  const resetGame = () => {
    setShowSetupModal(true);
    setTurn([]);
    setHistory([]);
    setCurrentPlayerIndex(0);
    setMultiplier(1);
  };

  const dartboardFields = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25,
  ];

  if (showSetupModal) {
    return (
      <Modal show={showSetupModal} centered>
        <Modal.Header>
          <Modal.Title>Spiel Einstellungen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Spieltyp</Form.Label>
              <Form.Select
                value={gameType}
                onChange={(e) => setGameType(parseInt(e.target.value))}
              >
                <option value="">Wähle einen Spieltyp</option>
                <option value={301}>301</option>
                <option value={501}>501</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Anzahl Spieler</Form.Label>
              <Form.Control
                type="number"
                min={2}
                max={8}
                value={playerCount}
                onChange={(e) => setPlayerCount(parseInt(e.target.value))}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={initializeGame}
            disabled={!gameType}
          >
            Spiel Starten
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <Container className="text-center mt-5">
      <h1>Dart-Spiel: {gameType}</h1>

      {/* Player scores */}
      <Row className="mb-4">
        {players.map((player, index) => (
          <Col key={index}>
            <h3 className={index === currentPlayerIndex ? "text-primary" : ""}>
              {player.name}
            </h3>
            <h4>{player.score}</h4>
          </Col>
        ))}
      </Row>

      {/* Multiplier buttons */}
      <Row className="justify-content-center mb-3">
        <Col xs={12}>
          <Button
            variant={multiplier === 1 ? "primary" : "outline-primary"}
            onClick={() => setMultiplier(1)}
            className="mx-2"
          >
            Single
          </Button>
          <Button
            variant={multiplier === 2 ? "primary" : "outline-primary"}
            onClick={() => setMultiplier(2)}
            className="mx-2"
          >
            Double
          </Button>
          <Button
            variant={multiplier === 3 ? "primary" : "outline-primary"}
            onClick={() => setMultiplier(3)}
            className="mx-2"
          >
            Triple
          </Button>
        </Col>
      </Row>

      {/* Dartboard fields */}
      <Row className="justify-content-center">
        {dartboardFields.map((field) => (
          <Col xs={3} sm={2} md={1} key={field} className="mb-2">
            <Button
              variant="primary"
              onClick={() => handleScore(field)}
              style={{ width: "100%" }}
            >
              {multiplier > 1 ? `${multiplier}x` : ""}
              {field}
            </Button>
          </Col>
        ))}
      </Row>

      {/* Current turn display */}
      <h3 className="mt-4">Aktuelle Würfe</h3>
      {turn.length === 0 ? (
        <p>Keine Würfe in dieser Runde</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Wurf</th>
              <th>Punkte</th>
            </tr>
          </thead>
          <tbody>
            {turn.map((throw_, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {throw_.multiplier}x{throw_.points} ={" "}
                  {throw_.multiplier * throw_.points}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {/* Control buttons */}
      <Row className="mt-4">
        <Col>
          <Button variant="success" onClick={endTurn} className="mx-2">
            Runde Beenden
          </Button>
          <Button variant="danger" onClick={resetGame} className="mx-2">
            Neues Spiel
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Game301501;
