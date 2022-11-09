import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";

class HtmlEditor extends React.Component {
  render() {
    return (
      <div className="my-2">
        <div className="bg-slate-100 text-right">HTML</div>
        <CodeMirror
          value={this.props.htmlCode}
          height="200px"
          onChange={this.props.updateHtmlCode}
          extensions={[html()]}
        />
      </div>
    );
  }
}

export default HtmlEditor;
