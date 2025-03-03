import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import GameSelection from "./components/GameSelection";
import Settings from "./components/Settings";
import PlayerStatistics from "./components/PlayerStatistics";
import PlayerCreation from "./components/PlayerCreation";
import X01 from "./components/games/X01";
import AroundTheClock from "./components/games/AroundTheClock";
import Highscore from "./components/games/Highscore";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/games" component={GameSelection} />
          <Route path="/settings" component={Settings} />
          <Route path="/statistics" component={PlayerStatistics} />
          <Route path="/player-creation" component={PlayerCreation} />
          <Route path="/game/x01" component={X01} />
          <Route path="/game/around-the-clock" component={AroundTheClock} />
          <Route path="/game/highscore" component={Highscore} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
