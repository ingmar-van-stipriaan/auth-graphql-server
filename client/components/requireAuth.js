import React, { useEffect } from "react";
import { graphql } from "@apollo/client/react/hoc";
import query from "../queries/CurrentUser";
import { useNavigate } from "react-router-dom";

export default (WrappedComponent) => {
  function RequireAuth(props) {
    const navigate = useNavigate();

    useEffect(() => {
      if (!props.data.loading && !props.data.currentUser) {
        return navigate("/login");
      }
    });

    return <WrappedComponent {...props} />;
  }

  return graphql(query)(RequireAuth);
};
