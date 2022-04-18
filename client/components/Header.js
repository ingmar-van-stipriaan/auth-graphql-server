import React, { Component } from "react";
import { graphql } from "@apollo/client/react/hoc";
import query from "../queries/CurrentUser";
import { Link } from "react-router-dom";

class Header extends Component {
  renderButtons() {
    const { loading, currentUser } = this.props.data;
    if (loading) {
      return <div />;
    }
    if (currentUser) {
      return <div>Logout</div>;
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <ul className="right">{this.renderButtons()}</ul>
        </div>
      </nav>
    );
  }
}

export default graphql(query)(Header);
