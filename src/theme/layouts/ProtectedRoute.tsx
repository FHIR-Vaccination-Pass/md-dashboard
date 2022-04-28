import React from "react";
import { Route } from "react-router-dom";
import { useAuth } from "../../core/auth/auth.contex";
import { useNavigate } from "react-router-dom";
import SweetAlert from "react-bootstrap-sweetalert";

export const ProtectedRoute = ({ ...rest }) => {
  const navigate = useNavigate();
  let [ user, setUser] = useAuth();
  if (!user || !user.token || user.token === "") {
    return (
      <SweetAlert
        title="You must be signed in!"
        onCancel={() => navigate("/auth/signin")}
        onConfirm={() => navigate("/auth/signin")}
        confirmBtnCssClass={"px-5"}
      />
    );
  }

  return <Route {...rest} />;
};
