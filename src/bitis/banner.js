import React, { Component } from "react";
import "../css/banner.css"

export default class Banner extends Component {
  render() {
    return (
      <div className="banner_cate">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner_content">
                <div className="item item-1">
                  <img src="https://file.hstatic.net/1000230642/file/banner-cate-1_76bca9574e71406cb7536394202d76ad_master.jpg"></img>
                </div>
                <div className="item item-2">
                  <img src="https://file.hstatic.net/1000230642/file/banner-cate-2_d5cc77ab5fa34ae5bea38ff9413ad60f_master.jpg"></img>
                </div>
                <div className="item item-3">
                  <img src="https://file.hstatic.net/1000230642/file/banner-cate-5_513967e8e2f54fec9d5d88ecde42f23c_master.jpg"></img>
                </div>
                <div className="item">
                  <img src="https://file.hstatic.net/1000230642/file/banner-cate-3_06b272263c19450b9705f942567fc05c_master.jpg"></img>
                </div>
                <div className="item">
                  <img src="https://file.hstatic.net/1000230642/file/untitled-1-1_04edd88faa7c4c38912c668ba987728e_master.jpg"></img>
                </div>
                <div className="item">
                  <img src="https://file.hstatic.net/1000230642/file/banner-cate-6_2700ab7c2d1649078d83f11f48115883_master.jpg"></img>
                </div>
                <div className="item">
                  <img src="https://file.hstatic.net/1000230642/file/banner-cate-7_01a820ce4bbf4faa9c51db18bda5634c_master.jpg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
