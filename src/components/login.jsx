import React, { useState } from "react";
import backgroundLogin from "../assets/backgroundlogin3.png";
import backgroundMobile from "../assets/backgroundmobile.png";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userlogin, setuserLogin] = useState("");
  const [passwordlogin, setpasswordlogin] = useState("");

  const [activedsalve,setactivedsalve] = useState(false)

  const navigate = useNavigate()
  

  const loginclick = (e) => {
    
    if (userlogin && passwordlogin && userlogin.length === 11) {
      return navigate("/configure");
    }
  };
  const create = () => {
    return navigate("/createaccount")
  }
  return (
    <main
      className="flex justify-center items-center w-screen h-screen bg-stone-950 bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${backgroundLogin})` }}
    >
      <section className="flex flex-col gap-30 items-center">
        <div className="flex flex-col text-2xl font-bold text-stone-100 items-center">
          <h1 className=""> WALLET</h1>
          <h1 className="text-stone-400 ">NOMADE</h1>
        </div>

        <div className="flex flex-col bg-stone-900/20 backdrop-blur-sm p-10 rounded-2xl gap-5 sm:w-100">
          <main className="flex flex-col gap-2">
            <div className="gap-1 flex flex-col">
              <h1 className="text-stone-100">Your CPF</h1>
              <input
                value={userlogin}
                onChange={(e) => setuserLogin(e.target.value)}
                className={`p-3 rounded-lg outline-none bg-stone-950 border-1  placeholder:text-stone-500 text-stone-500 border-stone-500/40 `} placeholder="000-000-000-00"
                type="email"
                name=""
                id=""
              />
            </div>
            <div className="gap-1 flex flex-col">
              <h1 className="text-stone-100">Your Password</h1>
              <input
                value={passwordlogin}
                onChange={(e) => setpasswordlogin(e.target.value)}
                className="p-3 rounded-lg outline-none bg-stone-950 border-1 border placeholder:text-stone-500 text-stone-500 border-stone-500/40"
                placeholder="Enter your password"
                type="email"
                name=""
                id=""
              />
            </div>
          </main>
          <div>
            <main className=" items-center flex  flex-col  ">
              <div className="flex gap-2 items-center ">
                <input className="w-4" type="checkbox" name="" id="" />
                <h1 className="text-stone-100 text-[15px]">Remember me</h1>
              </div>

              <div>
                <a className="text-stone-100 text-[15px] underline" href="">
                  Forgot Password?
                </a>
              </div>
            </main>
          </div>
          <div className="flex flex-col gap-2">
            <button onClick={loginclick} className="w-full bg-yellow-300 p-3 rounded-2xl active:scale-99 ">
              Login
            </button>
            <button onClick={create} className="w-full backdrop-blur-3xl bg-stone-950/40 text-blue-300 p-3 rounded-2xl">
              Create Account{" "}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
