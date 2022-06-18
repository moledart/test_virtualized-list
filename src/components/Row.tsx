import React from 'react';
import { Item } from '../App';

interface Props {
  items: Item[];
  index: number;
  topPosition: number;
  itemHeight: number;
}

const Row = ({ items, index, topPosition, itemHeight }: Props) => {
  const i = items[index];

  return (
    <div
      className="row"
      style={{
        position: 'absolute',
        top: topPosition,
        height: itemHeight,
      }}
    >
      {i.name}
    </div>
  );
};

export default Row;
