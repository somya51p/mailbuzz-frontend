import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

function SendMail() {
  
  const onSubmit = (data) => {

  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail__close"
        />
      </div>

      <form>
        <input
          name="to"
          placeholder="To"
          type="email"
        />
        <input
          name="cc"
          placeholder="Cc"
          type="email"
        />
        <input
          name="bcc"
          placeholder="bcc"
          type="email"
        />        
        {/* {errors.to && <p className="sendMail__error">To is required</p>} */}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
        />
        {/* {errors.subject && (
          <p className="sendMail__error">Subject is required</p>
        )} */}
        <input
          name="message"
          className="sendMail__message"
          placeholder="Message..."
          type="text"
        />
        {/* {errors.message && (
          <p className="sendMail__error">Message can't be empty</p>
        )} */}

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
