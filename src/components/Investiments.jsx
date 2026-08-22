import {
  Wallet,
  Home,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  ChevronRight,
  ArrowBigUpIcon,
} from "lucide-react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Spaceheight from "./Spaceheight";

const Investiments = ({ coin, investment, setInvestment }) => {
  const navigate = useNavigate(0);
  const [totalreturn, settotalreturn] = useState(0);

  const [dailyreturn, setdailyreturn] = useState(0);

  useEffect(() => {
    const variationdaily = portfolio.reduce((total, action) => {
      return total + action.dailyVariation;
    }, 0);
    setdailyreturn(variationdaily);
  });

  useEffect(() => {
    const valuereturn = portfolio.reduce((total, action) => {
      return total + action.variation;
    }, 0);
    settotalreturn(valuereturn);
  });

  useEffect(() => {
    const valueinvestment = portfolio.reduce((total, action) => {
      return total + action.value;
    }, 0);

    setInvestment(valueinvestment);
  });

  const backhome = () => {
    navigate("/home");
  };

  const portfolio = [
    {
      id: 1,
      name: "NVIDIA",
      symbol: "NVDA",
      logo: "https://cdn.simpleicons.org/nvidia",
      percentage: 32,
      value: 1027.84,
      variation: 3.82,
      dailyVariation: 1.24,
      positive: true,
    },

    {
      id: 2,
      name: "Microsoft",
      symbol: "MSFT",
      logo: "https://cdn.simpleicons.org/microsoft",
      percentage: 24,
      value: 770.88,
      variation: 1.64,
      dailyVariation: 0.87,
      positive: true,
    },

    {
      id: 3,
      name: "Apple",
      symbol: "AAPL",
      logo: "https://cdn.simpleicons.org/apple",
      percentage: 20,
      value: 642.6,
      variation: 0.92,
      dailyVariation: 0.53,
      positive: true,
    },

    {
      id: 4,
      name: "Amazon",
      symbol: "AMZN",
      logo: "https://cdn.simpleicons.org/amazon",
      percentage: 14,
      value: 449.82,
      variation: -0.73,
      dailyVariation: -0.42,
      positive: false,
    },

    {
      id: 5,
      name: "Google",
      symbol: "GOOGL",
      logo: "https://cdn.simpleicons.org/google",
      percentage: 10,
      value: 321.3,
      variation: 2.15,
      dailyVariation: 1.08,
      positive: true,
    },
  ];

  return (
    <div>
      

      <section className="flex flex-col w-screen min-h-screen bg-stone-950 h-full items-center justify-center">
        <div className="flex w-full">
          <div className="flex justify-between p-2 text-stone-50 w-full items-center">
            <div className="flex gap-2 items-center">
              <Home
                onClick={backhome}
                size={50}
                className="p-3 bg-stone-600/40 rounded-full hover:cursor-pointer"
              />
              <div>
                <h1 className="text-stone-400 text-sm">Portofolio</h1>
                <h1 className="font-bold text-lg">Your investments</h1>
              </div>
            </div>
            <h1 className="p-2 bg-stone-600/40 rounded-2xl font-bold text-[15px] text-stone-400">
              Wallet
            </h1>
          </div>
        </div>
        <main className="flex flex-col p-5 sm:sm:w-150  gap-5 ">
          
          <div className="flex flex-col bg-gradient-to-br from-[#151515] via-[#2d2d2d] to-[#070707]  p-7 rounded-2xl gap-5  ">
            <div className="flex items-center gap-1 text-stone-500 font-bold ">
              <Wallet size={17} />
              <h1>Wallet</h1>
            </div>
            <div className="text-stone-100">
              <h1 className="text-4xl font-bold">
                {coin}
                {investment}
              </h1>
            </div>
            <div className="h-1 w-full bg-stone-700/30 rounded-md"></div>

            <div className="flex justify-between">
              <div className="flex flex-col gap-2">
                <h1 className="text-stone-500 font-bold">Total return</h1>
                <div
                  className={`${totalreturn >= 0 ? "text-green-500" : "text-red-500"} flex gap-1 items-center`}
                >
                  <TrendingUp />
                  <h1>
                    {totalreturn >= 0 ? "+" : "-"}
                    {totalreturn.toFixed(2)}%
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-stone-500 font-bold">Today's return</h1>
                <div
                  className={`${dailyreturn >= 0 ? "text-green-500" : "text-red-500"} flex gap-1 items-center`}
                >
                  <ArrowUpRight />
                  <h1>
                    {dailyreturn >= 0 ? "+" : "-"}
                    {dailyreturn}%
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full  bg-stone-950 rounded-2xl flex flex-col">
            <div className="w-full bg-stone-800 flex justify-between p-5 rounded-t-2xl items-center">
              <div className="flex flex-col gap-2">
                <h1 className="text-stone-100 font-bold text-2xl">
                  Your stocks
                </h1>
                <h1 className="text-stone-500">
                  {portfolio.length} assets in your portfolio
                </h1>
              </div>
              <div>
                <TrendingUp className="text-stone-400" />
              </div>
            </div>
            <main className="flex flex-col  bg-stone-900 p-5 w-full gap-5 rounded-b-2xl overflow-y-auto">
              <div className="flex flex-col h-60 sm:h-full gap-1 ">
                {portfolio.map((acao) => {
                  return (
                    <div
                      key={acao.id}
                      className="justify-between flex border-2 border-stone-900 p-2 rounded-2xl p-5 hover:bg-stone-600/10 hover:border-stone-800 transition-all duration-200 ease-in"
                    >
                      <div className="flex gap-3 items-center">
                        <div className=" flex items-center w-10 h-10">
                          <img
                            className="rounded-md w-10 h-10 p-1   object-contain  text-stone-400  bg-stone-100"
                            src={acao.logo}
                            alt={acao.name.split("")[0]}
                          />
                        </div>
                        <div className="flex flex-col">
                          <div>
                            <h1 className="text-stone-100 font-bold">
                              {acao.name}
                            </h1>
                          </div>
                          <div>
                            <h1 className={`text-stone-500`}>
                              {acao.symbol} • {acao.percentage}%
                            </h1>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div>
                          <div className="text-stone-100">
                            <h1>
                              {coin}
                              {acao.value}
                            </h1>
                          </div>
                        </div>
                        <div
                          className={`${acao.positive ? "text-green-500" : "text-red-500"} flex gap-1 items-center`}
                        >
                          <TrendingUp />
                          <h1>{acao.variation.toFixed(2)}</h1>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </main>
          </div>
          
          
        </main>
      </section>
      <Navbar />
    </div>
  );
};

export default Investiments;
