import { ADD_ROW, UPDATE_ROW, DELETE_ROW } from './actions';

const initialState = {
  rows: [],
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      return {
        ...state,
        rows: [...state.rows, action.payload],
      };

    case UPDATE_ROW:
      return {
        ...state,
        rows: state.rows.map(row => {
          if (row.id === action.payload.id) {
            return {
              ...row,
              ...action.payload.row,
            };
          }
          return row;
        }),
      };

    case DELETE_ROW:
      return {
        ...state,
        rows: state.rows.filter((row) => row.id !== action.payload),
      };

    default:
      return state;
  }
};

export default tableReducer;
