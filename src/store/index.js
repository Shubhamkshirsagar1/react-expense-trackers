import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "./reducer";

export const INITIAL_STORE = [
  {
    id: "1",
    title: "Swiggy Order",
    Description: "I was feeling hungry",
    expenseType: "EXPENSE",
    amount: 1200,
    date: "2020-02-18",
  },
];

export const store = createStore(reducer, INITIAL_STORE, composeWithDevTools());