import React from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the folloing ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}¥</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType='Success' clicked={props.purchageContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OderSummary;
