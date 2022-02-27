import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.scss";

const App = () => {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ]);

  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  return (
    <div className="App-header">
      <div className="ag-theme-default" style={{ height: 400, width: 600 }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
      </div>
    </div>
  );
};

export default App;
