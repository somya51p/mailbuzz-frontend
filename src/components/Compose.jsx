import React, { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import mailServices from "../services/mail";
import Button from "@material-ui/core/Button";
import "./Compose.css";

function Compose({ user }) {
  useEffect(() => {
    const scriptTag = document.createElement("script");

    scriptTag.src = "./resource.js";
    scriptTag.async = true;

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);
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
  // const [editorState, setEditorState] = useState("");
  // state = {
  //   editorState: EditorState.createEmpty(),
  // };

  // const onEditorStateChange = (editorState) => {
  //   setEditorState(editorState);
  // };

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
          <label htmlFor="schedule">Recurrence Method:</label>

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

        <div className="application">
          <input
            value={body}
            onChange={({ target }) => setBody(target.value)}
            name="message"
            className="compose__message"
            id="output"
            placeholder="Message..."
            type="text"
            contenteditable="true"
            // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          />
          <div class="toolbar">
            <ul class="tool-list">
              <li class="tool">
                <button
                  type="button"
                  data-command="justifyLeft"
                  class="tool--btn"
                >
                  <i class=" fas fa-align-left"></i>
                </button>
              </li>
              <li class="tool">
                <button
                  type="button"
                  data-command="justifyCenter"
                  class="tool--btn"
                >
                  <i class=" fas fa-align-center"></i>
                </button>
              </li>
              <li class="tool">
                <button type="button" data-command="bold" class="tool--btn">
                  <i class=" fas fa-bold"></i>
                </button>
              </li>
              <li class="tool">
                <button type="button" data-command="italic" class="tool--btn">
                  <i class=" fas fa-italic"></i>
                </button>
              </li>
              <li class="tool">
                <button
                  type="button"
                  data-command="underline"
                  class="tool--btn"
                >
                  <i class=" fas fa-underline"></i>
                </button>
              </li>
              <li class="tool">
                <button
                  type="button"
                  data-command="insertOrderedList"
                  class="tool--btn"
                >
                  <i class=" fas fa-list-ol"></i>
                </button>
              </li>
              <li class="tool">
                <button
                  type="button"
                  data-command="insertUnorderedList"
                  class="tool--btn"
                >
                  <i class=" fas fa-list-ul"></i>
                </button>
              </li>
              <li class="tool">
                <button
                  type="button"
                  data-command="createlink"
                  class="tool--btn"
                >
                  <i class=" fas fa-link"></i>
                </button>
              </li>
            </ul>
          </div>
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
