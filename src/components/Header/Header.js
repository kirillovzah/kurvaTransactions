import './Header.css';

const Header = () => {
  return (
    <div className='title'>
      <div className='row'>
        <div className='col-sm-6'>
          <h2>
            Kurva<b>Transactions</b>
          </h2>
        </div>
        <div className='col-sm-6'>
          {/* <button className={`btn btns btn-success`}>
            <i className='material-icons'>&#xE147;</i>
            <span>Add New Transaction</span>
          </button>
          <button className={`btn btns btn-danger`}>
            <i className='material-icons'>&#xE15C;</i> <span>Delete</span>
          </button> */}
          <button className={`btn btns btn-success`}>
            <span>Connect Wallet</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
