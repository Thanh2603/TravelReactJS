import React from "react";
import "./Hero.css";
import Video from "../../assets/maldivesVideo.mp4";
import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>Du Lịch</h1>
        <h2>Tại địa điểm hàng đầu thế giới</h2>
        <form className="form">
          <div>
            <input type="text" placeholder="Tìm Điểm Đến" />
          </div>
          <div>
            <button>
              <AiOutlineSearch className="icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
