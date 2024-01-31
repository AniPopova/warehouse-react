import { useNavigate } from 'react-router-dom';

export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');

  if (storedExpirationDate === null) {
    return 0; 
  }

  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

export function tokenLoader() {
  const token = getAuthToken();
  return token;
}

export function checkAuthLoader() {
  const token = getAuthToken();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate(); 

  if (!token) {
    navigate('/auth');
  }
}
