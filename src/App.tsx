import React from "react";
import { Route } from "react-router";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";

const App: React.FC = () => {
  return (
    <>
      <Route path="/" component={Home} />
      <Route path="/rooms/" component={Rooms} />
      <Route path="/single-room" component={SingleRoom} />
    </>
  );
};

export default App;
