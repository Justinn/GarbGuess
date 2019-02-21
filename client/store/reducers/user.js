const GOT_INVENTORY = 'GOT_INVENTORY';
const ADDED_TO_INVENTORY = 'ADDED_TO_INVENTORY';

const gotInventory = inventory => {
  return {
    type: GOT_INVENTORY,
    inventory,
  };
};

const addedToInventory = id => {
  return {
    type: ADDED_TO_INVENTORY,
    id,
  };
};

export const getInventoryByUserId = id => {
  return async (dispatch, getState, { axios }) => {
    const { data } = await axios.get('/api/users/1/inventory');
    dispatch(gotAllStudents(data));
  };
};

export const addItemToInventory = id => {
    return async (dispatch, getState, { axios }) => {
        const { data } = await axios.get(`/api/items/${id}`);
        dispatch(addedToInventory(data));
      };
}

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
