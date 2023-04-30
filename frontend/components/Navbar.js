import Link from 'next/link'
import Image from 'next/image'
import SearchComponent from './SearchComponent'
import Login from './Login'
const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-background">
      <div className="container-fluid">
        <div className='logo-div'>
          <Link href="/" legacyBehavior>
            <Image src="/../public/images/logo.png" alt="Example Image" width={160} height={70} />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-search"></i>
        </button>
        
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ml-auto fs-5 " >
            
            <li className="nav-item text-uppercase">
              {/* A search Component */}
              <SearchComponent />
            </li>
            
            <li className="nav-item" >
              <Link href="/Plants" legacyBehavior>
                <a className="nav-link text-light ">Plants</a>
              </Link>
            </li>
            <li className="nav-item" >
              <Link href="/cart" legacyBehavior>
                <a className="nav-link text-light ">Cart</a>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link href='/login' legacyBehavior>
                <a className="nav-link text-light ">Log In</a>
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
