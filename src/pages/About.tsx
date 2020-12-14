import React, { Fragment } from 'react';
import { version } from 'useless-lib';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';

export const About: React.FC = () => {
  const { path, url } = useRouteMatch();

  return (
    <Fragment>
      <h1>Billing About Page</h1>
      <p>useless-lib version is {version}</p>

      <p>
        <Link to="/billing">Back to Billing Home</Link>
      </p>
    </Fragment>
  );
};
