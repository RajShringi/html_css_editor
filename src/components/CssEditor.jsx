import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";

class CssEditor extends React.Component {
  render() {
    return (
      <div className="my-2">
        <div className="bg-slate-100 text-right">CSS</div>
        <CodeMirror
          value={this.props.cssCode}
          height="200px"
          onChange={this.props.updateCssCode}
          extensions={[css()]}
        />
      </div>
    );
  }
}
export default CssEditor;
