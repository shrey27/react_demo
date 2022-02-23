import React, { useEffect, useState } from 'react';
import axios from 'axios';

const links = {
  GET_PLACES: 'https://621661ea7428a1d2a36611c7.mockapi.io/api/profile/places'
};
export default function Places() {
  const [places, setPlaces] = useState([]);
  const [place, setPlace] = useState('');

  useEffect(() => {
    (async function () {
      const resp = await axios.get(links.GET_PLACES);
      setPlaces(resp.data);
      // setAddresses((currentAddress) =>
      //   currentAddress.concat({ city: "Tanay" })
      // );
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
      <button> Save Address </button>
      <ul>
        {places && places.map((elem) => <li key={elem.id}>{elem.name}</li>)}
      </ul>
    </div>
  );
}
