import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_GATEPASS
export const addGatePass = (
  {
    id,
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
    id,
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

//startAddGatepass
export const startAddGatepass = (gatePassData = {}) => {
  return (dispatch) => {
    const {
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
    } = gatePassData;
    
    const gatePass = {Name, MobileNO, PassNo, createdAt, createdAtTime, ToMeet, Purpose, Address, image, isOut, outTime};
    
    return database.ref('gatepass').push(gatePass).then((ref) => {
      console.log('data',gatePass);
      dispatch(addGatePass({
        id: ref.key,
        ...gatePass
      }));
    }).catch((e) => {
      console.log('error ', e);
    })
  }
}

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

//RESET
export const reset = (id) => ({
  type: "RESET",
  id
});

//SET_GATEPASS
export const setGatePasses = (gatepass) => ({
  type: 'SET_GATEPASS',
  gatepass
});

export const startSetGatePasses = () => {
  return (dispatch) => {
    
    return database.ref('gatepass').once('value').then((snapshot) => {
      const gatepass = [];

      snapshot.forEach((childSnapshot) => {
        gatepass.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      
      dispatch(setGatePasses(gatepass));
    });
  };
};  