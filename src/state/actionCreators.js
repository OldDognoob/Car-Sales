import * as types from "./actionTypes";

export function addFeature(newFeature) {
  return {
    type: types.ADD_FEATURE,
    payload: { newFeature }
  };
}

export function removeFeature(feature) {
  return {
    type: types.REMOVE_FEATURE,
    payload: { feature }
  };
}