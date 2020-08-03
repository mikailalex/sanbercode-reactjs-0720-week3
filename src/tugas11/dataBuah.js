import React from 'react';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

class NamaBuah extends React.Component {
    render() {
        return <p>{this.props.nama}</p>
    }
}

class HargaBuah extends React.Component {
    render() {
        return <p>{this.props.harga}</p>
    }
}

class BeratBuah extends React.Component {
    render() {
        return <p>{this.props.berat / 1000} kg</p>
    }
}

class TabelHargaBuah extends React.Component {
    render() {
        return (
            <>
                <h1>Tabel Harga Buah</h1>
                <table>
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                    </tr>
                    {dataHargaBuah.map(el => {
                        return (
                            <tr>
                                <td><NamaBuah nama={el.nama}/></td>
                                <td><HargaBuah harga={el.harga}/></td>
                                <td><BeratBuah berat={el.berat}/></td>
                            </tr>
                        )
                    })}
                </table>
            </>
        )
    }
}

export default TabelHargaBuah;