type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// <T extends string | number> => add restriction to generic type that props pass only an array of
// numbers or strings
export const List = <T extends string | number>({
  items,
  onClick,
}: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};
