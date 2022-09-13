we created a stateless product page.
```
import React, {Component} from 'react'
import './product.css'

export default class Product extends Component {
    render () {
        return (
            <div className='wrapper'>
                <div>
                    shopping cart : 0 total items.
                </div>
                <div>
                    Total : 0
                </div>
                <div className='product'><span role="img" aria-label = "ice-cream">🍦</span></div>
                <button>Add</button> <button>Remove</button>
            </div>
        )
    }
}
```
There are two values in your component values that are going to change in your display: total number of items and total cost. Instead of hard coding them, in this step you’ll move them into an object called state.

The state of a React class is a special property that controls the rendering of a page. When you change the state, React knows that the component is out-of-date and will automatically re-render. When a component re-renders, it modifies the rendered output to include the most up-to-date information in state. In this example, the component will re-render whenever you add a product to the cart or remove it from the cart. You can add other properties to a React class, but they won’t have the same ability to trigger re-rendering.

Add a property called state to the Product class. Then add two values to the state object: cart and total. The cart will be an array, since it may eventually hold many items. The total will be a number. After assigning these, replace references to the values with this.state.property: