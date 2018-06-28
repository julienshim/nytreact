import React from "react";

const Jumbotron = (props) =>
    <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4 text-center">{props.appName}</h1>
        <p className="lead text-center">{props.subtitle}</p>
    </div>

export default Jumbotron;