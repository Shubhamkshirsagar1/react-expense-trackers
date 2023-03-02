import { INITIAL_STORE } from ".";
import { ADD_EXPENSE, DELETE_EXPENSE } from "./action";

export const reducer = (state = INITIAL_STORE, action) => {
  console.log("States",state);
  switch (action.type) {
    case ADD_EXPENSE:
      const newData = { ...action.data };
      newData.id = state.length + 1;
      return [...state, newData];
    case DELETE_EXPENSE:
      const newStore = state.filter((expenseObj) => {
        if (expenseObj.id !== action.id) return expenseObj;
      });
      return newStore
    default:
      return state;
  }
};
