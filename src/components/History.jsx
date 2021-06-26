import React from "react";

function History({ history }) {
  if (history.length > 0) {
    return (
      <ul>
        {history.forEach((mail) => {
          <li>mail.subject</li>;
        })}
      </ul>
    );
  }
  return <h1>No History to show!</h1>;
}

export default History;
