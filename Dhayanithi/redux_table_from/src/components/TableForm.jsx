import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRow, updateRow, deleteRow } from "../redux/actions";

const TableForm = () => {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.rows);
  
  const [formState, setFormState] = useState({id: null, name: "", age: "" });
  const [ID, setID] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value,});
    };

  const handleAddRow = () => {
    if (formState.name == '' || formState.age == '' ) {
      alert("Please enter any values in fields")
      return;
    }
    const id = Date.now().toString();
    dispatch(addRow({ ...formState, id }));

    if(ID == null ){  
      setFormState({id: null, name: "", age: "" });
    }
  };

  const handleEdit = (id, index) => {
    setID(id);
    setFormState(rows[index]);
  };

  const handleUpdateRow = () => {
    dispatch(updateRow(ID, formState));
    setID(null);
    setFormState({id: null, name: "", age: "" });
  };

  const handleDeleteRow = (id) => {
    dispatch(deleteRow(id));
  };

  return (
    <div className="columns is-centered mt-6">
    <div className="column is-half">
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
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
      <div className="field">
        <label className="label">Age</label>
        <div className="control">
          <input
            type="number"
            name="age"
            className="input"
            value={formState.age}
            onChange={handleChange}
            placeholder="Age"
            />
        </div>
      </div>
      <div className="buttons">
        {ID !== null &&
        <button className="button is-outline is-primary" onClick={handleUpdateRow}>Update Row</button>
         }
        <button className="button is-link" onClick={handleAddRow}>Add Row</button>
      </div>

         <h1 className="subtitle is-3">Table</h1>
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
                <tr key={index} 
                className={ID !== null && ID === row.id && "has-background-primary-light" }
                >
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>
                    <div className="buttons">
                      <button className="button is-small is-success" onClick={() => handleEdit(row.id, index)}>Edit</button>
                      <button className="button is-small is-warning" onClick={() => handleDeleteRow(row.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              {console.log("rows",rows)}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default TableForm;
