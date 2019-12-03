import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  render() {
    return (
      <header className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo" title="Logo">
            ネコとサカナ
          </Link>
        </div>
      </header>
    )
  }
}

export default Navbar
