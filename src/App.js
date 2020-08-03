import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Form Pembelian Buah</h1>
      <table>
        <tr>
          <td class='bold'>Nama Pelanggan</td>
          <td><input type="text" class='input-nama'></input></td>
        </tr>
        <tr>
          <td class='bold'>Daftar Item</td>
          <td>
            <p><input type='checkbox'/>Semangka</p>
            <p><input type='checkbox'/>Jeruk</p>
            <p><input type='checkbox'/>Nanas</p>
            <p><input type='checkbox'/>Salak</p>
            <p><input type='checkbox'/>Anggur</p>
          </td>
        </tr>
      </table>
      <td><input type='submit' class='btn' value="Kirim" /></td>
    </div>
  );
}

export default App;
