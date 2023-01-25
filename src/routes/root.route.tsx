import React from 'react';
import GlobalErrorBoundary from '#Comp/Layout/GlobalErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Spin } from 'antd';

const HomePage = React.lazy(() => import(/* webpackChunkName:  "HomePage" */ '#Pages/Home'));
const TestPage = React.lazy(() => import(/* webpackChunkName:  "TestPage" */ '#Pages/Test'));
const TestDetailPage = React.lazy(() => import(/* webpackChunkName:  "TestDetailPage" */ '#Pages/Test/Detail'));
const HooksPage = React.lazy(
  () => import(/* webpackChunkName:  "HooksPage" */ '#Pages/Test/Hooks'),
);
const NotFoundPage = React.lazy(() => import(/* webpackChunkName:  "NotFoundPage" */ '#Pages/404'));

const RootContainer: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalErrorBoundary>
        <React.Suspense fallback={<Spin size="large" />}>
          <Routes>
            <Route path="/hooks" element={<HooksPage/>} />
            <Route path="/test" element={<TestPage/>} />
            <Route path="/test/:id" element={<TestDetailPage/>} />
            <Route path="/" element={<HomePage/>} />
            <Route element={<NotFoundPage/>} />
          </Routes>
        </React.Suspense>
      </GlobalErrorBoundary>
    </BrowserRouter>
  );
};

export default RootContainer;
