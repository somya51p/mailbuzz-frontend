import React, { useState } from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import mailServices from "../services/mail";

function SendMail({ setShowEditor, showEditor, user }) {
  // mail object data
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [schedule, setSchedule] = useState("daily");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ccArr = cc.split(",");
    const bccArr = bcc.split(",");
    const mailObj = {
      to,
      subject,
      body,
      cc: ccArr,
      bcc: bccArr,
      schedule,
    };
    const mail = await mailServices.add(mailObj, user);
    console.log(mail);
  };

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
        <input
          value={to}
          onChange={({ target }) => setTo(target.value)}
          name="to"
          placeholder="To"
          type="email"
        />
        <input
          value={cc}
          onChange={({ target }) => setCc(target.value)}
          name="cc"
          placeholder="Cc"
          type="email"
        />
        <input
          value={bcc}
          onChange={({ target }) => setBcc(target.value)}
          name="bcc"
          placeholder="bcc"
          type="email"
        />
        <input
          value={subject}
          onChange={({ target }) => setSubject(target.value)}
          name="subject"
          placeholder="Subject"
          type="text"
        />
        <input
          value={body}
          onChange={({ target }) => setBody(target.value)}
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
            onClick={handleSubmit}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
