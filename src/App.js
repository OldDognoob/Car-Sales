import React from "react";
import ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import Header from "./components/Header";
import {
  priceReducer,
  carReducer,
  additionalFeaturesReducer
} from "./state";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

//STEP-4 USE combineReducers FROM REDUX TO MAKE A SINGLE REDUCER
const monsterReducer = combineReducers({
  priceR: priceReducer,
  carR: carReducer,
  addFeatures: additionalFeaturesReducer
});
//STEP-5 USE creatStore FROM REDUX TO CREATE A STATE STORE
const store = createStore(
  monsterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  const state = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: "2019 Ford Mustang",
      image:
        "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: []
    },
    additionalFeatures: [
      { id: 1, name: "V-6 engine", price: 1500 },
      { id: 2, name: "Racing detail package", price: 1500 },
      { id: 3, name: "Premium sound system", price: 500 },
      { id: 4, name: "Rear spoiler", price: 250 }
    ]
  };

  return (
    <div className="boxes">
      <Provider store={store}>
        <div className="box">
          <Header car={state.car} />
          <AddedFeatures />
        </div>
        <div className="box">
          <AdditionalFeatures />
          <Total />
        </div>
      </Provider>
    </div>
  );
};

export default App;

ReactDOM.render(
  // STEP-6 WRAP THE APPLICATION WITH A PROVIDER FROM REACT-REDUX
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);