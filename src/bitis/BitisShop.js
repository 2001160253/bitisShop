import React, { Component } from "react";
import "../css/bitisShop.css";

export default class BitisShop extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className="main">
        <div className="container">
          <h1 className="heading">Dành Riêng Cho Bạn</h1>
          <div className="row">
            <div className="col">
              <div className="products">
                {
                  products.map((item)=>{
                    return(
                      <div key={item.id} className="product_item">
                      <a href="#">
                        <div className="product_img">
                          <img src={item.image}></img>
                        </div>
                        <div className="product_desc">
                          <div className="product_name">{item.name}</div>
                          <div className="product_tag">{item.alias}</div>
                          <div className="product_price">{item.price} $</div>
                        </div>
                        <button className="btn btn-success">Mua hàng</button>
                      </a>
                    </div>
                    )
                  })
                }
               
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
