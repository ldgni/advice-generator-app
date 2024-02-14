import { useState, useEffect } from "react";
import mobileDivider from "/src/assets/images/pattern-divider-mobile.svg";
import dice from "/src/assets/images/icon-dice.svg";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [slipId, setSlipId] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAdvice = async () => {
    setLoading(true);
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setSlipId(data.slip.id);
    setLoading(false);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <main className="shadow-custom relative mx-4 max-w-xl rounded-lg bg-[#313A48] px-6 pb-16 pt-10 text-center lg:px-12 lg:pb-20 lg:pt-12">
      <h1 className="mb-6 text-xs uppercase tracking-[0.2rem] text-[#53FFAA] lg:text-sm">
        Advice #{slipId}
      </h1>
      {loading ? (
        <p className="mb-8 text-2xl tracking-tight text-[#CEE3E9] lg:mb-12 lg:text-3xl">
          ...
        </p>
      ) : (
        <p className="mb-8 text-2xl tracking-tight text-[#CEE3E9] lg:mb-12 lg:text-3xl">
          {advice}
        </p>
      )}
      <img src={mobileDivider} alt="Divider" className="divider" />
      <button
        onClick={fetchAdvice}
        className="absolute bottom-0 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#53FFAA] p-4 transition-shadow hover:shadow-2xl hover:shadow-[#53FFAA]">
        <img src={dice} alt="Dice" />
      </button>
    </main>
  );
}
