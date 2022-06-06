// import Header from "./bitis/header";
// import Carousel from "./bitis/carousel";
// import Banner from "./bitis/banner";
// import BitisShop from "./bitis/BitisShop";
// import Footer from "./bitis/footer";
// import data from "./bitis/data.json";

import React, { Component } from "react";
import Header from "./header";
import Carousel from "./carousel";
import Banner from "./banner";
import BitisShop from "./BitisShop";
import Footer from "./footer";
import data from "./data.json";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

export default class Store extends Component {
  state = {
    selectedProduct: null,
    carts: [],
    count:0,
    total:0
  };
  handleSelectProduct = (product) => {
    this.setState({ selectedProduct: product });
  };

  handleByProduct = (product) => {
    const index = this.state.carts.findIndex((item) => item.id === product.id);
    if (index === -1) {
      this.setState((state) => ({
        carts: [...state.carts, { ...product, quantity: 1 }],
      }));
    } else {
      const carts = [...this.state.carts];
      carts[index].quantity += 1;
      this.setState({ carts: carts });
    }

   
    
    this.setState({count: this.state.count+1})
  };

  handleDeleteFromCart=(proudctID)=>{
    const carts=this.state.carts.filter((item)=>{
      return item.id !== proudctID
    })
    this.setState({carts})
  }

  handleChangeQuantity=(id,value)=>{
    // console.log(id,value)
    const index=this.state.carts.findIndex((item)=>{
      return item.id===id
    })
    const carts=[...this.state.carts]
    carts[index].quantity+=value;
    this.setState({carts})
  }

  render() {
    return (
      <div className="store">
        <Header count={this.state.count}></Header>
        <Carousel></Carousel>
        <Banner></Banner>
        <BitisShop
          products={data}
          onSelect={this.handleSelectProduct}
          onBuy={this.handleByProduct}
        ></BitisShop>
        <ProductDetail
          ProductDetail={this.state.selectedProduct}
        ></ProductDetail>
        <Cart onChangeQuantity={this.handleChangeQuantity} onDelete={this.handleDeleteFromCart} count={this.state.count} carts={this.state.carts}></Cart>
        <Footer></Footer>
      </div>
    );
  }
}
