import React, { Component } from 'react'
import ItemBuah from './ItemBuah'


class DaftarBuah extends Component {
    constructor(props) {
        super()
        this.state = {
            dataHargaBuah : [
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
              ],
            indexOfForm : -1
            }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeWeight = this.handleChangeWeight.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit(event) {
        let index = event.target.value
        let nama = this.state.dataHargaBuah[index].nama
        let harga = this.state.dataHargaBuah[index].harga
        let berat = this.state.dataHargaBuah[index].berat
        this.setState({inputName: nama, indexOfForm: index})
        this.setState({inputPrice: harga, indexOfForm: index})
        this.setState({inputWeight: berat, indexOfForm: index})
    }
  
    handleChangeName(event) {
        this.setState({inputName: event.target.value});
    }

    handleChangePrice(event) {
        this.setState({inputPrice: event.target.value});
    }

    handleChangeWeight(event) {
        this.setState({inputWeight: event.target.value});
    }

    handleSubmit(event) {
        // menahan submit
    event.preventDefault()

    let name = this.state.inputName
    let price = this.state.inputPrice
    let weight = this.state.inputWeight

    if (name.replace(/\s/g,'') !== ""){      
      let newDataBuah = this.state.dataHargaBuah
      let index = this.state.indexOfForm
      let data = {nama: name, harga: price, berat: weight}

      if (index === -1){
        newDataBuah = [...newDataBuah, data]
      }else{
        newDataBuah[index] = data
      }

      this.setState({
        dataHargaBuah: newDataBuah,
        inputName: "",
        inputWeight: "",
        inputPrice: ""
      })
    }
    }

    handleDelete(event) {
        let index = event.target.value
        let newDataBuah = this.state.dataHargaBuah
        let editedDataBuah = newDataBuah[this.state.indexOfForm]
        newDataBuah.splice(index, 1)

        if (editedDataBuah !== undefined){
        // array findIndex baru ada di ES6
        var newIndex = newDataBuah.findIndex((el) => el === editedDataBuah)
        this.setState({dataHargaBuah: newDataBuah, indexOfForm: newIndex})
        
        }else{
        
        this.setState({dataHargaBuah: newDataBuah})
        }

    }

    render() {
    
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
            {this.state.dataHargaBuah.map((el, index)=> {
              return (
                <>
                    <tr>
                        <ItemBuah item={el} key={index}/>
                        <td>
                        <button onClick={this.handleEdit} value={index}>Edit</button>
                        &nbsp;
                        <button onClick={this.handleDelete} value={index}>Delete</button>
                        </td>
                    </tr>
                </>
                )
              })}
          </tbody>
        </table>
        <h1>Form Data Buah</h1>
        <form onSubmit={this.handleSubmit}>
          <label style={{display: "block", textAlign: "center"}}>
            Masukkan nama buah:
          <input type="text" value={this.state.inputName} onChange={this.handleChangeName}/>
          </label>          
          <label style={{display: "block", textAlign: "center"}}>
            Masukkan harga buah:
          <input type="text" value={this.state.inputPrice} onChange={this.handleChangePrice}/>
          </label>          
          <label style={{display: "block", textAlign: "center"}}>
            Masukkan berat buah:
          <input type="text" value={this.state.inputWeight} onChange={this.handleChangeWeight}/>
          </label>          
          <button style={{display: "block", textAlign: "center"}}>submit</button>
        </form>
      </>
    )
  }
}

export default DaftarBuah