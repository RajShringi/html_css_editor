import React from "react";
import CssEditor from "./CssEditor";
import HtmlEditor from "./HtmlEditor";

class App extends React.Component {
  state = {
    htmlCode: "",
    cssCode: "",
  };

  preview = React.createRef();

  updateHtmlCode = (e) => {
    this.setState(
      {
        htmlCode: e,
      },
      () => {
        this.updatePreview();
      }
    );
  };

  updateCssCode = (e) => {
    this.setState(
      {
        cssCode: e,
      },
      () => {
        this.updatePreview();
      }
    );
  };

  updatePreview = () => {
    let document = this.preview.current.contentWindow.document;
    let style = document.createElement("style");
    style.innerText = this.state.cssCode;
    document.head.append(style);
    document.body.innerHTML = this.state.htmlCode;
  };

  render() {
    return (
      <div className="container mx-auto flex justify-between items-center">
        <div className="basis-1/2 p-2 flex flex-col justify-between">
          <HtmlEditor
            htmlCode={this.state.htmlCode}
            updateHtmlCode={this.updateHtmlCode}
          />
          <CssEditor
            cssCode={this.state.cssCode}
            updateCssCode={this.updateCssCode}
          />
        </div>
        <div className="basis-1/2 self-stretch my-2 border bg-white">
          <div className="bg-slate-100 flex justify-between items-center p-2">
            <span>OUTPUT</span>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-4 h-4 bg-rose-500 rounded-full"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
            </div>
          </div>
          <iframe className="basis-1/2" ref={this.preview}></iframe>
        </div>
      </div>
    );
  }
}

export default App;
