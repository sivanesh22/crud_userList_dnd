import React, { Component } from "react";

class PrefillData extends Component {
  prefillData = () => {
    // Do something with the form values
    const userList = [
      {
        id: 1,
        name: "Sivanesh",
        gender: "Male",
        email: "Sivaneshselvan00@gmail.com",
        pincode: 642005,
        city: "Pollachi",
        phoneNumber: 9842609911
      },
      {
        id: 2,
        name: "Arun",
        gender: "Male",
        email: "arun@gmail.com",
        pincode: 642002,
        city: "Cbe",
        phoneNumber: 9842609900
      },
      {
        id: 3,
        name: "Priya",
        gender: "Female",
        email: "priya@gmail.com",
        pincode: 642022,
        city: "Cbe",
        phoneNumber: 9992609900
      }
    ];
    localStorage.setItem("userList", JSON.stringify(userList));
    localStorage.setItem("dataPrefilled", true);
    this.props.history.push("/displayUser");
  };

  render() {
    return <button onClick={this.prefillData}>Prefill Data</button>;
  }
}

export default PrefillData;
