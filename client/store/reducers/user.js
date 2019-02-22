const GOT_INVENTORY = 'GOT_INVENTORY';
const ADDED_TO_INVENTORY = 'ADDED_TO_INVENTORY';
const FILTERED_ITEMS = 'FILTERED_ITEMS';

const filteredItems = (weather, worn, color) => {
  return {
    type: FILTERED_ITEMS,
    weather,
    worn,
    color,
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

export const filterItems = weather => {
  return async (dispatch, getState, { axios }) => {
    dispatch(filteredItems(weather));
  };
};

const initialState = {
  user: {},
  inventory: [],
  filteredItems: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_INVENTORY:
      return { ...state, inventory: action.inventory };
    case ADDED_TO_INVENTORY:
      return { ...state, inventory: [...state.inventory, action.item] };
    case FILTERED_ITEMS:
      let items;
      action.weather === 'any'
        ? (items = state.inventory)
        : (items = [
            ...state.inventory.filter(item => item.season === action.weather),
          ]);
      return {
        ...state,
        filteredItems: items,
      };
    default:
      return state;
  }
};

export default userReducer;
