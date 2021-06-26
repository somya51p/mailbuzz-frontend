import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

function SendMail({ setShowEditor, showEditor }) {
  const onSubmit = (data) => {};

  if (!showEditor) {
    return null;
  }

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
          onClick={() => setShowEditor(false)}
        />
      </div>

      <form>
        <input name="to" placeholder="To" type="email" />
        <input name="cc" placeholder="Cc" type="email" />
        <input name="bcc" placeholder="bcc" type="email" />
        <input name="subject" placeholder="Subject" type="text" />
        <input
          name="message"
          className="sendMail__message"
          placeholder="Message..."
          type="text"
        />
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
