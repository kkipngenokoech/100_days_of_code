import React, {Component} from 'react'
import './product.css'

const products = [
  {
    emoji: '🍦',
    name: 'ice cream',
    price: 5
  },
  {
    emoji: '🍩',
    name: 'donuts',
    price: 2.5,
  },
  {
    emoji: '🍉',
    name: 'watermelon',
    price: 4
  }
];

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
        const total = this.state.cart.reduce((totalCost, item) => totalCost + item.price, 0)
        return total.toLocaleString(undefined,this.currencyOptions)
    }
    // in the function below we used the arrow function so that we ensure that this functionality is achieved prolly.
    add = (product) => {
        this.setState(state => (
            {
                cart : [...state.cart,product]
            })
        )
    }
    remove = (product) => {
        this.setState(state => {
            const cart = [...state.cart]
            const productIndex = cart.findIndex(p => p.name === product.name)
            if (productIndex < 0)
            {
                return;
            }
            cart.splice(productIndex, 1)
            return (
                {
                    cart,
                    total: state.total -product.price
                }
                )
        })
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
                <div>
                    {products.map(product => (
                    <div key={product.name}>
                        <div className="product">
                            <span role="img" aria-label = {product.name}>{product.emoji}</span>
                        </div>
                        <button onClick={() => this.add(product)}>Add</button> <button onClick={() => this.remove(product)}>Remove</button>
                    </div>
                    
                    ))}
                </div>
            </div>
        )
    }
}