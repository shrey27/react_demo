import { useState } from 'react';
import './styles.css';

export default function AddressForm({
  setAddressFn,
  setShowForm,
  initialState
}) {
  const [form, setForm] = useState(
    initialState ?? {
      type: '',
      houseno: '',
      line_1: '',
      line_2: '',
      city: '',
      state: '',
      pincode: 0,
      email: '',
      phone: 0
    }
  );
  const changehandler = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setAddressFn(initialState?.id, form);
  };
  return (
    <div>
      <div class='card shdw'>
        <h1 class='btn--success md sb cen xs-s'>NEW ADDRESS</h1>
        <form
          class='sm-s'
          action=''
          enctype='multipart/form-data'
          onSubmit={submitHandler}
        >
          <div class='fields'>
            <label for='email--field' class='label'>
              Email:
            </label>
            <input
              class='input sm-s'
              type='email'
              name='email'
              id='email--field'
              title='Enter a valid Email ID'
              autocomplete='off'
              value={form.email}
              onChange={changehandler}
            />
          </div>
          <div class='fields'>
            <label for='phone--field' class='label'>
              Phone:
            </label>
            <input
              class='input sm-s'
              type='number'
              min='1000000000'
              max='9999999999'
              name='phone'
              id='phone--field'
              autocomplete='mobile'
              value={form.phone}
              onChange={changehandler}
            />
          </div>
          <div class='fields'>
            <label for='houseno' class='label'>
              House No.
            </label>
            <input
              class='input sm-s'
              type='text'
              name='houseno'
              id='houseno'
              autocomplete='off'
              value={form.houseno}
              onChange={changehandler}
            />
          </div>
          <div class='fields'>
            <label for='line_1' class='label'>
              Area
            </label>
            <input
              class='input sm-s'
              type='text'
              name='line_1'
              id='line_1'
              autocomplete='off'
              value={form.line_1}
              onChange={changehandler}
            />
          </div>
          <div class='fields'>
            <label for='line_2' class='label'>
              Landmark
            </label>
            <input
              class='input sm-s'
              type='text'
              name='line_2'
              id='line_2'
              autocomplete='off'
              value={form.line_2}
              onChange={changehandler}
            />
          </div>
          <div class='fields'>
            <label for='state' class='label'>
              State
            </label>
            <select
              id='state'
              name='state'
              class='input select sm-s'
              value={form.state}
              onChange={changehandler}
            >
              <option value='' class='primary--light' selected>
                -- Select a State --
              </option>
              <option value='raj' selected>
                Rajasthan
              </option>
              <option value='utr'>Uttrakhand</option>
              <option value='ktk'>Karnataka</option>
              <option value='ker'>Kerala</option>
            </select>
          </div>
          <div class='fields'>
            <label for='city' class='label'>
              City
            </label>
            <select
              id='city'
              name='city'
              class='input select sm-s'
              value={form.city}
              onChange={changehandler}
            >
              <option value='' class='primary--light' selected>
                -- Select a City --
              </option>
              <option value='jaipur'>Jaipur</option>
              <option value='ajmer' selected>
                Ajmer
              </option>
              <option value='bikaner'>Bikaner</option>
              <option value='jodhpur'>Jodhpur</option>
            </select>
          </div>
          <div class='fields'>
            <label for='pincode' class='label'>
              Pincode
            </label>
            <input
              class='input sm-s'
              type='number'
              name='pincode'
              id='pincode'
              autocomplete='mobile'
              value={form.pincode}
              onChange={changehandler}
            />
          </div>
          <div class='fields'>
            <label for='type' class='label'>
              Address Type
            </label>
            <select
              id='type'
              name='type'
              class='input select sm-s'
              value={form.type}
              onChange={changehandler}
            >
              <option value='' class='primary--light' selected>
                -- Select a Type --
              </option>
              <option value='Home' selected>
                Home
              </option>
              <option value='Office'>Office</option>
              <option value='Relative'>Relative</option>
            </select>
          </div>
          <button type='submit' class='btn btn--wide btn--float sb'>
            {initialState ? 'Update' : 'Add'} Address
          </button>
          <button
            class='btn btn--wide btn--icons sb'
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
