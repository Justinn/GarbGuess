const GOT_INVENTORY = 'GOT_INVENTORY';

const gotInventory = inventory => {
  return {
    type: GOT_INVENTORY,
    inventory,
  };
};

export const getInventoryByUserId = (id) => {
    return async (dispatch, getState, { axios }) => {
      const { data } = await axios.get('/api/users/1/inventory');
      dispatch(gotAllStudents(data));
    };
  };

const initialState = {
  user: {},
  inventory: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_INVENTORY:
      return { ...state, inventory: action.inventory };
    default:
      return state;
  }
};

export default userReducer;
