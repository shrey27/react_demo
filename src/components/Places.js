import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MOCK_API, PLACES } from './constants';

export default function Places() {
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState('');

  const postData = async () => {
    try {
      await axios.post(MOCK_API+PLACES, { name: place });
      const resp = await axios.get(MOCK_API+PLACES);
      setPlaces(resp.data);
      setPlace('');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async function () {
      const resp = await axios.get(MOCK_API+PLACES);
      setPlaces(resp.data);
    })();
  }, []);

  return (
    <div>
      <h1> address book </h1>
      <input
        type='text'
        value={place}
        placeholder='enter city'
        onChange={(event) => {
          const { value } = event.target;
          setPlace(value);
        }}
      />
      <button onClick={postData}> Save Place </button>
      <ul>
        {places && places.map((elem) => <li key={elem.id}>{elem.name}</li>)}
      </ul>
    </div>
  );
}
