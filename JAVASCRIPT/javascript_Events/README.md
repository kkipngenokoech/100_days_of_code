## JAVASCRIPT EVENTS
events are actions that occur on your webpage such as mouse-clicks or keypresses, and using javascript we can make our webpage listen and react to this events.

## HOW TO LISTEN TO THIS EVENTS?
1. adding these functions directly to your html elements - `<button onClick = "alert('Hello World')">Click Me</button>`
2. adding event listeners to our html elements - `<button id = "btn">Click Me</button>` in your html
  your js
   ```
   const btn  = document.querySelector('btn')
   btn.onClick() = () => alert('Hello Multiverse')
   ```
3. here we just need to tweak our js file
```
const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    alert("Hello again Multiversers?")
})
```
this third method can allow you to monitor several events and make your website responsive to different events.

## event type:
1. click
2. dbclick
3. keydown
4. keyup
5. [extended list](https://www.w3schools.com/jsref/dom_obj_event.asp)