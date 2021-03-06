import React, { Component } from "react";
import "../css/productDetail.css";

export default class ProductDetail extends Component {
  render() {
    const { ProductDetail } = this.props;

    if (!ProductDetail) {
      return null;
    }
    return (
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content"  style={{maxWidth: "1000px",margin:"auto"}}>
            <div className="container"  style={{padding: "20px" }}>
              <div className="row">
                <div className="col-lg-6 col-img">
                  <img src={ProductDetail.image} alt={ProductDetail.name} />
                </div>
                <div className="col-lg-6">
                  <div className="modal__heading">{ProductDetail.name}</div>
                  <p className="modal__tag">
                    Loại sản phẩm: <span>{ProductDetail.alias}</span>{" "}
                  </p>
                  <p className="modal__price">{ProductDetail.price} $</p>
                  <div className="modal__quality">
                    Còn <span>{ProductDetail.quantity}</span> sản phẩm
                  </div>
                  <div className="modal__desc">
                    Mô tả: <br />
                    <span>{ProductDetail.description}</span>
                    <br />
                    <span>{ProductDetail.shortDescription}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
