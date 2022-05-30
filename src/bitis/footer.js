import React, { Component } from "react";
import "../css/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="hastag">
          hashtag
          <a href="#" className="tag-name">
            {" "}
            Bitis{" "}
          </a>
          ĐỂ CÓ CƠ HỘI XUẤT HIỆN TRÊN WEBSITE CỦA CHÚNG TÔI
        </div>
        <div className="wrapper">
          <div className="item">
            <img
              src="https://file.hstatic.net/1000230642/file/bitis-hashtag-1_dd55885fdc8947988d056ac6fa96c970.jpg"
              alt="pic"
            />
          </div>
          <div className="item">
            <img
              src="https://file.hstatic.net/1000230642/file/bitis-hashtag-2_1e0e40c09bdc48dfabaa83b6933f1595.jpg"
              alt="pic"
            />
          </div>
          <div className="item">
            <img
              src="https://file.hstatic.net/1000230642/file/bitis-hashtag-3_8fd12e162f104728a7dfaf537e199f19.jpg"
              alt="pic"
            />
          </div>
          <div className="item">
            <img
              src="https://file.hstatic.net/1000230642/file/bitis-hashtag-4_893a397f4ab5447a8ec48532f68e7c3e.jpg"
              alt="pic"
            />
          </div>
          <div className="item">
            <img
              src="https://file.hstatic.net/1000230642/file/bitis-hashtag-5_75a4043ef4174ff2a9e93f2fdfa69acd.jpg"
              alt="pic"
            />
          </div>
          <div className="item">
            <img
              src="https://file.hstatic.net/1000230642/file/bitis-hashtag-6_127786003ab84450b6cbfbe4d73d85ea.jpg"
              alt="pic"
            />
          </div>
          <div className="item">
            <img
              src="https://file.hstatic.net/1000230642/file/bitis-hashtag-7_d1c84d44fdef4846adcc74e17a5526ad.jpg"
              alt="pic"
            />
          </div>
          <div className="item">
            <img
              src="https://file.hstatic.net/1000230642/file/bitis-hashtag-8_ff76dcac33fc48cc86b81bdc96032085.jpg"
              alt="pic"
            />
          </div>
        </div>
        <div className="newsletter">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="newsletter-wrap">
                  <div className="newsletter_description">
                    ĐĂNG KÝ EMAIL ĐỂ NHẬN THÊM NHIỀU THÔNG TIN MỚI TỪ BITI’S
                  </div>
                  <div className="frmNewsLetter">
                    <form action="">
                      <input
                        type="email"
                        placeholder="Nhập E-mail của bạn..."
                      />
                      <button> ĐĂNG KÝ</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <div className="block_list">
                  <h3 className="footer_block_title">Trợ Giúp</h3>
                  <ul>
                    <li>
                      <a href="#">Trạng thái đơn hàng</a>
                    </li>
                    <li>
                      <a href="#">Hình thức giao hàng</a>
                    </li>
                    <li>
                      <a href="#">Chính sách đổi trả</a>
                    </li>
                    <li>
                      <a href="#">Chính sách bảo hành</a>
                    </li>
                    <li>
                      <a href="#">Chính sách khách hàng thân thiết</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <h3 className="footer_block_title">Trợ Giúp</h3>
                <ul>
                  <li>
                    <a href="#">Tuyển Dụng</a>
                  </li>
                  <li>
                    <a href="#">Hệ thống cửa hàng</a>
                  </li>
                  <li>
                    <a href="#">Liên hệ hợp tác</a>
                  </li>
                  <li>
                    <a href="#">Q&A</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h3 className="footer_block_title">Về Bitis</h3>
                <ul>
                  <li>
                    <a href="#">Về Bitis</a>
                  </li>
                  <li>
                    <a href="#">Câu chuyện Biti's</a>
                  </li>
                  <li>
                    <a href="#">Bước tiến phát triển</a>
                  </li>
                  <li>
                    <a href="#">Liên hệ</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
