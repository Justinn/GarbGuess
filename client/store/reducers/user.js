const GOT_INVENTORY = 'GOT_INVENTORY';
const ADDED_TO_INVENTORY = 'ADDED_TO_INVENTORY';

const gotInventory = inventory => {
  return {
    type: GOT_INVENTORY,
    inventory,
  };
};

const addedToInventory = item => {
  return {
    type: ADDED_TO_INVENTORY,
    item,
  };
};

export const getInventory = () => {
  return async (dispatch, getState, { axios }) => {
    const { data } = await axios.get('/api/users/1');
    dispatch(gotUser(data));
  };
};

export const addItemToInventory = id => {
  return async (dispatch, getState, { axios }) => {
    const { data } = await axios.get(`/api/items/${id}`);
    dispatch(addedToInventory(data));
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
    case ADDED_TO_INVENTORY:
      return { ...state, inventory: [...state.inventory, action.item] };
    default:
      return state;
  }
};

export default userReducer;
