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

export default class Store extends Component {
  state = {
    selectedProduct: null,
  };
  handleSelectProduct = (product) => {
    this.setState({ selectedProduct: product });
  };


  render() {
    return (
      <div className="store">
        <Header></Header>
        <Carousel></Carousel>
        <Banner></Banner>
        <BitisShop
          products={data}
          onSelect={this.handleSelectProduct}

 
        ></BitisShop>
        <ProductDetail
          ProductDetail={this.state.selectedProduct}
        ></ProductDetail>
        <Footer></Footer>
      </div>
    );
  }
}
