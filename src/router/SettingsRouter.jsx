import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";

const Main = lazy(() => import("../pages/settings/SettingsPage"));
const MyPage = lazy(() => import("../pages/settings/myPage/MyPage"));
const Record = lazy(() => import("../pages/settings/RecordPage"));
const Notifications = lazy(() => import("../pages/settings/NotificationsPage"));
const ChangePassword = lazy(() =>
  import("../pages/settings/myPage/ChangePasswordPage")
);
const UserInfo = lazy(() => import("../pages/settings/myPage/UserInfoPage"));
const Preferences = lazy(() =>
  import("../pages/settings/myPage/PreferencesPage")
);
const Milestone = lazy(() => import("../pages/settings/myPage/MilestonePage"));
const PrivacyPolicyPage = lazy(() => import("../pages/terms/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("../pages/terms/TermsOfUse"));
const Redirect = lazy(() =>
  import("../pages/settings/myPage/SocializeRedirectPage")
);

const SettingsRouter = () => {
  return (
    <Routes>
      <Route
        path=""
        element={
          <Suspense fallback={<LoadingPage />}>
            <Main />
          </Suspense>
        }
      />
      <Route
        path="myPage"
        element={
          <Suspense fallback={<LoadingPage />}>
            <MyPage />
          </Suspense>
        }
      />
      <Route
        path="myPage/userInfo"
        element={
          <Suspense fallback={<LoadingPage />}>
            <UserInfo />
          </Suspense>
        }
      />
      <Route
        path="myPage/changePassword"
        element={
          <Suspense fallback={<LoadingPage />}>
            <ChangePassword />
          </Suspense>
        }
      />
      <Route
        path="myPage/preferences"
        element={
          <Suspense>
            <Preferences />
          </Suspense>
        }
      />
      <Route
        path="myPage/milestone"
        element={
          <Suspense fallback={<LoadingPage />}>
            <Milestone />
          </Suspense>
        }
      />
      <Route
        path="record"
        element={
          <Suspense fallback={<LoadingPage />}>
            <Record />
          </Suspense>
        }
      />
      <Route
        path="notifications"
        element={
          <Suspense fallback={<LoadingPage />}>
            <Notifications />
          </Suspense>
        }
      />
      <Route
        path="redirect"
        element={
          <Suspense fallback={<LoadingPage />}>
            <Redirect />
          </Suspense>
        }
      />
      <Route
        path="privacyPolicy"
        element={
          <Suspense fallback={<LoadingPage />}>
            <PrivacyPolicyPage />
          </Suspense>
        }
      />
      <Route
        path="termsOfUse"
        element={
          <Suspense fallback={<LoadingPage />}>
            <TermsOfUse />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default SettingsRouter;
