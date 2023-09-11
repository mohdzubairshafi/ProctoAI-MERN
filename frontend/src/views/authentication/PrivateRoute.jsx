import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const location = useLocation();
  console.log('PRIvate route called ');
  if (!userInfo) {
    console.log('this is use locatom', location);
    // Save the current location before redirecting to login
    localStorage.setItem('redirectLocation', JSON.stringify(location));
  }

  return userInfo ? <Outlet /> : <Navigate to="/auth/login" replace />;
};
export default PrivateRoute;
