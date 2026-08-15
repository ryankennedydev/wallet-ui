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
  Headphones,
} from "lucide-react";


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
      <div className="w-80 md:w-100   rounded-2xl m-auto relative overflow-hidden bg-stone-600/30  shadow-2xl">
        <main className="flex flex-col gap-5    p-5">
          <div className="justify-between flex  text-stone-500 items-center">
            <h1 className="text-[20px]">Benefits</h1>
            <h1 className="p-2 bg-yellow-400/20 text-yellow-300 rounded-2xl">
              Nomade
            </h1>
          </div>

          <div className=" ">
            <main>
              <div>
                <div className="flex  gap-2    rounded-md items-center overflow-y-auto    ">
                  {benefits.map((benefit, index) => (
                    <div className="flex flex-col items-center gap-2 font-bold   text-stone-100 bg-stone-900 p-3 border-1 transition-all duration-300 ease-initial hover:bg-stone-600/40 rounded-2xl border-stone-600/30" key={index}>
                      <span className="bg-stone-950/50 p-5 rounded-md">{benefit.img}</span>
                      <span  className="text-[15px]">{benefit.titulo}</span>
                      
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
