import "./navbar.css";

function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark  p-3'>
      <a className='navbar-brand' href='#'>
        Metallica Tribute Page
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#collapsibleNavbar'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse ' id='collapsibleNavbar'>
        <ul className='navbar-nav nav-pills'>
          <li className='nav-item'>
            <a className='nav-link' href='#hist'>
              History
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a className='nav-link' href='#james'>
              Members
            </a>
            <div className='dropdown-content'>
              <a href='#james'>James</a>
              <a href='#lars'>Lars</a>
              <a href='#kirk'>Kirk</a>
              <a href='#robert'>Robert</a>
              <a href='#jason'>Jason</a>
              <a href='#dave'>Dave</a>
              <a href='#cliff'>Cliff</a>
            </div>
          </li>
          <li className='nav-item dropdown'>
            <a className='nav-link' href='#0'>
              Albums
            </a>
            <div className='dropdown-content'>
              <a href='#0'>Kill 'em All</a>
              <a href='#1'>Ride the Lightning</a>
              <a href='#2'>Master of Puppets</a>
              <a href='#3'>And Justice for All</a>
              <a href='#4'>Black Album</a>
              <a href='#5'>Load</a>
              <a href='#6'>Reload</a>
              <a href='#7'>St. Anger</a>
              <a href='#8'>Death Magnetic</a>
              <a href='#9'>Hardwired to Self Destruct</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
