import React, { Component } from "react";
import "../css/bitisShop.css";
import ProductDetail from "./ProductDetail";

export default class BitisShop extends Component {
  render() {
    const { onBuy, onSelect, products } = this.props;

    return (
      <div className="main" style={{ paddingBottom: "50px" }}>
        <div className="container">
          <h1 className="heading">Dành Riêng Cho Bạn</h1>
          <div className="row">
            <div className="col">
              <div className="products">
                {products.map((item) => {
                  return (
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
                      </a>
                      <button
                        className="btn btn-success "
                        onClick={() => {
                          onSelect(item);
                        }}
                      >
                        Xem chi tiết
                      </button>
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="btn btn-success "
                        style={{ marginTop: "10px" }}
                        onClick={() => {
                          onBuy(item);
                        }}
                      >
                        Thêm vào giỏ
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
