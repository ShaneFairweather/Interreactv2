import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Profile from '../assets/images/portrait.png';

class Header extends Component {
    renderLinks() {
       switch (this.props.user) {
           case null:
               return;
           case false:
               return (
                   <Nav pullRight>
                       <NavItem eventKey={2} className="rblink"><Link to="/signin">Sign In</Link></NavItem>
                   </Nav>
               );
           default:
               return ([
                   <Nav pullRight key="signout" id="signout">
                       <li className="signoutLink"><a href="/api/logout">Sign out</a></li>

                   </Nav>,
                   <Nav pullRight key="greetUser" id="greetUser">
                       <NavItem eventKey={2} className="rbLink">
                           <Link to="/account">
                               <img src={this.props.user.image} alt="headerImg" />&nbsp;{this.props.user.username}
                           </Link>
                       </NavItem>
                   </Nav>
               ]);
       }
    }

    render() {
        return (
            <Navbar fixedTop collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">InterReact</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    {this.renderLinks()}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


function mapStateToProps(state) {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps, null)(Header);