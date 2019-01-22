import React, { Component, Fragment } from "react";
import { Row, Navbar } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar inverse collapseOnSelect>
          <Row>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">
                  <i className="glyphicon glyphicon-time" /> React Basit Saat
                </a>
              </Navbar.Brand>
            </Navbar.Header>
          </Row>
        </Navbar>
      </Fragment>
    );
  }
}
export default Header;
