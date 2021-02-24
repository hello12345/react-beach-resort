import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoomPage";
import Error from "./pages/Error";
import { Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Test from "./pages/Test";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/Test" component={Test} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
