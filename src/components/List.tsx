import { isAbsolute } from 'path';
import React, { useState } from 'react';
import Row from './Row';
import { Item } from '../App';

interface Props {
  items: Item[];
  itemCount: number;
  viewportHeight: number;
  itemHeight: number;
}

const List = ({ items, itemCount, viewportHeight, itemHeight }: Props) => {
  const [scrollTop, setScrollTop] = useState(0);

  const innerHeight = itemCount * itemHeight;
  const amountRowsBuffered = 20;

  const indexStart = Math.max(
    Math.floor(scrollTop / itemHeight) - amountRowsBuffered,
    0
  );
  const indexEnd = Math.min(
    Math.ceil((scrollTop + viewportHeight) / itemHeight - 1) +
      amountRowsBuffered,
    itemCount - 1
  );

  const handleScrollTopChange = (e: React.UIEvent<HTMLDivElement, UIEvent>) =>
    setScrollTop(e.currentTarget.scrollTop);

  const list = [];
  for (let i = indexStart; i <= indexEnd; i++) {
    list.push(
      <Row
        key={i}
        items={items}
        index={i}
        topPosition={i * itemHeight}
        itemHeight={itemHeight}
      />
    );
  }

  return (
    <div
      className="viewport"
      style={{ height: viewportHeight }}
      onScroll={handleScrollTopChange}
    >
      <div className="innerDiv" style={{ height: innerHeight }}>
        {list}
      </div>
    </div>
  );
};

export default List;
