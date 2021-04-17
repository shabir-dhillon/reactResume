import React, { Component } from 'react'
import './header.css';

export default class Contact extends Component {
  render() {
    return (
      <div className="main">
        <div className="contact">
          <p>
            <strong className="fullName">Shabir Singh Dhillon</strong>
            <br />
           42, Jalan Tempinis 2, Lucky Garden, 59100, Kuala Lumpur
           <br />
            +60 122470259
            <br />
            <a href='mailto:shabirsingh00@gmail.com' className="emailText">shabirsingh00@gmail.com</a>
          </p>
        </div>
      </div>
    )
  }
}
