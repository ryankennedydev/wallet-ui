import {
  StoreIcon,
  SquarePercentIcon,
  Plane,
  Gift,
  CreditCard,
  ShieldCheck,
  Wallet,
  TrendingUp,
  Star,
  Headphones, Coins
} from "lucide-react";
import "../index.css";


const Walletinvest = () => {
  const benefits = [
    {
      titulo: "Store",
      img: <StoreIcon />,
    },
    {
      titulo: "Discounts",
      img: <SquarePercentIcon />,
    },
    {
      titulo: "Travel",
      img: <Plane />,
    },
    {
      titulo: "Gifts",
      img: <Gift />,
    },
    {
      titulo: "Credit",
      img: <CreditCard />,
    },
    {
      titulo: "Security",
      img: <ShieldCheck />,
    },
    {
      titulo: "Wallet",
      img: <Wallet />,
    },
    {
      titulo: "Investments",
      img: <TrendingUp />,
    },
    {
      titulo: "Exclusive",
      img: <Star />,
    },
    {
      titulo: "Support",
      img: <Headphones />,
    },
  ];
  return (
    <section className=" bg-stone-950">
      <div className="w-80  sm:w-150 rounded-2xl m-auto relative  bg-stone-600/30  shadow-2xl">
        <main className="flex flex-col gap-5    p-5">
          <div className="justify-between flex  text-stone-500 items-center">
            <div className="flex-col ">
              <div className="flex items-center gap-1">
                <div className="bg-yellow-400 w-2 rounded-full h-2"></div>
                <h1 className="text-[20px] text-stone-100">Benefits</h1>
              </div>
              <div>
                <h1 className="text-stone-500 text-[15px]">Explore your wallet advantages</h1>
              </div>
            </div>
            <Coins size={40} className=" bg-stone-600/40 p-2 text-yellow-500 rounded-2xl"/>
            
          </div>

          <div className="w-full bg-stone-500/10 h-1"> </div>

          <div className="">
            <main className="">
              <div className="overflow-hidden">
                <div className="flex  gap-2  shrink-0  rounded-md items-center  moveleftcard    ">
                  {benefits.map((benefit, index) => (
                    <div className="flex flex-col items-center gap-2 font-bold    text-stone-100 bg-stone-900 p-3 border-1 transition-all duration-300 ease-initial hover:bg-stone-600/30 rounded-2xl border-stone-600/30" key={index}>
                      <span className=" p-5 rounded-md text-stone-400">{benefit.img}</span>
                      <span  className="text-[15px] text-stone-500">{benefit.titulo}</span>
                      
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Walletinvest;
