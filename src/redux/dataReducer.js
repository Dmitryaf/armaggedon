const SET_DATA = 'SET_DATA';
const SET_MEASURE = 'SET_MEASURE';
const TOGGLE_IS_DANGER = 'TOGGLE_IS_DANGER';
const ADD_TO_DESTRUCTION_CART = 'ADD_TO_DESTRUCTION_CART';

const initialState = {
  data: [],
  destructionCart: [],
  isDanger: false,
  measure: 'км',
};

export default function dataReducer(state = initialState, action) {
  console.log(state.destructionCart);
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_MEASURE:
      return {
        ...state,
        measure: action.payload,
      };
    case TOGGLE_IS_DANGER:
      return {
        ...state,
        isDanger: !state.isDanger,
      };
    case ADD_TO_DESTRUCTION_CART:
      return {
        ...state,
        destructionCart: [],
      };

    default:
      return state;
  }
}

export const setData = (data) => ({ type: SET_DATA, payload: data });
export const setMeasure = (measure) => ({
  type: SET_MEASURE,
  payload: measure,
});
export const toggleIsDanger = () => ({
  type: TOGGLE_IS_DANGER,
});
export const addToDesctructionCart = (id) => ({
  type: ADD_TO_DESTRUCTION_CART,
  id,
});
