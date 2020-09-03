import React from "react"; //we want entire 'react' package
import { render } from "react-dom"; //we want only need 'render' method 'react-dom' package

//Components
import StorePicker from "./components/StorePicker";

//render(<p>Hey Brother</p>, document.querySelector("#main")); //render simple tag
render(<StorePicker />, document.querySelector("#main")); //render whole components
