import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { carts, count, onDelete, onChangeQuantity } = this.props;
    return (
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Giỏ hàng: <span>{count}</span>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Hình ảnh</th>
                    <th scope="col">Tên sản phẩm</th>
                    <th scope="col">Giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Thành tiền</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          <img src={item.image} style={{ width: "50px" }} />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price * item.quantity}</td>
                        <td>
                          <button onClick={()=>{onChangeQuantity(item.id, -1)}} className="btn btn-success cart-add-neg">
                            -
                          </button>
                          <span style={{marginRight: "10px"}}>{item.quantity}</span>
                          <button  onClick={()=>{onChangeQuantity(item.id, 1)}} className="btn btn-success cart-add-neg">
                            +
                          </button>
                        </td>

                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              onDelete(item.id);
                            }}
                          >
                            Xoa
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div class="modal-footer">
              {/* <p>Tổng tiền: <span>{carts.reduce((total,item)=>{
                total+=item.quantity*item.price
            })}</span></p> */}
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
