import React from "react";
import "./style/style.css";
import { Link } from "react-router-dom";
import img1 from "../images/image1.png";
import img2 from "../images/image2.png";
import img3 from "../images/image3.png";
import logo from "../images/logo.png";
import { useState } from "react";

export default function LogIn() {
  const [isSignInMode, setIsSignInMode] = useState(false);
  
  function handleInputFocus(event) {
    event.target.classList.add("active");
  }

  function handleInputBlur(event) {
    if (event.target.value !== "") return;
    event.target.classList.remove("active");
  }

  function handleToggleClick() {
    setIsSignInMode((prevMode) => !prevMode);
  }

  // function handleBulletClick(event) {
  //   const index = event.target.dataset.value;

  //   const currentImage = document.querySelector(`.img-${index}`);
  //   document.querySelectorAll(".image").forEach((img) => img.classList.remove("show"));
  //   currentImage.classList.add("show");

  //   const textSlider = document.querySelector(".text-group");
  //   textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

  //   document.querySelectorAll(".bullets span").forEach((bull) => bull.classList.remove("active"));
  //   event.target.classList.add("active");
  // }
  return (
    <div className="className">
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form
              action="index.html"
              autoComplete="off"
              className={isSignInMode ? "sign-in-mode" : ""}
            >
              <div className="logo">
                <img src={logo} alt="easyclass" />
                <h4>ABC</h4>
              </div>
              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet?</h6>
                <Link to="/signup" className="toggle">
                  {/* <a href="#" className="toggle"> */}
                  Sign up
                  {/* </a> */}
                </Link>
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength={4}
                    className="input-field"
                    autoComplete="off"
                    required
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label>Name</label>
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    minLength={4}
                    className="input-field"
                    autoComplete="off"
                    required
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label>Password</label>
                </div>
                <input
                  type="submit"
                  defaultValue="Sign In"
                  className="sign-btn"
                />
                <p className="text">
                  Forgotten your password or you login datails?
                  <a href="#">Get help</a> signing in
                </p>
              </div>
            </form>
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img src={img1} className="image img-1 show" alt="" />
              {/* <img src={img2} class="image img-2" alt="" />
              <img src={img3} class="image img-3" alt="" /> */}
            </div>
            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Lorem ipsum dolor sit amet.</h2>
                  {/* <h2>Customize as you like</h2>
                  <h2>Invite students to your class</h2> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
