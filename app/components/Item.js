const Item = ({ item, onComplete, onDelete }) => {
    return (
        <div className="flex justify-around mb-5">
            <div className="mr-5">
                {item.completed ? "v" : "x"}
            </div>
            <div className="mr-5">{item.value}</div>
            <button className="mr-5" onClick={(e) => onComplete(e, item.id)} disabled={item.completed}>Complete</button>
            <button onClick={(e) => onDelete(e, item.id)}>Delete</button>
        </div>
    )
}

export default Item