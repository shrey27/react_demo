import './styles.css';
import { useState } from 'react';
import AddressForm from './AddressForm';

export default function AddressBox(props) {
  const { details, updateAddress, deleteAddress } = props;
  const [showForm, setShowForm] = useState(false);
  const {
    id,
    type,
    houseno,
    line_1,
    line_2,
    city,
    state,
    pincode,
    phone,
    email
  } = details;
  
  return showForm ? (
    <AddressForm
      setAddressFn={updateAddress}
      setShowForm={setShowForm}
      initialState={details}
    />
  ) : (
    <div className='card shdw'>
      <div className='flex-ct-sb btn--float xs-s'>
        <button className='btn--icons sb sm-s'>Address</button>
      </div>
      <div className='sm-s'>
        <h2 className='primary md mg-half'>{type}</h2>
        <h2 className='primary sm'>{houseno}</h2>
        <h2 className='primary sm'>{line_1}</h2>
        <h2 className='primary sm'>{line_2}</h2>
        <h2 className='primary sm'>{city}</h2>
        <h2 className='primary sm'>{state}</h2>
        <h2 className='primary sm'>{pincode}</h2>
        <h2 className='primary sm'>Phone No. {phone}</h2>
        <h2 className='primary sm'>Email ID: {email}</h2>
        <button
          className='btn btn--primary sb'
          onClick={() => setShowForm(true)}
        >
          UPDATE
        </button>
        <button className='btn sb' onClick={deleteAddress.bind(this, id)}>
          DELETE
        </button>
      </div>
    </div>
  );
}
