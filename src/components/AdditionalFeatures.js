import React from "react";
import AdditionalFeature from "./AdditionalFeature";
import { connect } from "react-redux";
import { addFeature } from "../state";
export const AdditionalFeatures = ({ features, addFeature }) => {
  const buyItem = item => {
    addFeature(item);
  };
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AdditionalFeature
              key={item.id}
              feature={item}
              addFeature={buyItem}
              id={item.id}
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    features: state.addFeatures
  };
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
