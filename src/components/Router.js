import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Components
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/*The way switch work, it go to 1st route and if it doesn't match it goes to 2nd one and so on.... Also it tells what component to render out */}
      {/* Exactly on the homepage(landed on the homepage first)  */}
      <Route exact path="/" component={StorePicker} />
      {/* Go to store http://localhost:3000/store/123 */}
      <Route path="/store/:storeId" component={App} />
      {/* Any other path other than above two */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
