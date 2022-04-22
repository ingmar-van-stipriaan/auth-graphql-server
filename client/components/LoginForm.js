import React, { Component } from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/Login";
import { graphql } from "@apollo/client/react/hoc";
import query from "../queries/CurrentUser";
import history from "../history";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }
  componentWillUpdate(nextProps) {
    // this.props -> old, current set op props
    // nextProps -> next set of props tat will be in plaze when the component rerenders
    if (!this.props.data.currentUser && nextProps.data.currentUser) {
      history.push("/dashboard");
    }
  }
  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query }],
      })
      .catch((res) => {
        const errors = res.graphQLErrors.map((error) => error.message);
        this.setState({ errors });
      });
  }
  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default graphql(query)(graphql(mutation)(LoginForm));
