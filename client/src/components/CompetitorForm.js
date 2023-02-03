import React from "react";

function CompetitorForm(props) {

  function handleFormSubmit(event){
    event.preventDefault();
  }
  
    return (
      <form onSubmit={handleFormSubmit}>
        <label>Name: </label>
        <input placeholder="Name"></input>
        <button type="submit"></button>
      </form>
    );
  }
  
  export default CompetitorForm;