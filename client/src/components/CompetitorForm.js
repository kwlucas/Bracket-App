import React from "react";
//Pass names from a global state?
function CompetitorForm(props) {

  function handleFormSubmit(event){
    event.preventDefault();
  }

  function handleNameChange(event){
    //event.preventDefault();
  }
  
    return (
      <form onSubmit={handleFormSubmit}>
        <label>Name: </label>
        <input placeholder="Name" onChange={handleNameChange}></input>
        <button type="submit">Add to bracket</button>
      </form>
    );
  }
  
  export default CompetitorForm;