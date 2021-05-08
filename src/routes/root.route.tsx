import React from 'react';
import GlobalErrorBoundary from '#Comp/Layout/GlobalErrorBoundary';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';

const HomePage = React.lazy(() => import(/* webpackChunkName:  "HomePage" */ '#Pages/Home'));
const TestPage = React.lazy(() => import(/* webpackChunkName:  "TestPage" */ '#Pages/Test'));
const HooksPage = React.lazy(
  () => import(/* webpackChunkName:  "HooksPage" */ '#Pages/Test/Hooks'),
);
const NotFoundPage = React.lazy(() => import(/* webpackChunkName:  "NotFoundPage" */ '#Pages/404'));

const RootContainer: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalErrorBoundary>
        <React.Suspense fallback={<Spin size="large" />}>
          <Switch>
            <Route path="/hooks" component={HooksPage} />
            <Route path="/test" component={TestPage} />
            <Route path="/" component={HomePage} />
            <Route component={NotFoundPage} />
          </Switch>
        </React.Suspense>
      </GlobalErrorBoundary>
    </BrowserRouter>
  );
};

export default RootContainer;
