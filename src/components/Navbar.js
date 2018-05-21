import React from 'react'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-success mb-3">
    <div className="container">
      <a className="navbar-brand" href="/" onClick={e => e.preventDefault()}>TODO APP</a>
    </div>
  </nav>
)

export default Navbar