import React from 'react';
import TabelHargaBuah from './tugas11/dataBuah'
import './App.css';
import Timer from './tugas12/Timer';
import Clock from './tugas12/Clock';


function App() {
  return (
    <div>
      <TabelHargaBuah />
      <p style={{textAlign: "left", display: "inline"}}>sekarang jam :<Clock /></p>
      <p style={{float: "right", display: "inline"}}>hitung mundur:<Timer /></p>
    </div>
  );
}

export default App;