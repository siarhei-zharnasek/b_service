import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectors } from 'features/Counter/store';
import { decrease, increase } from 'features/Counter/store/count';

export const Counter: React.FC = () => {
  const count = useSelector(selectors.getCount);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <strong>{count}</strong>
      <button
        className="waves-effect waves-teal btn-flat blue"
        type="button"
        data-qa="decrement-counter"
        onClick={() => dispatch(decrease())}
      >
        decrement
      </button>
      <button
        className="waves-effect waves-teal btn-flat red"
        type="button"
        data-qa="increment-counter"
        onClick={() => dispatch(increase())}
      >
        increment
      </button>
    </Fragment>
  );
};
