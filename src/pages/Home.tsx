import React, { Fragment } from 'react';
import { Counter } from '../features/Counter/components/Counter';

export const Home: React.FC = () => (
  <Fragment>
    <h1>Billing Home Page</h1>
    <Counter />
  </Fragment>
);
