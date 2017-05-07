import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../action/cart';
import Shelf from './shelf';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  render() {
    // const cartItems = this.props.cart.map((item, idx) => {
    //   return <li key={idx}> {item} </li>;
    // )};

    const cartItems = this.props.cart.map((item, idx) => {
         return <li key={idx}>{item}</li>;
     });

    return (
      <div className="Cart">
        <Shelf addItem={this.props.action.addToCart} />

        <h2> cart items </h2>
        <ol>
          {cartItems}
        </ol>
      </div>
    );
  }
}

function mapStatetoProps(state, prop) {
  return {
    cart: state.cart
  }
}

function mapDispatchtoProps(dispatch) {
  return {
    action: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Cart);
