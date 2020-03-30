import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// Component
import SignIn from '../pages/SignIn';
import Deliveryman from '../pages/Deliveryman';
import Order from '../pages/Order';
import Recipient from '../pages/Recipient';
import Throuble from '../pages/Throuble';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/order" auth component={Order} />
      <Route path="/deliveryman" auth component={Deliveryman} />
      <Route path="/recipient" auth component={Recipient} />
      <Route path="/throuble" auth component={Throuble} />
    </Switch>
  );
}
