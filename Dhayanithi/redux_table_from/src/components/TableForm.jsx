import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRow, updateRow, deleteRow } from "../redux/actions";

const TableForm = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.rows);
  // const formData = useSelector((state) => state.formData);

  const [formState, setFormState] = useState({ name: "", age: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleAddRow = () => {
    if (formState.name == '' || formState.age == '' ) {
      alert("Please enter any values in fields")
      return;
    }
    dispatch(addRow(formState))
    setFormState({ name: "", age: "" });
  };

  const handleUpdateRow = (index) => {
    setFormState(rows[index]);
    // dispatch(deleteRow(index));
    dispatch(updateRow(index, formState));
  };

  const handleDeleteRow = (index) => {
    dispatch(deleteRow(index));
  };

  return (
    <div className="columns is-centered">
    <div className="column is-half">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input
            type="text"
            name="name"
            className="input"
            value={formState.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Age</label>
        <div class="control">
          <input
            type="text"
            name="age"
            className="input"
            value={formState.age}
            onChange={handleChange}
            placeholder="Age"
            />
        </div>
      </div>
      <button className="button is-link" onClick={handleAddRow}>Add Row</button>


          <table className="table is-primary mt-5 is-fullwidth is-bordered ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th >Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td className="buttons">
                    <button className="button is-small is-success" onClick={() => handleUpdateRow(index)}>Update</button>
                    <button className="button is-small is-warning" onClick={() => handleDeleteRow(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default TableForm;
