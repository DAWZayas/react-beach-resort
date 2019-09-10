import React from "react";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </>
  );
};

export default App;
