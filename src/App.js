import { useEffect, useState } from 'react';
import './App.css';
// import Places from './components/Places';
export default function App() {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState(1);
  }, []);
  return <div className='App'>{/* <Places /> */}{state}</div>;
}
