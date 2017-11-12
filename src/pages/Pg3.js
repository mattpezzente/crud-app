import React, { Component } from 'react';
import FaAdd from 'react-icons/lib/ti/document-add';
import MoneyItem from '../components/MoneyItem'
import '../styles/css/Pg3.css';
import CurrencyFormatter from 'currency-formatter';

class Pg3 extends Component {
	constructor(props) {
		super(props)
    this.state = {
      items: [],
      item: '',
      price: 0,
      quantity: 1,
      editable: false,
    }
    this.updateItem = this.updateItem.bind(this)
    this.updatePrice = this.updatePrice.bind(this)
    this.updateQuantity = this.updateQuantity.bind(this)
    this.createMoneyItem = this.createMoneyItem.bind(this)
    this.removeItemLocal = this.removeItemLocal.bind(this)
  }

  componentWillMount() {
    if (localStorage.getItem('shopping')) {
      this.setState({items: JSON.parse(localStorage.getItem('shopping'))})
    }
  }

  render() {
    let moneyItems = this.state.items.map((item, key) => {
      return <MoneyItem key={key} item={item.item} price={"$"+item.price} quantity={item.quantity} totalPrice={item.totalPrice} removeFunction={this.removeItemLocal} />
    })

    let totalAmount = 0
    for (let i = 0; i < this.state.items.length; i++) {
      totalAmount += this.state.items[i].totalPrice
    }

    return (
      <div className="pg3">
      	<section className="money-container">
          <form className="money-form" action="#" method="get">
    	    	<label>* Item: <input required placeholder="Item Name..." className="input-item" type="text" onChange={this.updateItem} /></label>
            <label>* Price: ($)<input required placeholder="Item Price..." className="input-price" type="number" onChange={this.updatePrice} /></label>
            <label>* Quantity: <input required className="input-quantity" type="number" onChange={this.updateQuantity} placeholder="1" /></label>
            <button type="submit" onClick={this.createMoneyItem}>Add Item <FaAdd /></button>
          </form>
      	</section>
        <table className="money-list-table">
          <tbody>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
            {moneyItems}
          </tbody>
          <tbody className="money-list-total">
            <tr>
              <th>Total Amount: {CurrencyFormatter.format(totalAmount, {code: 'USD'})}</th>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

  updateItem(e) {
    e.preventDefault()

    if (e.target.validity.valid) {
      if (e.target.parentElement.querySelector('.error')) {
        e.target.parentElement.querySelector('.error').remove()
      }
      this.setState({item: e.target.value})
    }
    else if (!e.target.parentElement.querySelector('.error')) {
      let tempHTML = `<p class="error">Error, ${e.target.validationMessage}`
      e.target.insertAdjacentHTML('afterend', tempHTML)
      this.setState({item: ''})
    }
  }

  updatePrice(e) {
    e.preventDefault()
    let floatVal =  parseFloat((parseFloat(e.target.value, 10).toFixed(2)), 10)
    if (!isNaN(floatVal)) {
      if (e.target.parentElement.querySelector('.error')) {
        e.target.parentElement.querySelector('.error').remove()
      }

      if (e.target.value.includes('.') && e.target.value.split('.')[1].length > 2) {
        e.target.value = e.target.value.substring(0, e.target.value.length - 1)
      }

    }
    else if (!e.target.parentElement.querySelector('.error')) {
      let tempHTML = `<p class="error">Error, ${e.target.validationMessage}`
      e.target.insertAdjacentHTML('afterend', tempHTML)
      floatVal = 0
    }
    this.setState({price: floatVal})
  }

  updateQuantity(e) {
    e.preventDefault()
    let intVal =  parseInt(e.target.value, 10)
    e.target.value = intVal
    if (isNaN(intVal)) {
      intVal = 1
    }

    this.setState({quantity: intVal})
  }

  createMoneyItem(e) { 
    e.preventDefault()
    this.checkInputValues()
    if (this.state.editable) {
      let items = this.state.items
      let item = {
        item: this.state.item,
        price: this.state.price,
        quantity: this.state.quantity,
        totalPrice: this.state.price * this.state.quantity
      }
      items.push(item)
      this.setState({items: items})
      this.saveLocal()

      document.querySelector('.money-form').reset()
    }
    else {
      
    }
  }

  checkInputValues() {
    let x = 0
    if(document.querySelector('.input-item').value.length > 0) {
      x++
    }
    if(document.querySelector('.input-price').value.length > 0) {
      x++
    }
    if(document.querySelector('.input-quantity').value.length > 0) {
      x++
    }

    if (x === 3) {
      this.setState({editable: true})
    }
    else {
      alert('Please fill in all required fields (Fields marked with " * ")')
      this.setState({editable: false})
    }
  }

  removeItemLocal(key) {
    let items = this.state.items
    items.splice(key, 1)
    this.setState({items: items})
    this.saveLocal()
  }

  saveLocal() {
    localStorage.setItem('shopping', JSON.stringify(this.state.items))
  }
}

export default Pg3