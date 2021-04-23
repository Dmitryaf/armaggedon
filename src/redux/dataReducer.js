const SET_DATA = 'SET_DATA';

const initialState = {
  data: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
}

export const setData = (data) => ({ type: SET_DATA, payload: data });