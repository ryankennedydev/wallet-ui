import { MoveUp, MoveUpRight, MoveUpLeft, ArrowRight } from "lucide-react";
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
  const [actived,setActived] = useState(false)
  const activeallcryptos = () => {
    setActived(!actived)
  }

  return (
    <section>
      <div className={`p-1 bg-stone-800/50 rounded-2xl w-80 m-auto md:w-100 h-40 ${actived ? "h-full" : ""}`}>
        <main className="flex flex-col p-2 gap-2">
          <div className="flex justify-between  font-bold text-xs ">
            <h1 className="text-white">EXCHANGE RATE</h1>
            <div className="flex gap-2 items-center group hover:cursor-pointer">
              <h1 onClick={activeallcryptos}  className="text-red-500  ">{!actived ? "SEE MORE" : "SEE LESS"} </h1>
              <ArrowRight
                size={20}
                className={`text-red-500 transition-all duration-200 ease-in group-hover:translate-x-0.5 ${actived ? "rotate-240": ""}`}/>
            </div>
          </div>

          <section className={`overflow-y-auto pr-1 h-30 ${actived ? "h-full" : ""}`}>
            {cryptos.map((crypto) => (
              <main key={crypto.id}>
                <div className="flex justify-between">
                  <div>
                    <div className="flex gap-1 text-white">
                      <h1>{crypto.symbol}</h1>
                      <h1>{crypto.name}</h1>
                    </div>

                    <p className="text-stone-600 text-[12px]">
                      {crypto.fullName}
                    </p>
                  </div>

                  <div className="flex gap-2 items-center">
                    <div className="flex gap-1 items-center min-w-22">
                      <h1 className="text-green-600">
                        {coin}
                        {crypto.buy.toFixed(2)}
                      </h1>
                      <MoveUpRight size={20} className="text-green-600" />
                    </div>

                    <div className="flex gap-1 items-center min-w-22">
                      <h1 className="text-red-500">
                        {coin}
                        {crypto.sell.toFixed(2)}
                      </h1>
                      <MoveUpLeft
                        size={20}
                        className="text-red-500 rotate-180"
                      />
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
