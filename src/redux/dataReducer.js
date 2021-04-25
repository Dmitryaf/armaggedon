const SET_DATA = 'SET_DATA';
const SET_MEASURE = 'SET_MEASURE';
const TOGGLE_IS_DANGER = 'TOGGLE_IS_DANGER';
const ADD_TO_DESTRUCTION_CART = 'ADD_TO_DESTRUCTION_CART';
const DELETE_FROM_DESTRUCTION_CART = 'DELETE_FROM_DESTRUCTION_CART';
const SET_OFFSET = 'SET_OFFSET';
const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';

const initialState = {
  data: [],
  destructionCart: [],
  currentItem: {},
  measure: 'км',
  offset: 5,
  isDanger: false,
  isFetching: false,
};

export default function dataReducer(state = initialState, action) {
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
        isDanger: action.payload,
      };
    case ADD_TO_DESTRUCTION_CART:
      const asteroidItem = state.data.find((item) => item.id === action.id);
      const existedItem = state.destructionCart.find((item) => {
        if (item) {
          return item.id === action.id;
        }
      });

      return {
        ...state,
        destructionCart: existedItem
          ? [...state.destructionCart]
          : [...state.destructionCart, asteroidItem],
      };
    case DELETE_FROM_DESTRUCTION_CART:
      return {
        ...state,
        destructionCart: [
          ...state.destructionCart.filter((item) => item.id !== action.id),
        ],
      };
    case SET_OFFSET:
      return {
        ...state,
        offset: state.offset + 5,
      };
    case SET_CURRENT_ITEM:
      localStorage.setItem('currentItem', JSON.stringify(action.payload));
      return {
        ...state,
        currentItem: action.payload,
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
export const toggleIsDanger = (isDanger) => ({
  type: TOGGLE_IS_DANGER,
  payload: isDanger,
});
export const addToDesctructionCart = (id) => ({
  type: ADD_TO_DESTRUCTION_CART,
  id,
});
export const deleteFromDesctructionCart = (id) => ({
  type: DELETE_FROM_DESTRUCTION_CART,
  id,
});
export const setOffset = (isFetching) => ({
  type: SET_OFFSET,
  isFetching,
});
export const setCurrentItem = (data) => ({
  type: SET_CURRENT_ITEM,
  payload: data,
});
