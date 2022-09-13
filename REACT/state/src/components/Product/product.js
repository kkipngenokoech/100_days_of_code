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
    render () {
        return (
            <div className='wrapper'>
                <div>
                    shopping cart : {this.state.cart.length}
                </div>
                <div>
                    Total : {this.getTotal()}
                </div>
                <div className='product'><span role="img" aria-label = "ice-cream">🍦</span></div>
                <button>Add</button> <button>Remove</button>
            </div>
        )
    }
}