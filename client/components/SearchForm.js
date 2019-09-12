import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    return (
      <form className="container">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Home Passport"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Destination Country"
          />
        </div>
        <button type="button" className="btn btn-primary">
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
