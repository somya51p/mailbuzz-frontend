import React, {useState} from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

function SendMail({ setShowEditor, showEditor }) {
  const onSubmit = (data) => {};
  const [editorState, setEditorState] = useState("");
  // state = {
  //   editorState: EditorState.createEmpty(),
  // };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  
  // const { editorState } = this.state;

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
        <div>
        <input
          name="message"
          className="sendMail__message"
          placeholder="Message..."
          type="text"
          // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
        </div>
        
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
