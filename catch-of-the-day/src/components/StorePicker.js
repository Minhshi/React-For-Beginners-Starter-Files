import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault()
    const storeName = this.myInput.current.value
    this.props.history.push(`/store/${storeName}`)
  }
  render() {
    return <form action="" className="store-selector" onSubmit={this.goToStore}>
    <h1>Please enter a store</h1>
    <input type="text"
           ref={this.myInput}
           required
           placeholder="Store Name"
           defaultValue={getFunName()}/>
    <button type="submit">Visit store →</button>
    </form>
  }
}

export default StorePicker;
