import React from 'react'
import '../styles/item.css'

//functional way of creating a component.
const item = ({id, items, list, setList, complete}) => {
    const remove = (id) => {
        setList(list.filter((el) => el.id !== id))
    }
}