import React, { Component } from "react";

class CheckOut extends Component {
  render() {
    let cartItem = {
      cartItems: [
        {
          id: 5,
          name: "Bluebeery",
          price: 10,
          quantity: 3,
        },
        {
          id: 5,
          name: "Bluebeery",
          price: 10,
          quantity: 5,
        },
      ],
    };
    let { cartItems } = cartItem;
    let cartEmpty = false;
    return (
      <div>
        <h1>你的購物車</h1>

        {cartEmpty && (
          <div>
            No Product
            <br />
          </div>
        )}
        {!cartEmpty && (
          <div>
            <div id="cartSection">
              {/*列表 */}
              {cartItems[0].name}
            </div>
            <div id="checkOutSection">{/*totalPrice + freeFee*/}</div>
          </div>
        )}
      </div>
    );
  }
}

export default CheckOut;
