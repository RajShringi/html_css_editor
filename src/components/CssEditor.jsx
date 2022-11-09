import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";

class CssEditor extends React.Component {
  render() {
    return (
      <div className="basis-1/3">
        <div className="bg-slate-100 flex justify-between items-center p-2">
          <span>CSS</span>
          <div className="flex justify-center items-center space-x-2">
            <div className="w-4 h-4 bg-rose-500 rounded-full"></div>
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
        <CodeMirror
          value={this.props.cssCode}
          height="300px"
          onChange={this.props.updateCssCode}
          extensions={[css()]}
        />
      </div>
    );
  }
}
export default CssEditor;
