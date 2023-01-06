type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// <T extends { id: number }> => add restriction to generic type that props pass only an array of
//objects & each object must contain an id property
export const List = <T extends { id: number }>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
