export const ADD_ROW = 'ADD_ROW';
export const UPDATE_ROW = 'UPDATE_ROW';
export const DELETE_ROW = 'DELETE_ROW';

export const addRow = (row) => ({
  type: ADD_ROW,
  payload: row,
});

export const updateRow = (index, row) => ({
  type: UPDATE_ROW,
  payload: { index, row },
});

export const deleteRow = (index) => ({
  type: DELETE_ROW,
  payload: index,
});
