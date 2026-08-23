import React, { useState } from "react";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

const Historic = ({
  coin,
  historiclist,
}) => {
  const [viewevery, setviewevery] = useState(false);

  const transactions = viewevery
    ? [...historiclist].reverse()
    : [...historiclist].reverse().slice(0, 4);

  return (
    <div className="w-full sm:w-80 sm:w-150 ">
      <main className="flex flex-col gap-5">

        {/* HEADER */}
        <div className="flex justify-between items-center">

          <div className="flex flex-col gap-1">

            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-lg shadow-yellow-400/40"></div>

              <h1 className="font-bold text-stone-100 text-xl">
                History
              </h1>
            </div>

            <p className="text-stone-600 text-sm">
              Your latest transactions
            </p>

          </div>

          <button
            onClick={() => setviewevery(!viewevery)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl
            bg-stone-900 border border-stone-800
            text-stone-400 text-sm font-medium
            hover:bg-stone-800 hover:text-stone-200
            transition-all duration-200 cursor-pointer"
          >
            {viewevery ? "Show less" : "See all"}
          </button>

        </div>

        {/* TRANSACTIONS */}
        <main
          className="
          w-full
          bg-stone-900/40
          border border-stone-800
          rounded-3xl
          p-3
          flex flex-col
          "
        >

          <section className="flex flex-col">

            {transactions.map((historic, index) => {

              const isSent = historic.type === "sent";

              return (
                <div
                  key={historic.id}
                  className="
                  flex justify-between items-center
                  py-4 px-3
                  rounded-2xl
                  hover:bg-stone-800/50
                  transition-all duration-200
                  "
                >

                  {/* LEFT */}
                  <div className="flex items-center gap-4">

                    {/* ICON */}
                    <div
                      className={`
                      w-11 h-11
                      rounded-full
                      flex items-center justify-center
                      border
                      ${
                        isSent
                          ? "bg-red-500/10 border-red-500/15 text-red-400"
                          : "bg-green-500/10 border-green-500/15 text-green-400"
                      }
                      `}
                    >
                      {isSent ? (
                        <ArrowUpRight size={19} strokeWidth={2.2} />
                      ) : (
                        <ArrowDownLeft size={19} strokeWidth={2.2} />
                      )}
                    </div>

                    {/* USER */}
                    <div className="flex flex-col gap-1">

                      <h1 className="text-stone-100 font-medium text-[15px]">
                        {historic.username}
                      </h1>

                      <p className="text-stone-600 text-xs">
                        {historic.date}
                      </p>

                    </div>

                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col items-end gap-1">

                    <h1
                      className={`
                      font-semibold
                      text-[15px]
                      ${
                        isSent
                          ? "text-stone-100"
                          : "text-green-400"
                      }
                      `}
                    >
                      {isSent ? "-" : "+"}
                      {coin}
                      {Number(historic.amount).toFixed(2)}
                    </h1>

                    <div className="flex items-center gap-1">

                      <div
                        className={`
                        w-1.5 h-1.5 rounded-full
                        ${
                          historic.status === "Completed"
                            ? "bg-green-400"
                            : historic.status === "Failed"
                            ? "bg-red-500"
                            : "bg-yellow-400"
                        }
                        `}
                      />

                      <span
                        className={`
                        text-[11px]
                        ${
                          historic.status === "Completed"
                            ? "text-stone-500"
                            : historic.status === "Failed"
                            ? "text-red-400"
                            : "text-yellow-500"
                        }
                        `}
                      >
                        {historic.status}
                      </span>

                    </div>

                  </div>

                </div>
              );
            })}

          </section>

        </main>

      </main>
    </div>
  );
};

export default Historic;