import React, { Component, useState, useEffect } from 'react'
import ItemBuah from './ItemBuah'
import axios from 'axios'


const DaftarBuah = () => {

    const [dataHargaBuah, setDataHargaBuah] = useState(null)
    const [indexOfForm, setIndexOfForm] = useState(-1)
    const [inputName, setInputName] = useState("")
    const [inputPrice, setInputPrice] = useState(0)
    const [inputWeight, setInputWeight] = useState(0)

    useEffect( () => {
      if( dataHargaBuah === null) {
        axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then(res => {
          setDataHargaBuah(res.data.map(el => {return {id: el.id, nama:el.name, harga:el.price, berat:el.weight}}))
        })
        
       }
    })

    const handleEdit = (event) => {
        let index = event.target.value
        let nama = dataHargaBuah[index].nama
        let harga = dataHargaBuah[index].harga
        let berat = dataHargaBuah[index].berat

        setInputName({inputName: nama})
        setInputPrice({inputPrice: harga})
        setInputWeight({inputWeight: berat})
        // this.setState({inputName: nama, indexOfForm: index})
        // this.setState({inputPrice: harga, indexOfForm: index})
        // this.setState({inputWeight: berat, indexOfForm: index})
    }
  
    const handleChangeName = (event) => {
        setInputName({inputName: event.target.value});
    }

    const handleChangePrice = (event) => {
        setInputPrice({inputPrice: event.target.value});
    }

    const handleChangeWeight = (event) => {
        setInputWeight({inputWeight: event.target.value});
    }

    const handleSubmit = (event) => {
        // menahan submit
    event.preventDefault()

    let name = inputName
    let price = inputPrice
    let weight = inputWeight

    if (name.replace(/\s/g,'') !== ""){      
      let newDataBuah = dataHargaBuah
      let index = indexOfForm
      let data = {nama: name, harga: price, berat: weight}

      if (index === -1){
        newDataBuah = [...newDataBuah, data]
      }else{
        newDataBuah[index] = data
      }

      setDataHargaBuah(newDataBuah)
      setInputName("")
      setInputPrice(0)
      setInputWeight(0)
      // this.setState({
      //   dataHargaBuah: newDataBuah,
      //   inputName: "",
      //   inputWeight: "",
      //   inputPrice: ""
      // })
    }
    }

    const handleDelete = (event) => {
        let index = event.target.value
        let newDataBuah = dataHargaBuah
        let editedDataBuah = newDataBuah[indexOfForm]
        newDataBuah.splice(index, 1)

        if (editedDataBuah !== undefined){
        // array findIndex baru ada di ES6
        var newIndex = newDataBuah.findIndex((el) => el === editedDataBuah)
        setDataHargaBuah({dataHargaBuah: newDataBuah, indexOfForm: newIndex})
        
        }else{
        
        setDataHargaBuah({dataHargaBuah: newDataBuah})
        }

    }

    return (
      <>
        <h1>Tabel Harga Buah</h1>
        <table style={{border: "1px solid", width: "40%", margin: "0 auto"}}>
          <thead style={{background: "#aaa"}}>
            <tr>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody style={{background: "coral"}}>
            {dataHargaBuah.map((el, index)=> {
              return (
                <>
                    <tr>
                        <ItemBuah item={el} key={index}/>
                        <td>
                        <button onClick={handleEdit} value={index}>Edit</button>
                        &nbsp;
                        <button onClick={handleDelete} value={index}>Delete</button>
                        </td>
                    </tr>
                </>
                )
              })}
          </tbody>
        </table>
        <h1>Form Data Buah</h1>
        <form onSubmit={handleSubmit}>
          <label style={{display: "block", textAlign: "center"}}>
            Masukkan nama buah:
          <input type="text" value={inputName} onChange={handleChangeName}/>
          </label>          
          <label style={{display: "block", textAlign: "center"}}>
            Masukkan harga buah:
          <input type="text" value={inputPrice} onChange={handleChangePrice}/>
          </label>          
          <label style={{display: "block", textAlign: "center"}}>
            Masukkan berat buah:
          <input type="text" value={inputWeight} onChange={handleChangeWeight}/>
          </label>          
          <button style={{display: "block", textAlign: "center"}}>submit</button>
        </form>
      </>
    )
}

export default DaftarBuah