import uuid from 'uuid';

// ADD_GATEPASS
export const addGatePass = (
  {
    Name = '',
    MobileNO = '',
    PassNo = '',
    createdAt = 0,
    createdAtTime = 0,
    ToMeet = '',
    Purpose = '',
    Address = '',
    image = null,
    isOut = true,
    outTime = null
  } = {}
) => ({
  type: 'ADD_GATEPASS',
  gatepass: {
    id: uuid(),
    Name,
    MobileNO,
    PassNo,
    createdAt,
    createdAtTime,
    ToMeet,
    Purpose,
    Address,
    image,
    isOut,
    outTime
  }
});

// REMOVE_GATEPASS
export const removeGatePass = ({ id } = {}) => ({
  type: 'REMOVE_GATEPASS',
  id
});

// EDIT_GATEPASS
export const editGatePass = (id, updates) => ({
  type: 'EDIT_GATEPASS',
  id,
  updates
});

//CHANGE_IN_STATUS
export const changeInStatus = (id) => ({
  type: 'CHANGE_IN_STATUS',
  id
});

//UPDATE_OUTTIME
export const changeOutTime = (id) => ({
  type: 'UPDATE_OUTTIME',
  id
});

export const reset = (id) => ({
  type: "RESET",
  id
});