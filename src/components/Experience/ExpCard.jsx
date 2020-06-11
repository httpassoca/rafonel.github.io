import React from "react";

export default function ExpCard(props) {
  return (
      <div className="expCard info">

        <p className="title">{props.title}</p>
        { props.data && 
         <div className="subname data">
          <p className="tag">{props.data}</p>
        </div> }
        { props.description && 
        <div className="description">
          <p> {props.description} </p>
        </div> }
        {props.children}
      </div>
  );
}
