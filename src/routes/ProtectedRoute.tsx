import { useAuth } from '../components/auth/ProvideAuth';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children?: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();

  return user ? (
    children
  ) : (
    <Navigate to="/auth" replace /> 
  );
};

export default ProtectedRoute;
