import React from "react";
import SearchForm from "./SearchForm";
/*assets*/
import logo from "../np-logo.png";
import "../style/style.css";

const App = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 offset-md-3">
          <img className="logo" src={logo} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default App;
