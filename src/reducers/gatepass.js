import moment from "moment";

// Gatepass Reducer

const gatepassReducerDefaultState = [];

export default (state = gatepassReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_GATEPASS':
      return [
        ...state,
        action.gatepass
      ];
    case 'REMOVE_GATEPASS':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_GATEPASS':
      return state.map((gatepass) => {
        if (gatepass.id === action.id) {
          return {
            ...gatepass,
            ...action.updates
          };
        } else {
          return gatepass;
        };
      });
    case 'CHANGE_IN_STATUS':
      return state.map((gatepass) => {
        if (gatepass.id === action.id) {
          return {
            ...gatepass,
            isOut: !gatepass.isOut
          }
        } else {
          return gatepass;
        };
      });
    case 'UPDATE_OUTTIME':
      return state.map((gatepass) => {
        if(gatepass.id === action.id) {
          return {
            ...gatepass, 
            outTime: moment()
          }
        } else {
          return gatepass;
        }
      });
    case 'RESET':
      return state.map((gatepass) => {
        if(gatepass.id === action.id) {
          return {
            ...gatepass, 
            outTime: null,
            isOut: !!gatepass.isOut
          }
        } else {
          return gatepass;
        }
      });
    case 'SET_GATEPASS':
      return action.gatepass;
    default:
      return state;
  }
};
