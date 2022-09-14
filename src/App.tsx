import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "containers/Home";
import Profile from "containers/Profile";

const App: React.FC = () => {
  // return <Home></Home>;
  // return <Profile></Profile>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path=":pokemonId" element={<Profile />} />
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
