import React, { useState, useEffect } from "react";
import AuthForm from "./AuthForm";
import mutation from "../mutations/Login";
import { graphql } from "@apollo/client/react/hoc";
import query from "../queries/CurrentUser";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

function LoginForm(props) {
  const [errors, setErrors] = useState([]);
  const [login, { data, loading, error }] = useMutation(mutation, {
    refetchQueries: [{ query }],
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.data.loading && props.data.currentUser) {
      navigate("/dashboard");
    }
  });

  function onSubmit({ email, password }) {
    login({
      variables: { email, password },
    }).catch((res) => {
      const errorsList = res.graphQLErrors.map((error) => error.message);
      setErrors(errorsList);
    });
  }

  return (
    <div>
      <h3>Login</h3>
      <AuthForm onSubmit={onSubmit.bind(this)} errors={errors} />
    </div>
  );
}

export default graphql(query)(graphql(mutation)(LoginForm));
