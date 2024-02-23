import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonyms, index) {
          return <li key={index}>{synonyms}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}

// api key w6RE1dNITFpg70NvN153aOZ6ujrTE3l8RzYAQvkXvZqOrBCC67h6OMw1
