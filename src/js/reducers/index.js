import { combineReducers } from "redux";
import AllEmployees from "./reducer-employees";
import currentEmployee from "./reducer-currentemployee";
import loggedinEmployee from "./reducer-loggedinemployee";
import analysisdata from "./reducer-analysis";
import role from "./reducer-setrole";
import connection from "./reducer-connection";
// import ActiveUserReducer from './reducer-active-user';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const combinedReducers = combineReducers({
  employees: AllEmployees,
  currentEmployee: currentEmployee,
  loggedinEmployee:loggedinEmployee,
  analysisdata:analysisdata,
  role:role,
  connection:connection
});

// function crossSliceReducer(state, action) {
  
//   switch (action.type) {
//     case "EMPLOYEE_UPDATED": {
//       return {
//         employees: updateEmployeeList(state.employees, action.payload),
//         currentEmployee: action.payload
//       };
//     }
//     default:
//       return state;
//   }
// }

// function updateEmployeeList(employees, employee) {
//   employees.forEach((val, i) => {
//     if (val.id === employee.id) {
//       employees[i] = employee;
//     }
//   });
//   return employees;
// }

// function rootReducer(state, action) {
//   const intermediateState = combinedReducers(state, action);
//   const finalState = crossSliceReducer(intermediateState, action);
//   return finalState;
// }
export default combinedReducers;
