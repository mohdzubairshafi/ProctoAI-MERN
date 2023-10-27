import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TeacherRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const isTeacher = userInfo.role === 'teacher';

  return isTeacher ? <Outlet /> : <Navigate to="/dashboard" replace />;
};
export default TeacherRoute;
