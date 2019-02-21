const GOT_ALL_ITEMS = 'GOT_ALL_ITEMS';

const gotAllItems = () => {
  return {
    type: GOT_ALL_ITEMS,
    items,
  };
};

export const getAllItems = () => {
    return async (dispatch, getState, { axios }) => {
      const { data } = await axios.get('/api/items');
      dispatch(gotAllItems(data));
    };
  };

const initialState = {
  availableItems: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_ITEMS:
      return { ...state, availableItems: action.items };
    default:
      return state;
  }
};

export default itemReducer;
