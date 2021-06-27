import React from "react";

function Future({ mails }) {
  console.log(mails.length);
  if (mails.length > 0) {
    return (
      <ul>
        {mails.map((mail) => {
          console.log(mail.subject);
          return <li key={mail.id}>{mail.subject}</li>;
        })}
      </ul>
    );
  }
  return <p>.</p>;
}

export default Future;
