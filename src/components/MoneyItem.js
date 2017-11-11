import React, { Component } from 'react';
import '../styles/css/MoneyItem.css'

class MoneyItem extends Component {
	constructor(props) {
		super(props)
    console.log(this)

    this.removeItem = this.removeItem.bind(this)
  }

  render() {
    return (
      <tr className={"money-item " + "money-item-" + this._reactInternalFiber.key}>
        <td><p>{this.props.item}</p></td>
        <td><p>{this.props.amount}</p></td>
        <td><p>{this.props.quantity}</p></td>
        <td><button onClick={this.removeItem} ><i className="fa fa-times-circle" aria-hidden="true"></i></button></td>
      </tr>
    )
  }

  removeItem(e) {
    e.preventDefault()
    this.props.removeFunction(this._reactInternalFiber.key)
    document.querySelector(`.money-item-${this._reactInternalFiber.key}`).remove()
  }
}

export default MoneyItem