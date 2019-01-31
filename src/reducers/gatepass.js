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
    default:
      return state;
  }
};
