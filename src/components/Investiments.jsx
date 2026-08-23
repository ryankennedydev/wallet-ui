import {
Wallet,
Home,
TrendingUp,
ArrowUpRight,
ArrowDownRight,
Plus,
ChevronRight,
ArrowBigUpIcon,
ArrowUp,
Banknote,
BanknoteArrowUp,
ArrowBigRightIcon,
ArrowDown,
ArrowRightLeft,
ArrowRight,
Search,BarChart3,PieChart,Building2,Bitcoin,
TrendingUpIcon,
TrendingUpDown,
TrendingUpDownIcon
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

const [searchinvest,setSearchinvest] = useState("all")

const portfolio = [
  // STOCKS
  {
    id: 1,
    name: "NVIDIA",
    symbol: "NVDA",
    type: "stocks",
    logo: "https://cdn.simpleicons.org/nvidia",
    percentage: 18,
    value: 1027.84,
    variation: 3.82,
    dailyVariation: 1.24,
    positive: true,
  },

  {
    id: 2,
    name: "Microsoft",
    symbol: "MSFT",
    type: "stocks",
    logo: "https://cdn.simpleicons.org/microsoft",
    percentage: 15,
    value: 870.88,
    variation: 1.64,
    dailyVariation: 0.87,
    positive: true,
  },

  {
    id: 3,
    name: "Apple",
    symbol: "AAPL",
    type: "stocks",
    logo: "https://cdn.simpleicons.org/apple",
    percentage: 12,
    value: 642.6,
    variation: 0.92,
    dailyVariation: 0.53,
    positive: true,
  },

  {
    id: 4,
    name: "Amazon",
    symbol: "AMZN",
    type: "stocks",
    logo: "https://cdn.simpleicons.org/amazon",
    percentage: 10,
    value: 549.82,
    variation: -0.73,
    dailyVariation: -0.42,
    positive: false,
  },

  {
    id: 5,
    name: "Google",
    symbol: "GOOGL",
    type: "stocks",
    logo: "https://cdn.simpleicons.org/google",
    percentage: 8,
    value: 421.3,
    variation: 2.15,
    dailyVariation: 1.08,
    positive: true,
  },

  {
    id: 6,
    name: "Tesla",
    symbol: "TSLA",
    type: "stocks",
    logo: "https://cdn.simpleicons.org/tesla",
    percentage: 7,
    value: 318.5,
    variation: -1.24,
    dailyVariation: -0.65,
    positive: false,
  },

  {
    id: 7,
    name: "Meta",
    symbol: "META",
    type: "stocks",
    logo: "https://cdn.simpleicons.org/meta",
    percentage: 6,
    value: 290.4,
    variation: 2.87,
    dailyVariation: 1.32,
    positive: true,
  },

  {
    id: 8,
    name: "Netflix",
    symbol: "NFLX",
    type: "stocks",
    logo: "https://cdn.simpleicons.org/netflix",
    percentage: 5,
    value: 210.7,
    variation: 1.42,
    dailyVariation: 0.74,
    positive: true,
  },

  // ETFs
  {
    id: 9,
    name: "Vanguard S&P 500 ETF",
    symbol: "VOO",
    type: "etfs",
    logo: "https://cdn.simpleicons.org/vanguard",
    percentage: 8,
    value: 680.5,
    variation: 4.21,
    dailyVariation: 0.92,
    positive: true,
  },

  {
    id: 10,
    name: "Invesco QQQ",
    symbol: "QQQ",
    type: "etfs",
    logo: "https://cdn.simpleicons.org/invesco",
    percentage: 6,
    value: 490.2,
    variation: 3.15,
    dailyVariation: 1.18,
    positive: true,
  },

  // REITs
  {
    id: 11,
    name: "Realty Income",
    symbol: "O",
    type: "reits",
    logo: "https://cdn.simpleicons.org/building",
    percentage: 3,
    value: 180.5,
    variation: 0.82,
    dailyVariation: 0.21,
    positive: true,
  },

  // CRYPTO
  {
    id: 12,
    name: "Bitcoin",
    symbol: "BTC",
    type: "crypto",
    logo: "https://cdn.simpleicons.org/bitcoin",
    percentage: 2,
    value: 350.8,
    variation: 5.42,
    dailyVariation: 2.31,
    positive: true,
  },
];

const market = [
{
id: 1,
symbol: "NVDA",
name: "Nvidia",
variation: 1.24,
positive: true,
},
{
id: 2,
symbol: "AAPL",
name: "Apple",
variation: 0.82,
positive: true,
},
{
id: 3,
symbol: "BTC",
name: "Bitcoin",
variation: 2.15,
positive: true,
},
{
id: 4,
symbol: "AMZN",
name: "Amazon",
variation: -0.42,
positive: false,
},
{
id: 5,
symbol: "GOOGL",
name: "Google",
variation: 0.67,
positive: true,
},
];

const filters = [
  {
    name: "All",
    value: "all",
    icon: BarChart3,
  },
  {
    name: "Stocks",
    value: "stocks",
    icon: TrendingUp,
  },
  {
    name: "ETFs",
    value: "etfs",
    icon: PieChart,
  },
  {
    name: "REITs",
    value: "reits",
    icon: Building2,
  },
  {
    name: "Crypto",
    value: "crypto",
    icon: Bitcoin,
  },
];


return (
<div>
<section className="flex flex-col w-screen min-h-screen bg-stone-950 h-full items-center justify-center">
<div className="flex w-full">
<div className="flex justify-between p-3 text-stone-50 w-full items-center">
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
<div className="flex flex-col border-1 border-stone-500/10 shadow-2xs shadow-yellow-500 bg-gradient-to-br from-[#1c1b18] via-[#11110f] to-[#080808]  p-7 rounded-2xl gap-5  ">
<main className="flex justify-between gap-5">
<div className="flex items-center gap-2 text-stone-500 font-bold ">
<div className="p-2 bg-yellow-500 rounded-xl">
<Wallet size={29} className="text-stone-950 p-1"/>
</div>
<div className="flex-col ">
<h1 className="text-stone-400 font-bold text-[13px]">TOTAL PORTFOLIO</h1>
<h1 className="font-bold  text-stone-100">Investment balance</h1>
</div>
</div>

        </main>
        <div className="text-stone-100 flex-col flex gap-2">
          
          <h1 className="text-4xl font-bold">
            {coin}
            {investment}
          </h1>
          <div className="flex  gap-2">
            
            <div
              className={`${totalreturn >= 0 ? "text-green-500" : "text-red-500"} flex gap-1 items-center`}
            >
              <ArrowUpRight size={17} />
              <h1 className="text-[15px]">
                {totalreturn >= 0 ? "+" : "-"}
                {totalreturn.toFixed(2)}%
              </h1>
            </div>
            <h1 className="text-stone-500 text-[15px]">All time return</h1>
          </div>
        </div>

        
        <div className="h-1 w-full bg-stone-700/20 "></div>

        <div className="flex justify-between gap-3">
          
          <div className="flex flex-col w-full gap-2 p-4 rounded-2xl border-1 border-stone-500/20 bg-stone-950">
            <h1 className="text-stone-500 text-[12px] font-bold ">TODAY'S RETURN</h1>
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
          <div className="flex flex-col w-full border-1 border-stone-500/20 gap-2 p-4 rounded-2xl bg-stone-950">
            <h1 className="text-stone-500 text-[12px] font-bold">TOTAL ASSETS</h1>
            <div
              className={`text-yellow-400 flex gap-2 items-center`}
            >
              <BanknoteArrowUp />
              <h1 className="font-bold">
                {portfolio.length}
              </h1>
            </div>

          </div>

          
        </div>
      </div>

      <main className="flex flex-col gap-5">

        <div className="flex justify-between items-center ">
            <div>
              <h1 className="font-bold text-stone-100">Market</h1>
              <h1 className="text-stone-500 text-[13px]">Today's market movement</h1>
            </div>

            <div className="flex text-[17px] items-center gap-1 text-yellow-500">
              <h1>Explore</h1>
              <ArrowRightLeft size={17}/>
            </div>

        </div>

        

        <div className="flex overflow-x-auto pb-5 w-75 sm:w-full gap-5">
            { market.map((mark) => (
              <div key={mark.id} className="flex gap-2 rounded-2xl flex-col p-5 bg-stone-700/30 border-1">
                <main className="justify-between flex gap-15 items-center">
                  <div className="flex w-10 h-10 items-center justify-center bg-stone-500/40 rounded-2xl">
                  <h1 className="text-yellow-500">{mark.name.charAt(0)}</h1>
                  </div>
                  <div>
                    {mark.positive === true ? <ArrowUpRight size={20} className="text-green-500"/>  : <ArrowDownRight className="text-red-500"/>}
                  </div>
                </main>
                <main className="flex flex-col">
                  <h1 className="text-stone-100 font-bold text-[15px]">{mark.symbol}</h1>
                  <h1 className="text-[15px] text-stone-500">{mark.name}</h1>
                  
                </main>

                <main>
                  <h1 className={` text-[15px] ${mark.positive === true ? "text-green-500" : "text-red-500"}`}>{mark.positive ? "+"  : "-"}{mark.variation}%</h1>
                  
                </main>
                
                
              </div>)
            ) }
        </div>

      </main>


      


      <div className="w-full  bg-stone-950 rounded-2xl flex flex-col">
        <div className="w-full bg-stone-900 flex justify-between p-5 rounded-t-2xl items-center">
          <div className="flex flex-col">
            <h1 className="text-stone-100 font-bold text-2xl">
              My investments
            </h1>
            <h1 className="text-stone-500 text-[15px]">
              Track all your assets
            </h1>
          </div>
          <div>
            <TrendingUp className="text-yellow-500" />
          </div>
        </div>

        
         
        <main className="flex flex-col gap-3 bg-stone-900 relative p-1 items-center relative">
          <div className="flex items-center w-full">
            <Search size={20} className="text-stone-500/90 translate-x-6"/>
          <input className="w-full p-2.5 border-stone-500/40 text-stone-100 rounded-2xl outline-none border-1 text-[15px] pl-8 bg-stone-950 placeholder:text-stone-500/90" type="text" placeholder="Search Investments"/>
          </div>

          <div className="grid grid-cols-3 gap-2 p-2 sm:flex   overflow-x-auto  justify-center items-center">
              {filters.map((filter) => { const Icon = filter.icon
                
              return( <button onClick={() => setSearchinvest(filter.value)} key={filter.value} className={`flex gap-2 p-2  rounded-2xl  bg-stone-700/20 w-full  border-1 border-stone-500/30 items-center ${searchinvest === filter.value ? "bg-yellow-400 " : "text-stone-500"}`}>
                  <Icon />
                  <h1 className="font-bold">{filter.name}</h1>
                  

                </button>
              )
})}
          </div>
        </main>
        
        <div className="w-full h-0.5 bg-stone-500/30"></div>

        <main className="flex flex-col  bg-stone-900 p-5 w-full gap-5 rounded-b-2xl overflow-y-auto">
          <div className="flex flex-col h-60 sm:h-70 gap-1 ">
            {portfolio.filter((acao) => {return searchinvest === "all" || acao.type === searchinvest}).map((acao) => {
              return (
                <div
                  key={acao.id}
                  className="justify-between flex border-2 border-stone-900 p-2 rounded-2xl p-5 hover:bg-stone-600/10 hover:border-stone-800 transition-all duration-200 ease-in"
                >
                  <div className="flex gap-3 items-center">
                    <div className=" flex items-center w-10 h-10">
                      <img
                        className="rounded-md w-10 h-10 p-2   object-contain  text-stone-400  bg-stone-100"
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