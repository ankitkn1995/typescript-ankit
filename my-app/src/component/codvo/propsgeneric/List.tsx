/** @format */

import React from "react";
// interface ListProps {
//   items: string[] | number[];
//   onClick: (value: string | number) => void;
// }

interface ListProps<T> {
  items: T[];
  onClick: (value: T) => void;
}
const List = <T extends { a: string }>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <div>List</div>
      <div>
        {items.map((item, index) => {
          return (
            <div key={index} onClick={() => onClick(item)}>
              {item.a}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
