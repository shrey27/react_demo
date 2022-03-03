import { useEffect, useState } from 'react';

const list = ['apple', 'grapes', 'mango'];
const time = 3;

export default function Effect() {
  const [fruit, setFruit] = useState('');
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    list.forEach((elem, index) => {
      setTimeout(() => {
        setFruit(elem);
      }, index * time * 1000);
    });
  }, []);

  useEffect(() => {
    if (seconds === 10) {
      setSeconds(0);
      return;
    }
    let id = setTimeout(() => {
      setSeconds((e) => e + 1);
    }, 1000);
    return () => clearTimeout(id);
  }, [seconds]);

  return (
    <div>
      <h3>Time: {seconds} seconds</h3>
      <h3>Selected Fruit</h3>
      <h4>{fruit}</h4>
    </div>
  );
}
