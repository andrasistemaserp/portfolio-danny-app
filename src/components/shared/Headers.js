import React, { useState } from 'react';
import Link from "next/link"
import { isAuthorized } from 'utils/auth0';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const BsNavLink = (props) => {
  const { title, href, className = "" } = props
  return (
    <Link href={href}>
      <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
    </Link>
  )
}

const BsNavBrand = () =>
  <Link href="/">
    <a className="navbar-brand port-navbar-brand">Danny Andrade</a>
  </Link>

const LoginLink = () =>
  // <span className="nav-link port-navbar-link clickable">Login</span>
  <BsNavLink href="/api/v1/login" title="Login" />


const LogoutLink = () =>
  // <span className="nav-link port-navbar-link clickable">Logout</span>
  <BsNavLink href="/api/v1/logout" title="Logout" />

const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}>
      <DropdownToggle className="port-dropdown-toggle" nav caret>
        Admin
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/portfolios/new"
            title="Create Portfolio"
          />
        </DropdownItem>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/blogs/editor"
            title="Blog Editor"
          />
        </DropdownItem>
        <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/dashboard"
            title="Dashboard"
          />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}

const Header = ({ user, loading, className }) => {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => { setIsOpen(!isOpen) }

  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute ${className}`}
        // color="transparent"
        dark
        expand="md">
        {/* <NavbarBrand className="port-navbar-brand" href="/">Danny Andrade</NavbarBrand> */}
        {/* <NavbarBrand>
          <Link href="/">
            <a className="port-navbar-brand">Danny Andrade</a>
          </Link>
        </NavbarBrand> */}
        <BsNavBrand />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              {/* <NavLink href="/">Home</NavLink> */}
              {/* <Link href="/">
                  <a className="nav-link"> Home</a>
                </Link> */}
              <BsNavLink href="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/portfolios" title="Portfolio" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/cv" title="Cv" />
            </NavItem>
            {/* <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="Secret" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secretssr" title="SecretSSR" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadmin" title="Admin" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadminssr" title="AdminSSR" />
            </NavItem> */}
          </Nav>
          <Nav navbar>
            {!loading &&
              <>
                {user &&
                  <>
                    {isAuthorized(user, 'admin') && <AdminMenu />}
                    <NavItem className="port-navbar-item">
                      <LogoutLink />
                    </NavItem>
                  </>
                }
                {!user &&
                  <NavItem className="port-navbar-item">
                    <LoginLink />
                  </NavItem>
                }
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header