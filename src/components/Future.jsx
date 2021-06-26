import React from "react";

function Future({ mails }) {
  console.log(mails.length);
  if (mails.length > 0) {
    return (
      <ul id="future">
        {mails.map((mail) => {
          console.log(mail.subject);
          return <li key={mail.id}>{mail.subject}</li>;
        })}
      </ul>
    );
  }
  return <h1>No Scheduled mail to show!</h1>;
}

export default Future;
