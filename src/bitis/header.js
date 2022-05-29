import React, { Component } from "react";
import "../css/Header.css";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="headerTop">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="headerTopHotline">
                  Hotline:
                  <a href="tel:3252585">
                    0966 158 666 <span>(8h- 12h, 13h30 - 17h)</span>
                  </a>
                </div>
                <div className="topBarLink">
                  <a href="#">Tìm cửa hàng</a>
                </div>
                <div className="topBarLink">
                  <a href="#">Liên hệ hợp tác</a>
                </div>
                <div className="topBarLink">
                  <a href="#">Mua Hàng Tại Amazon</a>
                </div>
                <div className="topBarLink">
                  <a href="#">Kiểm tra đơn hàng</a>
                </div>
                <div className="topBarLink">
                  <span>
                    <a href="#"> Đăng nhập </a>
                  </span>
                  <span>|</span>
                  <span>
                    <a href="#"> Đăng ký </a>
                  </span>
                </div>
                <div className="languageHeader">
                  <button className="dropdownToggle">
                    <img src="https://theme.hstatic.net/1000230642/1000679613/14/vi.png?v=4584" className="vni"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headerBottom">
          <div className="container">
            <div className="row">
              <div className="col col-lg-2 col-logo">
                <a href="#">
                  <img src="https://upload.wikimedia.org/wikipedia/vi/thumb/3/37/Bitis_logo.svg/1200px-Bitis_logo.svg.png"></img>
                </a>
              </div>
              <div className="col col-lg-7">
                <ul>
                  <li>
                    <a href="#">VỀ BITI'S</a>
                  </li>
                  <li>
                    <a href="#">NAM</a>
                  </li>
                  <li>
                    <a href="#">NỮ</a>
                  </li>
                  <li>
                    <a href="#">GOSTO</a>
                  </li>
                  <li>
                    <a href="#">BÉ TRAI</a>
                  </li>
                  <li>
                    <a href="#">BÉ GÁI</a>
                  </li>
                  <li>
                    <a href="#">
                    NÔNG SẢN
                    <img src="https://theme.hstatic.net/1000230642/1000679613/14/hello-fresh-logo.png?v=4584" className="fresh"></img>
                    </a>
                  </li>
                  <li className="li-hot">
                    <a href="#" className="bg-hot">TUYỂN DỤNG</a>
                  </li>
                </ul>
              </div>
              <div className="col col-lg-2">
                  <form>
                      <div className="search-form">
                          <input type="text" placeholder="Nhập thông tin cần tìm kiếm...."></input>
                          <button className="submit">
                              <img src="https://www.seekpng.com/png/full/12-121965_icons-logos-emojis-search-icon-png-grey.png"></img>
                          </button>
                      </div>
                  </form>
              </div>
              <div className="col col-lg-1">
                  {/* <img src="https://cdn2.iconfinder.com/data/icons/media-player-ui/512/Media-Icon-25-512.png" className="heart"></img> */}
                  <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" className="cart"></img>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
