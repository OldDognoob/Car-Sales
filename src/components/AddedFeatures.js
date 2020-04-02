import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../state";

import AddedFeature from "./AddedFeature";

export const AddedFeatures = ({ carFeatures, removeFeature }) => {
  const takeOut = item => {
    removeFeature(item);
  };

  return (
    <div className="content">
      <h6>Added features:</h6>
      {carFeatures.features.length ? (
        <ol type="1">
          {carFeatures.features.map((item, i) => (
            <AddedFeature key={i} feature={item} removeFeature={takeOut} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    carFeatures: state.carR
  };
}
//STEP-8 USE connect FROM react-redux to WRAP OUR COMPONENT
export default connect(
  mapStateToProps, 
  //STEP-9 BRING IN THE ACTION CREATORS
  { removeFeature }
  )(AddedFeatures);