import { ADD_ROW, UPDATE_ROW, DELETE_ROW } from './actions';

const initialState = {
  rows: [],
  // formData: { name: '', age: '' },
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      return {
        ...state,
        rows: [...state.rows, action.payload],
      };
    case UPDATE_ROW:
      const updatedRows = [...state.rows];
      updatedRows[action.payload.index] = action.payload.row;
      return {
        ...state,
        rows: updatedRows,
      };
    case DELETE_ROW:
      return {
        ...state,
        rows: state.rows.filter((_, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default tableReducer;
