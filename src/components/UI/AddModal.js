import {useState} from 'react';
import {DUMMY_DATA} from '../../DUMMY_DATA';

const AddModal = ({onCloseModal}) => {
  const [users, setUsers] = useState(DUMMY_DATA);
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [adressInput, setAdressInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');

  //31:22

  const handleNameChange = e => {
    setNameInput(e.target.value);
  };

  const handleEmailChange = e => {
    setEmailInput(e.target.value);
  };

  const handleAdressChange = e => {
    setAdressInput(e.target.value);
  };

  const handlePhoneChange = e => {
    setPhoneInput(e.target.value);
  };

  const addUser = e => {
    e.preventDefault();

    const newUser = {
      id: Math.random(),
      name: nameInput,
      email: emailInput,
      adress: adressInput,
      phone: phoneInput,
    };

    DUMMY_DATA.push(newUser);
    onCloseModal();
    console.log(DUMMY_DATA);
  };

  return (
    <div className='content'>
      <form onSubmit={addUser}>
        <div className='modal-header'>
          <h4 className='modal-title'>Add Employee</h4>
          <button
            onClick={onCloseModal}
            type='button'
            className='close'
            data-dismiss='modal'
            aria-hidden='true'>
            &times;
          </button>
        </div>
        <div className='modal-body'>
          <div className='form-group'>
            <label>Name</label>
            <input
              value={nameInput}
              type='text'
              className='form-control'
              required
              onChange={handleNameChange}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              value={emailInput}
              type='email'
              className='form-control'
              required
              onChange={handleEmailChange}
            />
          </div>
          <div className='form-group'>
            <label>Address</label>
            <textarea
              value={adressInput}
              className='form-control'
              required
              onChange={handleAdressChange}></textarea>
          </div>
          <div className='form-group'>
            <label>Phone</label>
            <input
              value={phoneInput}
              type='text'
              className='form-control'
              required
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <div className='modal-footer'>
          <input
            onClick={onCloseModal}
            type='button'
            className='btn btn-default'
            value='Cancel'
          />
          <input type='submit' className='btn btn-success' value='Add' />
        </div>
      </form>
    </div>
  );
};

export default AddModal;
