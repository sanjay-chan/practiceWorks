import React from "react";
import { BrowserRouter as  Router } from "react-router-dom";
import Menubar from "./components/site/Menubar";

const Routing = () => {
    return (
      <Router>
        <div>
          <Menubar />
        </div>
      </Router>
    );
  };

export default Routing;
