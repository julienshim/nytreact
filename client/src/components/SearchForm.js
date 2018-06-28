import React from "react";

const SearchForm = (props) => {
  return (
    <div>
      <div className="card mb-5">
      <div className="card-header text-center">
        <h2>Search</h2>
      </div>
      <div className="card-body text-center">
        <form>
          <div className="form-group">
            <label htmlFor="topicInput">Topic</label>
            <input type="text" className="form-control" id="topicInput" onChange={props.topicInput} />
          </div>
          <div className="form-group">
            <label htmlFor="startYearInput">Start Year</label>
            <input type="text" className="form-control" id="startYearInput" onChange={props.startYearInput} />
          </div>
          <div className="form-group">
            <label htmlFor="endYearInput">End Year</label>
            <input type="text" className="form-control" id="endYearInput" onChange={props.endYearInput} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={props.formSubmit}>Search</button>
        </form>
      </div>
      </div>
    </div>
  )
}
 


export default SearchForm;