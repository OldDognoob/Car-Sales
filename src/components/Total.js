import React from "react";
import { connect } from "react-redux";

const Total = ({ price, carR }) => {
  console.log("CONSOLE OUTPUT: Total -> carR", carR);
  console.log("CONSOLE OUTPUT: Total -> price", price);

  return (
    <div className="content">
      <h4>Total Amount: ${carR.price + price}</h4>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    price: state.priceR,
    carR: state.carR
  };
}

export default connect(mapStateToProps, {})(Total);
