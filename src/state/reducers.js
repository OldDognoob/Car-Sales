/* eslint-disable no-unused-vars */
import * as types from "./actionTypes";
// STEP 1 DESIGN APPLICATION STATE
const initialCar = {
  price: 26395,
  name: "2019 Ford Mustang",
  image:
    "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
  features: []
};
const additionalFeatures = [
  { id: 1, name: "V-6 engine", price: 1500 },
  { id: 2, name: "Racing detail package", price: 1500 },
  { id: 3, name: "Premium sound system", price: 500 },
  { id: 4, name: "Rear spoiler", price: 250 }
];

const initialAdditionalPrice = 0;
// STEP-3 CREATE ONE REDUCER FUNCTION PER SLICE OF STATE
export function priceReducer(price = initialAdditionalPrice, action) {
  switch (action.type) {
    case types.ADD_FEATURE:
      return price + action.payload.newFeature.price;
    case types.REMOVE_FEATURE:
      return price - action.payload.feature.price;
    default:
      return price;
  }
}

export function carReducer(car = initialCar, action) {
  switch (action.type) {
    case types.ADD_FEATURE:
      return {
        ...car,
        features: [...car.features, action.payload.newFeature]
      };
    case types.REMOVE_FEATURE:
      return {
        ...car,
        features: [
          ...car.features.filter(
            randomFeature => randomFeature.id !== action.payload.feature.id
          )
        ]
      };
    default:
      return car;
  }
}

export function additionalFeaturesReducer(
  moreFeatures = additionalFeatures,
  action
) {
  switch (action.type) {
    default:
      return moreFeatures;
  }
}
