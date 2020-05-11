import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// Component
import SignIn from '../pages/SignIn';
import Deliveryman from '../pages/Deliveryman';
import Order from '../pages/Order';
import Recipient from '../pages/Recipient';
import Throuble from '../pages/Throuble';
import DeliverymanRegister from '../pages/DeliverymanRegister';
import RecipientRegister from '../pages/RecipientRegister';
import OrderRegister from '../pages/OrderRegister';
import DeliverymanEdit from '../pages/DeliverymanEdit';
import RecipientEdit from '../pages/RecipientEdit';
import OrderEdit from '../pages/OrderEdit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/order/register" exact auth component={OrderRegister} />
      <Route path="/order/edit/:id" auth component={OrderEdit} />
      <Route path="/order" auth component={Order} />
      <Route path="/deliveryman/register" exact auth component={DeliverymanRegister} />
      <Route path="/deliveryman/edit/:id" auth component={DeliverymanEdit} />
      <Route path="/deliveryman" auth component={Deliveryman} />
      <Route path="/recipient/register" exact auth component={RecipientRegister} />
      <Route path="/recipient/edit/:id" auth component={RecipientEdit} />
      <Route path="/recipient" auth component={Recipient} />
      <Route path="/throuble" auth component={Throuble} />
    </Switch>
  );
}
