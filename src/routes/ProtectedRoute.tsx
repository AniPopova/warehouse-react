import React from "react";
import { useAuth } from "../components/auth/ProvideAuth";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
}: ProtectedRouteProps) => {
  const { user } = useAuth();

  return user ? <>{children}</> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;



