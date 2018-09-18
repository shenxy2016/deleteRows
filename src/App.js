import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    //  this.state.products = [];
    this.state = {
      chosenNumber:[],
    products : [
      {
        id: 1,
        category: "Sporting Goods",
        price: "49.99",
        qty: 12,
        name: "football"
      },
      {
        id: 2,
        category: "Sporting Goods",
        price: "9.99",
        qty: 15,
        name: "baseball"
      },
      {
        id: 3,
        category: "Sporting Goods",
        price: "29.99",
        qty: 14,
        name: "basketball"
      },
      {
        id: 4,
        category: "Electronics",
        price: "99.99",
        qty: 34,
        name: "iPod Touch"
      },
      {
        id: 5,
        category: "Electronics",
        price: "399.99",
        qty: 12,
        name: "iPhone 5"
      },
      {
        id: 6,
        category: "Electronics",
        price: "199.99",
        qty: 23,
        name: "nexus 7"
      }
    ]};
  }

  handleInputChange= (event)=> {
    const target = event.target;
    const value = Number(target.value);
    const name = target.name;
    console.log(value, name)
    let number = [...this.state.chosenNumber,value];
    this.setState({
      chosenNumber:number
    });
  }

  

  handleDelete = () =>{
    let num = this.state.chosenNumber;
    this.setState({products: this.state.products.filter(product=>{
      for(let i of num){
        if(product.id === i){
          return false;
        }
      }
      return true;
    })})
  }

  render() {
    console.log(this.state.chosenNumber)
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <td> </td>
              <td>Category</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Name</td>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(product => {
              return (
                <tr key={product.id}>
                <td> <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            value={product.id}
            onChange={this.handleInputChange} /></td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.qty}</td>
                  <td>{product.name}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default App;
