import { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';
import AddressBox from './AddressBox';
import AddressForm from './AddressForm';
import { MOCK_API, ADDRESS } from '../constants';

export default function Address() {
  const [addArr, setAddArr] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const deleteAddress = async (id) => {
    setLoading(true);
    try {
      await axios.delete(MOCK_API + ADDRESS + `/${id}`);
      setAddArr(addArr.filter((elem) => elem.id !== id));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const addNewAddress = async (id = '', body) => {
    console.log(body);
    setLoading(true);
    try {
      const resp = await axios.post(MOCK_API + ADDRESS, body);
      setAddArr([...addArr, resp.data]);
      setLoading(false);
      setShowForm(false);
    } catch (err) {
      console.log(err);
    }
  };

  const updateAddress = async (id, body) => {
    setLoading(true);
    try {
      const resp = await axios.put(MOCK_API + ADDRESS + `/${id}`, body);
      // const resp = await axios.get(MOCK_API + ADDRESS);
      // setAddArr(resp.data);
      const arr = addArr.reduce(
        (prev, curr) =>
          curr.id !== id ? [...prev, curr] : [...prev, resp.data],
        []
      );
      setAddArr(arr);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleForm = () => {
    setShowForm(true);
  };

  useEffect(() => {
    (async function () {
      const resp = await axios.get(MOCK_API + ADDRESS);
      setAddArr(resp.data);
    })();
  }, []);

  return loading ? (
    <p className='loader'>...Updating Address List</p>
  ) : (
    <div className='addressContainer'>
      <div className='address'>
        {addArr &&
          addArr.map((elem) => (
            <AddressBox
              key={elem.id}
              details={{ ...elem }}
              deleteAddress={deleteAddress}
              updateAddress={updateAddress}
            />
          ))}
      </div>
      <div class='card shdw'>
        <div class='flex-ct-sb btn--error xs-s' onClick={handleForm}>
          <h1 class='md'>Add New Address</h1>
          <i class='fas fa-chevron-right'></i>
        </div>
      </div>
      {showForm && (
        <AddressForm setAddressFn={addNewAddress} setShowForm={setShowForm} />
      )}
    </div>
  );
}
