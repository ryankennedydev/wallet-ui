import { EyeOff, Eye, Wifi } from "lucide-react";
import { useState } from "react";

const AreaCard = () => {
  const [viewnumber, setViewNumber] = useState(null);

  const viewNumberclick = (id) => {
    setViewNumber(viewnumber === id ? null : id);
  };

  const cartoes = [
    {
      id: 1,
      bandeira: "mastercard",
      nome: "BLACK",
      numero: "5274 8361 2950 7148",
      color: "black",
    },
    {
      id: 2,
      bandeira: "visa",
      nome: "PLATINUM",
      numero: "4829 1573 6048 2316",
      color: "white",
    },
  ];

  return (
    <div className="flex flex-col w-screen bg-stone-950 p-5 gap-5">
      
      {/* HEADER */}
      <div className="flex justify-between items-center w-full sm:w-150 mx-auto">
        <div>
          <h1 className="text-white font-semibold text-lg">
            Your cards
          </h1>

          <p className="text-stone-500 text-sm">
            Manage your cards
          </p>
        </div>

        <button className="text-yellow-400 text-sm font-medium cursor-pointer">
          + Add
        </button>
      </div>

      {/* CARDS */}
      <main className="flex overflow-x-auto w-full sm:w-150 mx-auto gap-5 pb-6 snap-x snap-mandatory">

        {cartoes.map((card) => {
          const isBlack = card.color === "black";

          return (
            <div
              key={card.id}
              className={`
                relative
                w-80
                h-50
                shrink-0
                snap-center
                overflow-hidden
                rounded-[28px]
                p-6
                shadow-2xl
                transition-all
                duration-300
                hover:-translate-y-1
                ${
                  isBlack
                    ? "bg-[#202124] text-white"
                    : "bg-[#f1f1ee] text-stone-900"
                }
              `}
            >

              {/* FORMAS DO FUNDO */}
              <div
                className={`
                  absolute
                  -right-16
                  -top-10
                  w-60
                  h-80
                  rotate-[28deg]
                  ${
                    isBlack
                      ? "bg-white/[0.035]"
                      : "bg-black/[0.04]"
                  }
                `}
              />

              <div
                className={`
                  absolute
                  right-20
                  -bottom-24
                  w-45
                  h-80
                  rotate-[28deg]
                  ${
                    isBlack
                      ? "bg-black/20"
                      : "bg-white/70"
                  }
                `}
              />

              <div className="relative z-10 flex flex-col justify-between h-full">

                {/* TOPO */}
                <div className="flex justify-between items-start">

                  {/* BANDEIRA FEITA COM CSS */}
                  <div className="flex items-center">

                    {card.bandeira === "mastercard" ? (
                      <div className="relative w-12 h-8">

                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-red-500" />

                        <div className="absolute right-0 top-0 w-8 h-8 rounded-full bg-yellow-400 opacity-90" />

                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-14 h-8">
                        <span className="font-black italic text-xl tracking-tight text-[#1a1f71]">
                          VISA
                        </span>
                      </div>
                    )}

                  </div>

                  {/* CONTACTLESS */}
                  <Wifi
                    size={20}
                    className={`
                      rotate-90
                      ${
                        isBlack
                          ? "text-white/50"
                          : "text-stone-500"
                      }
                    `}
                  />

                </div>

                {/* NÚMERO */}
                <h1
                  className={`
                    text-[17px]
                    tracking-[0.16em]
                    font-medium
                    ${
                      isBlack
                        ? "text-white"
                        : "text-stone-800"
                    }
                  `}
                >
                  {viewnumber === card.id
                    ? card.numero
                    : `•••• •••• •••• ${card.numero.slice(-4)}`}
                </h1>

                {/* RODAPÉ */}
                <div className="flex justify-between items-center">

                  <h1
                    className={`
                      text-xs
                      tracking-[0.18em]
                      font-semibold
                      ${
                        isBlack
                          ? "text-white/60"
                          : "text-stone-500"
                      }
                    `}
                  >
                    {card.nome}
                  </h1>

                  <button
                    onClick={() => viewNumberclick(card.id)}
                    className={`
                      w-9
                      h-9
                      rounded-full
                      flex
                      items-center
                      justify-center
                      cursor-pointer
                      transition-all
                      duration-200
                      hover:scale-105
                      active:scale-95
                      ${
                        isBlack
                          ? "bg-white/[0.07] text-white/70 hover:bg-white/[0.12]"
                          : "bg-black/[0.06] text-stone-600 hover:bg-black/[0.1]"
                      }
                    `}
                  >
                    {viewnumber === card.id ? (
                      <Eye size={17} />
                    ) : (
                      <EyeOff size={17} />
                    )}
                  </button>

                </div>

              </div>

            </div>
          );
        })}

      </main>
    </div>
  );
};

export default AreaCard;