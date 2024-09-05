import Item from "./Item";

const List = ({ list, onComplete, onDelete }) => {
  return (
    <div className="w-full mx-auto px-4 py-2">
      {Object.values(list).map((item) => (
        <Item
          key={item.id}
          item={item}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default List;
