import React from "react";
import "../components/style/style.css";
import img1 from "../images/image1.png";
import img2 from "../images/image2.png";
import img3 from "../images/image3.png";
import logo from "../images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp(className,setSwitchAuth,setToggle) {

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  function toggleImage (){
    setToggle = 'true';
  }
  
  function handleInputFocus(event) {
    event.target.classList.add("active");
  }

  function handleInputBlur(event) {
    if (event.target.value !== "") return;
    event.target.classList.remove("active");
  }

  // function handleToggleClick() {
  //   setIsSignUpMode((prevMode) => !prevMode);
  // }

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
        <div className="inner-box1">
        <div className="carousel1">
            <div className="images-wrapper">
              <img src={img1} className="image img-1 show "  alt="" />

            </div>
            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Lorem ipsum dolor sit amet.</h2>

                </div>
              </div>
            </div>
          </div> 
          <div className="forms-wrap1">
            <form
              action="index.html"
              autoComplete="off"
              
              className={isSignUpMode ? "sign-up-mode" : ""}>
              <div className="logo">
                <img src={logo} alt="easyclass" />
                <h4>ABC</h4>
              </div>
              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <Link to="/" className="toggle" onClick={toggleImage}>
                  Sign In
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
                    type="email"
                    className="input-field"
                    autoComplete="off"
                    required
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  <label>Email</label>
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
                  // value={isSignUpMode ? "Sign Up" : "Sign In"}
                  // defaultValue="Sign Up"
                  className="sign-btn"
                />
                <p className="text">
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>


        </div>
      </div>
    </div>
  );
}
