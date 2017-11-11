import React, { Component } from 'react';
import MoneyItem from '../components/MoneyItem'
import '../styles/css/Pg3.css';

class Pg3 extends Component {
	constructor(props) {
		super(props)
    this.state = {
      items: [],
      item: '',
      amount: 0,
      quantity: 0,
      totalAmount: 0.00,
      editable: false,
    }
    this.updateItem = this.updateItem.bind(this)
    this.updateAmount = this.updateAmount.bind(this)
    this.updateQuantity = this.updateQuantity.bind(this)
    this.createMoneyItem = this.createMoneyItem.bind(this)
    this.removeItemLocal = this.removeItemLocal.bind(this)
  }

  render() {
    let moneyItems = this.state.items.map((item, key) => {
      return <MoneyItem key={key} item={item.item} amount={"$"+item.amount} quantity={item.quantity} removeFunction={this.removeItemLocal} />
    })

    return (
      <div className="pg3">
      	<section className="money-container">
          <form action="#" method="get">
    	    	<label>Item: <input type="text" onChange={this.updateItem} /></label>
            <label>Price: $<input type="number" onChange={this.updateAmount} min="0.01" step="0.01" /></label>
            <label>Quantity: <input type="number" onChange={this.updateQuantity} /></label>
            <button type="submit" onClick={this.createMoneyItem}>Add Item</button>
          </form>
      	</section>
        <table className="money-list-table">
          <tbody>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
            {moneyItems}
          </tbody>
          <tbody className="money-list-total">
            <th>Total Amount: ${this.state.totalAmount.toFixed(2)}</th>
          </tbody>
        </table>
      </div>
    )
  }

  updateItem(e) {
    e.preventDefault()
    this.setState({item: e.target.value})
    console.log(this.state)
  }

  updateAmount(e) {
    e.preventDefault()
    let floatVal =  parseFloat((parseFloat(e.target.value, 10).toFixed(2)), 10)
    if (isNaN(floatVal)) {
      floatVal = 0.00
    }
    this.setState({amount: floatVal})
  }

  updateQuantity(e) {
    e.preventDefault()
    this.setState({quantity: e.target.value})
  }

  createMoneyItem(e) { 
    e.preventDefault()
    let items = this.state.items
    let totalAmount = 0
    let item = {
      item: this.state.item,
      amount: this.state.amount * this.state.quantity,
      quantity: this.state.quantity
    }

    items.push(item)

    for (var i = 0; i < items.length; i++) {
      totalAmount += items[i].amount
    } 

    this.setState({items: items})
    this.setState({totalAmount: totalAmount})
  }

  removeItemLocal(key) {
    let items = this.state.items
    let newItems = items.map((item, key) => {

    })
  }
}

export default Pg3