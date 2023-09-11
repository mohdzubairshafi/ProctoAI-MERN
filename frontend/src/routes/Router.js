import React, { lazy } from 'react';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const ExamLayout = Loadable(lazy(() => import('../layouts/full/ExamLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')));
// const Icons = Loadable(lazy(() => import('../views/icons/Icons')));
// const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')));
// const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
//Student Routes

const TestPage = Loadable(lazy(() => import('./../views/student/TestPage')));
const ExamPage = Loadable(lazy(() => import('./../views/student/ExamPage')));
const ExamDetails = Loadable(lazy(() => import('./../views/student/ExamDetails')));
const ResultPage = Loadable(lazy(() => import('./../views/student/ResultPage')));
//Auth Routes
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Register = Loadable(lazy(() => import('../views/authentication/Register')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));
const UserAccount = Loadable(lazy(() => import('../views/authentication/UserAccount')));

// Teacher Routes
const CreateExamPage = Loadable(lazy(() => import('./../views/teacher/CreateExamPage')));
const ExamLogPage = Loadable(lazy(() => import('./../views/teacher/ExamLogPage')));
const AddQuestions = Loadable(lazy(() => import('./../views/teacher/AddQuestions')));
const PrivateRoute = Loadable(lazy(() => import('src/views/authentication/PrivateRoute')));

const Router = createBrowserRouter(
  createRoutesFromElements(
    // Every router we create will now go in here as
    // they going to be child of our main App component
    <>
      {/* // Private Routes */}
      <Route path="" element={<PrivateRoute />}>
        {/* // Main layout */}
        <Route path="/" element={<FullLayout />}>
          <Route index={true} path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" exact={true} element={<Dashboard />} />
          <Route path="/sample-page" exact={true} element={<SamplePage />} />
          <Route path="/exam" exact={true} element={<ExamPage />} />
          <Route path="/result" exact={true} element={<ResultPage />} />
          <Route path="/create-exam" exact={true} element={<CreateExamPage />} />
          <Route path="/exam-log" exact={true} element={<ExamLogPage />} />
          <Route path="/add-questions" exact={true} element={<AddQuestions />} />
          {/* <Route path="*" element={<Navigate to="/auth/404" />} /> */}
        </Route>
        <Route
          path="/"
          element={
            <ExamLayout />
            // <BlankLayout />
          }
        >
          <Route path="exam/:exam_id" exact={true} element={<ExamDetails />} />
          <Route path="exam/:exam_id/:test_id" exact={true} element={<TestPage />} />
        </Route>
      </Route>
      {/* User layout */}
      <Route path="/user" element={<FullLayout />}>
        <Route path="account" exact={true} element={<UserAccount />} />
      </Route>

      {/* Authentication layout */}
      <Route path="/auth" element={<BlankLayout />}>
        <Route path="404" element={<Error />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        {/* <Route path="*" element={<Navigate to="/auth/404" />} /> */}
      </Route>
    </>,
  ),
);

export default Router;

// const Router = [
//   {
//     path: '/',
//     element: <FullLayout />,
//     children: [
//       { path: '/', element: <Navigate to="/dashboard" /> },
//       { path: '/dashboard', exact: true, element: <Dashboard /> },
//       { path: '/sample-page', exact: true, element: <SamplePage /> },
//       { path: '/exam', exact: true, element: <ExamPage /> },
//       { path: '/result', exact: true, element: <ResultPage /> },
//       { path: '/create-exam', exact: true, element: <CreateExamPage /> },
//       { path: '/exam-log', exact: true, element: <ExamLogPage /> },
//       { path: '/generate-report', exact: true, element: <AddQuestions /> },
//       { path: '*', element: <Navigate to="/auth/404" /> },
//     ],
//   },
//   {
//     path: '/auth',
//     element: <BlankLayout />,
//     children: [
//       { path: '404', element: <Error /> },
//       { path: '/auth/register', element: <Register /> },
//       { path: '/auth/login', element: <Login /> },
//       { path: '*', element: <Navigate to="/auth/404" /> },
//     ],
//   },
// ];
