import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  /* handleClick() {
    alert("Hey Button Clicked !!!");
  } */
  gotoStore = (e) => {
    // 1. Stop the form from submitting
    e.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    console.log(`Going to Store`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.gotoStore}>
        <h2>Please Enter a store</h2>
        {/* <button onClick={this.handleClick}>Click me !!!</button> */}
        {/* to reference input field we have "ref" */}
        <input
          type="text"
          required
          ref={this.myInput}
          placeholder="Enter your Store name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
