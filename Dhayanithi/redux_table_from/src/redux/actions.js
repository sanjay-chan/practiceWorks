export const ADD_ROW = 'ADD_ROW';
export const UPDATE_ROW = 'UPDATE_ROW';
export const DELETE_ROW = 'DELETE_ROW';

export const addRow = (row) => ({
  type: ADD_ROW,
  payload: row,
});

export const updateRow = (id, row) => ({
  type: UPDATE_ROW,
  payload: { id, row },
});

export const deleteRow = (id) => ({
  type: DELETE_ROW,
  payload: id,
});
