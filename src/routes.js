import PanelList from "./Components/Panel/PanelList";
import PanelEdit from "./Components/Panel/PanelEdit";
import PanelAdd from "./Components/Panel/PanelAdd";
import Allheartbeats from "./Components/Heartbeat/Allheartbeats";
import LocationList from "./Components/Location/LocationList";
import AddSite from "./Components/Location/Site/AddSites";
import LocationEdit from "./Components/Location/LocationEdit";
import Bar1 from "./Components/Dashboard/Bar";
import Ethereum from "./Components/Dashboard/Ethereum";
import Solana from "./Components/Dashboard/Solana";
const routes = [
  
  { path: "/ethereum", name: "Ethereum", component: Ethereum },
  { path: "/solana", name: "Solana", component: Solana },
  { path: "/comparison", name: "Cardano", component: Cardano }
];
export default routes;
