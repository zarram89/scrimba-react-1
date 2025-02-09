import logo from './assets/react-logo.png'; 

function Header() {
  return (
    <header className="page-header">
      <img className="nav-logo" src={logo} width="50" height="50" alt="React logo" />
      <nav>
        <ul className="nav-list">
          <li className='nav-list-item'>
            <a href="#">Pricing</a>
          </li>
          <li className='nav-list-item'>
            <a href="#">About</a>
          </li>
          <li className='nav-list-item'>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

