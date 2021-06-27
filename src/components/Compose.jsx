import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import mailServices from "../services/mail";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./Compose.css";

function Compose({ user }) {
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const StyledMenu = withStyles({
  //   paper: {
  //     border: "1px solid #d3d4d5",
  //   },
  // })((props) => (
  //   <Menu
  //     elevation={0}
  //     getContentAnchorEl={null}
  //     anchorOrigin={{
  //       vertical: "bottom",
  //       horizontal: "center",
  //     }}
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "center",
  //     }}
  //     {...props}
  //   />
  // ));

  // const StyledMenuItem = withStyles((theme) => ({
  //   root: {
  //     "&:focus": {
  //       backgroundColor: theme.palette.primary.main,
  //       "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
  //         color: theme.palette.common.white,
  //       },
  //     },
  //   },
  // }))(MenuItem);

  // mail object data
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [schedule, setSchedule] = useState("daily");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mailObj = {
      to,
      subject,
      body,
      cc,
      bcc,
      schedule,
    };
    const mail = await mailServices.add(mailObj, user);
    console.log(mail);
  };
  const [editorState, setEditorState] = useState("");
  // state = {
  //   editorState: EditorState.createEmpty(),
  // };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  // const { editorState } = this.state;

  return (
    <div className="compose">
      {console.log("compose component")}
      <div className="compose_header">
        <h3>Schedule New Recurring Email</h3>
      </div>

      <form>
        <input
          value={to}
          onChange={({ target }) => setTo(target.value)}
          name="to"
          placeholder="To"
          type="email"
        />
        <br />
        <input
          value={cc}
          onChange={({ target }) => setCc(target.value)}
          name="cc"
          placeholder="Cc"
          type="email"
        />
        <br />
        <input
          value={bcc}
          onChange={({ target }) => setBcc(target.value)}
          name="bcc"
          placeholder="bcc"
          type="email"
        />
        <br />
        <input
          value={subject}
          onChange={({ target }) => setSubject(target.value)}
          name="subject"
          placeholder="Subject"
          type="text"
        />
        <br />
        <div className="schedule">
          <label for="schedule">Recurrence Method:</label>

          <select
            name="schedule"
            id="schedule"
            value={schedule}
            className="method"
            onChange={({ target }) => setSchedule(target.value)}
          >
            <option value="recurring">Every 30 seconds</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <div>
          <input
            value={body}
            onChange={({ target }) => setBody(target.value)}
            name="message"
            className="sendMail__message"
            placeholder="Message..."
            type="text"
            value={body}
            onChange={({ target }) => setBody(target.value)}
            // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          />
        </div>

        <div className="compose__options">
          <Button
            className="compose__send"
            variant="contained"
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

export default Compose;
