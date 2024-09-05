import React from 'react'
import Item from './Item'

const List = ({ list, onComplete, onDelete }) => {
    return (
        <div>{Object.values(list).map((item => <Item key={item.id} item={item} onComplete={onComplete} onDelete={onDelete} />))}</div>
    )
}

export default List