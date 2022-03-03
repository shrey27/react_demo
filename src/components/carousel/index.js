import React, { useEffect, useState } from 'react';
import './styles.css';

const CarousalItem = ({ number }) => {
  return <section>Content section {number}</section>;
};

const Slider = ({ items, setItems, index }) => {
  const handleTransition = (e) => {
    // e.target.style.transition = 'none';
    // e.target.style.transform = 'translate(0)';
    // setTimeout(() => {
    //   e.target.style.transition = '';
    // });
    //setItems([...items.slice(1), items[0]]);
  };

  return (
    <div
      className='slider'
      onTransitionEnd={handleTransition}
      style={{
        transform: `translateX(-20%)`
      }}
    >
      {items}
    </div>
  );
};

const Carousel = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(<CarousalItem key={i + 1} number={i + 1} />);
    }
    setItems(arr);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setItems([...items.slice(1), items[0]]);
    }, 2000);

    return () => clearInterval(id);
  }, [items]);

  return (
    <div className='container'>
      <div className='carousel'>
        <Slider items={items} setItems={setItems} />
      </div>
    </div>
  );
};

export default Carousel;
