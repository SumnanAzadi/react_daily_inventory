import React from "react";

class StorePicker extends React.Component {
  //render: what DOM elements do I render to the html page.
  render() {
    /* can't return sibling elements.
    Workaround:
    <React.Fragment>
    <p></p>
    <h1></h1>
    </React.Fragment> */

    //By Default only return one parent elements, can have multiple child elements of that parent elements
    return (
      <form className="store-selector">
        <h2>Please Enter a store</h2>
        <input type="text" required placeholder="Enter your Store name" />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
