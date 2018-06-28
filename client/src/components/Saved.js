import React from "react";

const Saved = (props) => {
  return(

  <div className="card">
    <div className="card-body">
    <div className="row">
          <div className="col-md-6">
          <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.date.substring(0, 10)}</p>
          </div>
          <div className="col-md-6 text-right">
          <a href={props.url} target="_blank" className="btn btn-outline-success btn-sm mr-1">View Article</a>
      <button className="btn btn-outline-danger btn-sm" onClick={() => props.handleDeleteButton(props._id)}>Remove from Saved</button>
          </div>
        </div>
 
    
    </div>
  </div>

  );
}


export default Saved;