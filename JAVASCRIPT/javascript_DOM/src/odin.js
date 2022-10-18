const container = document.querySelector('#container')
const content = document.createElement('div')
content.classList.add('content')
content.textContent = 'I added this div using js'
container.appendChild(content)
content.style.textAlign = "center";
container.style.color = "blue"
const red = document.createElement('p')
red.classList.add('red')
red.textContent = 'Hey I am red'
red.style.color = 'red'
content.appendChild(red)
const blue = document.createElement('h3')
blue.textContent = "I'm a blue h3"
container.appendChild(blue)
const div = document.createElement('div')
div.classList.add('div')
div.style.borderColor = 'black'
div.style.backgroundColor = 'pink'
div.style.border = '3px'
const h1 = document.createElement('h1')
h1.textContent = "I am in a div"
const p = document.createElement('p')
p.textContent = 'me too'
div.appendChild(h1)
div.appendChild(p)
content.appendChild(div)