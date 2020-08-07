import React, {Component} from "react"

const ItemBuah = (props) => {
  
  return(
      <>
          <td>{props.item.nama}</td>
          <td>{props.item.harga}</td>
          <td>{props.item.berat/1000} kg</td>
      </>
  )
}

export default ItemBuah