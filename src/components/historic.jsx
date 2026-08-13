import React, { useState } from "react";
import { MoveRight, MoveUpRight, MoveUpLeft } from "lucide-react";

const Historic = ({
  coin,
  amount,
  newsend,
  saldo,
  historiclist,
  setHistoriclist,}) => {
  const [activeall, setactived] = useState(null);
  const [viewevery, setviewevery] = useState(false)

  return (
    <div className="">
      <main className="flex flex-col gap-5">
        <div className="flex justify-between">
          <h1 className="font-bold text-stone-500">History</h1>
          <h1 onClick={(() => setviewevery(!viewevery))} className="font-bold text-stone-500 cursor-pointer">{!viewevery ? "See all" : "Show less"}</h1>
        </div>
        <main className={`bg-stone-800/20 w-full p-5 rounded-2xl flex flex-col gap-5  sm:w-80 md:w-100  ${!viewevery ? "h-70" : "h-full"}`}>
          <main className="overflow-y-auto pb-5">
            <section className="flex flex-col gap-3">
              {historiclist
                .slice()
                .reverse()
                .map((historic) => (
                  <div
                    key={historic.id}
                    className="flex justify-between border-1 border-stone-400/20 p-2 rounded-2xl bg-stone-800/20 "
                  >
                    <div className="flex gap-3 items-center">
                      <div className="w-10 p-2">
                        <h1>
                          {historic.type === "sent" ? (
                            <MoveUpRight
                              size={40}
                              className="text-white bg-stone-500/20 p-2 rounded-2xl"
                            />
                          ) : (
                            <MoveUpLeft
                              size={40}
                              className="text-white bg-stone-500/20 p-2 rounded-2xl"
                            />
                          )}
                        </h1>
                      </div>

                      <div className="flex flex-col">
                        <h1 className="text-stone-100">{historic.username}</h1>
                        <h1 className="text-[15px] text-stone-500">
                          {historic.date}
                        </h1>
                      </div>
                    </div>

                    <div className="p-1 flex flex-col items-end">
                      <h1
                        className={` font-bold ${historic.type === "sent" ? "text-red-500" : historic.type === "received" ? "text-green-500" : ""}`}
                      >
                        {historic.type === "sent"
                          ? "-"
                          : historic.type === "received"
                            ? "+"
                            : ""}{" "}
                        {coin}
                        {historic.amount}
                      </h1>
                      <h1
                        className={`text-[15px] ${historic.status === "Completed" ? "text-green-600" : historic.status === "Failed" ? "text-red-500" : "text-orange-400"}`}
                      >
                        {historic.status}
                      </h1>
                    </div>
                  </div>
                ))}
            </section>
          </main>
        </main>
      </main>
    </div>
  );
};

export default Historic;
