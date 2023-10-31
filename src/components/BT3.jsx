import React, { Component } from 'react'

export default class BT3 extends Component {
   

  render() {
      let date = new Date();
      let localeString = date.toLocaleString();
      return(
      <>
        <h1>Xin chào các bạn!</h1>
        <p>Bây giờ là: {localeString} </p>
      </>
      )
  }
}
