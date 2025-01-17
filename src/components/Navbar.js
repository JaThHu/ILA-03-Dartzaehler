import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import GamePage from "../pages/GamePage";
import SettingPage from "../pages/SettingPage";
import StatisticsPage from "../pages/StatisticsPage";

function UncontrolledExample() {
  return (
    <Tabs defaultActiveKey="Spielen" className="mb-3">
      <Tab eventKey="Spielen" title="Play">
        <GamePage />
      </Tab>
      <Tab eventKey="Statistik" title="Statistics">
        <StatisticsPage />
      </Tab>
      <Tab eventKey="Einstellungen" title="Settings">
        <SettingPage />
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;
