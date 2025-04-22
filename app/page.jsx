"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function Signup() {
  const [sentlogRequest, setSentLogRequest] = useState(false);
  const [phone, setPhone] = useState("");
  const [openotp, setOpenotp] = useState("");
  const [shoresend, setShowresend] = useState(false);

  useEffect(() => {
    /*=============== SHOW HIDE LOGIN & CREATE ACCOUNT ===============*/
    const loginAcessRegister = document.getElementById("loginAccessRegister"),
      buttonRegister = document.getElementById("loginButtonRegister"),
      buttonAccess = document.getElementById("loginButtonAccess");

    buttonRegister.addEventListener("click", () => {
      loginAcessRegister.classList.add("active");
    });

    buttonAccess.addEventListener("click", () => {
      loginAcessRegister.classList.remove("active");
    });
  });
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length === 1 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };
  const handlePaste = (e) => {
    const paste = e.clipboardData
      .getData("text")
      .slice(0, inputsRef.current.length);
    paste.split("").forEach((char, i) => {
      if (inputsRef.current[i]) {
        inputsRef.current[i].value = char;
      }
    });
    // Optionally focus the last input or next empty one
    inputsRef.current[
      Math.min(paste.length, inputsRef.current.length - 1)
    ]?.focus();
  };

  const runtoverify = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setSentLogRequest(true);
      setPhone("");
      setOpenotp(true);
      setShowresend(true);

      setTimeout(() => {
        setSentLogRequest(false);
      }, 5000);
    }
  };

  const reSend = () => {
    setShowresend(true);
  };
  return (
    <>
      <section className="singin_signup_page">
        <div className="singin_signup_page flex flex-wrap">
          <div className="leftscreen"></div>
          <div className="leftscreen-right">
            <div className="login container grid" id="loginAccessRegister">
              <div className="login__access">
                <h1 className="login__title">Log in to your account.</h1>

                <div className="login__area">
                  <form action="" className="login__form">
                    <div className="login__content grid">
                      <div className="login__box">
                        <input
                          type="tel"
                          id="phone"
                          value={phone}
                          required
                          placeholder=" "
                          onChange={(e) => setPhone(e.target.value)}
                          className="login__input"
                          onKeyDown={runtoverify}
                        />
                        <label htmlFor="phone" className="login__label">
                          Phone
                        </label>

                        <svg
                          className="login__icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M6.5 2H4v12h8V2H9.5v1h-3V2Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div
                      className={`mt-3 otp_send_message bg-[rgb(233, 215, 243)] ${
                        sentlogRequest ? "flex open_to" : "hidden close_to"
                      }`}
                    >
                      <p className="login__switch with_color text-[rgb(91, 55, 183)]">
                        OTP Successfully sent your Number
                      </p>
                    </div>
                    <div
                      className={` otp__box ${
                        openotp ? "flex open_with " : "hidden"
                      }`}
                    >
                      {[0, 1, 2, 3, 4].map((_, index) => (
                        <div className="otp__input-wrapper" key={index}>
                          <input
                            type="text"
                            maxLength="1"
                            className="login__input otp__input"
                            onChange={(e) => handleChange(e, index)}
                            onPaste={handlePaste}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            ref={(el) => (inputsRef.current[index] = el)}
                          />
                        </div>
                      ))}
                    </div>
                    <Link
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        reSend();
                      }}
                      className={`login__forgot ${
                        shoresend ? "enable_login_forgot block" : "hidden"
                      }`}
                    >
                      Resend OTP
                    </Link>

                    <button type="submit" className="login__button">
                      Login
                    </button>
                  </form>

                  <div className="login__social">
                    <p className="login__social-title">Or login with</p>

                    <div className="login__social-links">
                      <div className="tooltip-container ">
                        <span className="tooltip">Sponser ?</span>
                        <span className="text">Google</span>
                      </div>
                    </div>
                  </div>

                  <p className="login__switch">
                    Don't have an account?
                    <button id="loginButtonRegister">Create Account</button>
                  </p>
                </div>
              </div>

              <div className="login__register">
                <h1 className="login__title">Create new account.</h1>

                <div className="login__area">
                  <form action="" className="login__form">
                    <div className="login__content grid">
                      <div className="login__group grid">
                        <div className="login__box">
                          <input
                            type="text"
                            id="names"
                            required
                            placeholder=" "
                            className="login__input"
                          />
                          <label htmlFor="names" className="login__label">
                            Name
                          </label>

                          <i className="ri-id-card-fill login__icon"></i>
                        </div>

                        <div className="login__box">
                          <input
                            type="text"
                            id="surnames"
                            required
                            placeholder=" "
                            className="login__input"
                          />
                          <label htmlFor="surnames" className="login__label">
                            Surname
                          </label>

                          <i className="ri-id-card-fill login__icon"></i>
                        </div>
                      </div>

                      <div className="login__box">
                        <input
                          type="tel"
                          id="emailCreate"
                          required
                          placeholder=" "
                          className="login__input"
                        />
                        <label htmlFor="emailCreate" className="login__label">
                          Phone
                        </label>

                        <svg
                          className="login__icon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M6.5 2H4v12h8V2H9.5v1h-3V2Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <button type="submit" className="login__button">
                      Create account
                    </button>
                  </form>

                  <p className="login__switch">
                    Already have an account?
                    <button id="loginButtonAccess">Log In</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="fixed"
          style={{
            bottom: "10px",
            right: "10px",
          }}
        >
          <div className="group relative flex justify-end items-end text-zinc-600 text-sm font-bold">
            <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
              <div className="bg-lime-200 flex items-center gap-1 p-2 rounded-md">
                <svg
                  className="stroke-zinc-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke-linejoin="round"
                  ></circle>
                  <path
                    d="M12 3C12 3 8.5 6 8.5 12C8.5 18 12 21 12 21"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 3C12 3 15.5 6 15.5 12C15.5 18 12 21 12 21"
                    stroke-linejoin="round"
                  ></path>
                  <path d="M3 12H21" stroke-linejoin="round"></path>
                  <path d="M19.5 7.5H4.5" stroke-linejoin="round"></path>
                  <g filter="url(#filter0_d_15_556)">
                    <path d="M19.5 16.5H4.5" stroke-linejoin="round"></path>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_15_556"
                      x="3.5"
                      y="16"
                      width="17"
                      height="3"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dy="1"></feOffset>
                      <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_15_556"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_15_556"
                        result="shape"
                      ></feBlend>
                    </filter>
                  </defs>
                </svg>
                <span>Get Support </span>
              </div>
              <div className="shadow-md bg-lime-200 absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
              <div className="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
                <div className="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
              </div>
            </div>

            <div className="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-lime-200 to-yellow-200 p-3 rounded-full cursor-pointer duration-300">
              <svg
                className="fill-zinc-600"
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <span className="text-[0px] group-hover:text-sm duration-300">
                Problem with Account
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
