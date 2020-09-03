import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();
  gotoStore = (e) => {
    // 1. Stop the form from submitting
    e.preventDefault();
    // 2. get the text from that input
    const storeName = this.myInput.current.value;
    /* console.log(`Going to Store`); */
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.gotoStore}>
        <h2>Please Enter a store</h2>
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
