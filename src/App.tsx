import './App.css';
import { useState, useEffect } from 'react';
import List from './components/List';

export type Item = {
  index: number;
  name: string;
};

function App() {
  const [count, setCount] = useState(1000);
  const [items, setItems] = useState<Item[]>([]);
  const [itemHeight, setItemHeight] = useState(40);

  useEffect(() => {
    setItems(
      [...Array(count)].map((_, i) => ({
        index: i,
        name: `Item ${i}`,
      }))
    );
  }, [count]);

  return (
    <div className="App">
      <main>
        <form>
          <label>Number of items</label>
          <input
            type="number"
            value={count.toString()}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <label>Item height</label>
          <input
            type="number"
            value={itemHeight.toString()}
            onChange={(e) => setItemHeight(Number(e.target.value))}
          />
        </form>

        <List
          viewportHeight={400}
          itemHeight={itemHeight}
          itemCount={items.length}
          items={items}
        />
      </main>
    </div>
  );
}

export default App;
