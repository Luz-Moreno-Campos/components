import logo from '../assets/media/goWild-logo.png';


function Header(props) {

  return (
    <header>
      <div className="header-container">
        <img className="header-logo" src={logo} alt="GoWild Travel logo" />

        <div className="nav-container">
          <nav>
            <ul className="nav-menu">
              {props.navLinks.map(link => (
                <li key={link.index}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>

  )
}

export default Header;