import {
  MoveUpRight,
  MoveUpLeft,
  ArrowRight,
} from "lucide-react";

import { useState } from "react";

const MoneyGlobal = ({ coin }) => {
  const cryptos = [
    {
      id: 1,
      symbol: "₿",
      name: "BTC",
      fullName: "BITCOIN",
      buy: 65.402,
      sell: 64.678,
      trend: "up",
    },
    {
      id: 2,
      symbol: "Ξ",
      name: "ETH",
      fullName: "ETHEREUM",
      buy: 3.421,
      sell: 3.38,
      trend: "up",
    },
    {
      id: 3,
      symbol: "◎",
      name: "SOL",
      fullName: "SOLANA",
      buy: 177.62,
      sell: 175.74,
      trend: "up",
    },
    {
      id: 4,
      symbol: "✕",
      name: "XRP",
      fullName: "XRP",
      buy: 2.87,
      sell: 2.81,
      trend: "down",
    },
    {
      id: 5,
      symbol: "₿",
      name: "BNB",
      fullName: "BINANCE COIN",
      buy: 612.4,
      sell: 605.2,
      trend: "up",
    },
  ];

  const [actived, setActived] = useState(false);

  const activeallcryptos = () => {
    setActived(!actived);
  };

  return (
    <section className="bg-stone-950">
      <div
        className={`p-1 bg-stone-800/50 rounded-2xl w-80 m-auto sm:w-150 h-50 ${
          actived ? "h-full" : ""
        }`}
      >
        <main className="flex flex-col p-2 gap-2">

          {/* HEADER */}
          <div className="flex justify-between font-bold text-xs p-3">
            
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>

                <h1 className="font-bold text-stone-100 text-[20px]">
                  Market overview
                </h1>
              </div>

              <h1 className="text-stone-600 font-normal text-[15px]">
                Live exchange rates
              </h1>
            </div>

            <div
              onClick={activeallcryptos}
              className="flex gap-2 items-center group cursor-pointer border border-stone-500/20 p-2 rounded-2xl bg-stone-700/20"
            >
              <h1 className="text-stone-100 font-normal">
                {!actived ? "SEE MORE" : "SEE LESS"}
              </h1>

              <ArrowRight
                size={20}
                className={`text-stone-100 transition-all duration-200 ease-in group-hover:translate-x-0.5 ${
                  actived ? "-rotate-90" : "rotate-90"
                }`}
              />
            </div>
          </div>

          <div className="w-full h-0.5 bg-stone-700/20"></div>

          {/* CRYPTOS */}
          <section
            className={`overflow-y-auto pr-1 p-5 flex gap-5 h-55 ${
              actived ? "h-full" : ""
            }`}
          >
            {cryptos.map((crypto) => (
              <main key={crypto.id}>
                <div className="flex flex-col justify-between border border-stone-500/30 bg-stone-950 gap-5 w-60 rounded-2xl p-5">

                  {/* CRYPTO INFO */}
                  <div>
                    <div className="flex gap-3 items-center text-white">

                      <div className="border border-yellow-500/20 w-15 h-15 rounded-md bg-yellow-500/10 items-center justify-center flex">
                        <h1 className="text-yellow-400 text-2xl">
                          {crypto.symbol}
                        </h1>
                      </div>

                      <div className="flex flex-col">
                        <h1>{crypto.name}</h1>

                        <p className="text-stone-600 text-[12px]">
                          {crypto.fullName}
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* BUY + SELL */}
                  <div className="flex flex-col gap-3">

                    {/* BUY */}
                    <div className="flex justify-between gap-1 items-center min-w-22 bg-stone-700/20 p-3 rounded-2xl">
                      
                      <div className="flex flex-col">
                        <h1 className="text-[15px] text-stone-500">
                          BUY
                        </h1>

                        <h1 className="text-stone-100 font-bold">
                          {coin}
                          {crypto.buy.toFixed(2)}
                        </h1>
                      </div>

                      <div className="p-3 bg-green-500/20 rounded-2xl">
                        <MoveUpRight
                          size={20}
                          className="text-green-500"
                        />
                      </div>

                    </div>

                    {/* SELL */}
                    <div className="flex justify-between gap-1 items-center min-w-22 bg-stone-700/20 p-3 rounded-2xl">
                      
                      <div className="flex flex-col">
                        <h1 className="text-[15px] text-stone-500">
                          SELL
                        </h1>

                        <h1 className="text-stone-100 font-bold">
                          {coin}
                          {crypto.sell.toFixed(2)}
                        </h1>
                      </div>

                      <div className="p-3 bg-red-500/20 rounded-2xl">
                        <MoveUpLeft
                          size={20}
                          className="text-red-500 rotate-180"
                        />
                      </div>

                    </div>

                  </div>
                </div>
              </main>
            ))}
          </section>
        </main>
      </div>
    </section>
  );
};

export default MoneyGlobal;