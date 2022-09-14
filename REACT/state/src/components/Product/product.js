import React, {Component} from 'react'
import './product.css'

export default class Product extends Component {
    state = {
        cart : [],
        total : 0
    }
    currencyOptions = {
        minimumFractionDigits : 2,
        maximumFractionDigits : 2,
    }
    getTotal = () => {
        return this.state.total.toLocaleString(undefined,this.currencyOptions)
    }
    // in the function below we used the arrow function so that we ensure that this functionality is achieved prolly.
    add = () => {
        this.setState(
            {
                cart : ["ice cream"],
                total : 5
            }
        )
    }
    remove = () => {
        this.setState(
            {
                cart : []
            }
        )
    }
    render () {
        return (
            <div className='wrapper'>
                <div>
                    shopping cart : {this.state.cart.length} total items
                </div>
                <div>
                    Total : {this.getTotal()}
                </div>
                <div className='product'><span role="img" aria-label = "ice-cream">🍦</span></div>
                <button onClick={this.add}>Add</button> <button onClick={this.remove}>Remove</button>
            </div>
        )
    }
}