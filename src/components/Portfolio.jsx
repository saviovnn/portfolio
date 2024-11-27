import { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { GlobalContext } from "../components/GlobalContext";

const Portfolio = () => {
  const { language } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [cardTitles, setCardTitles] = useState({
    portfolio: "",
    halloween: "",
    ticTacToe: "",
    calculator: "",
  });

  const translations = {
    en: {
      portfolio: "Portfolio",
      halloween: "Halloween",
      ticTacToe: "Tic Tac Toe",
      calculator: "Calculator",
    },
    pt: {
      portfolio: "Portfólio",
      halloween: "Dia das Bruxas",
      ticTacToe: "Jogo da Velha",
      calculator: "Calculadora",
    },
  };

  useEffect(() => {
    const typeText = (newText, setFunction, callback) => {
      let index = 0;
      const typingEffect = () => {
        setFunction(newText.slice(0, index));
        index++;
        if (index <= newText.length) {
          setTimeout(typingEffect, 80);
        } else if (callback) {
          callback();
        }
      };
      typingEffect();
    };

    setTitle("");
    typeText(translations[language].portfolio, setTitle);

    typeText(translations[language].portfolio, (text) =>
      setCardTitles((prev) => ({ ...prev, portfolio: text }))
    );
    typeText(translations[language].halloween, (text) =>
      setCardTitles((prev) => ({ ...prev, halloween: text }))
    );
    typeText(translations[language].ticTacToe, (text) =>
      setCardTitles((prev) => ({ ...prev, ticTacToe: text }))
    );
    typeText(translations[language].calculator, (text) =>
      setCardTitles((prev) => ({ ...prev, calculator: text }))
    );
  }, [language]);

  return (
    <div
      className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1024px] min-h-screen py-16 sm:py-20 lg:py-24"
      id="portfolio"
    >
      <h1 className="font-lora text-3xl text-center font-semibold mb-6 sm:mb-8 md:text-4xl lg:text-5xl">
        {title}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
        <Card
          title={cardTitles.portfolio}
          img="../portfolio.png"
          icon1="../icons/viteNormal.svg"
          icon2="../icons/reactNormal.svg"
          icon3="../icons/tailwindNormal.svg"
          link="https://saviovnn.dev/"
          rep="https://github.com/saviovnn/portfolio"
          target="_blank"
        />
        <Card
          title={cardTitles.halloween}
          img="../halloween.png"
          icon1="../icons/viteNormal.svg"
          icon2="../icons/vueNormal.svg"
          icon3="../icons/tailwindNormal.svg"
          link="https://halloween-lovat.vercel.app/"
          rep="https://github.com/saviovnn/halloween"
          target="_blank"
        />
        <Card
          title={cardTitles.ticTacToe}
          img="../jogo.png"
          icon1="../icons/viteNormal.svg"
          icon2="../icons/reactNormal.svg"
          icon3="../icons/tailwindNormal.svg"
          link="https://jogo-da-velha-react-nine.vercel.app/"
          rep="https://github.com/saviovnn/jogo-da-velha-react"
          target="_blank"
        />
        <Card
          title={cardTitles.calculator}
          img="../calc.png"
          icon1="../icons/viteNormal.svg"
          icon2="../icons/reactNormal.svg"
          icon3="../icons/tailwindNormal.svg"
          link="https://basic-calc-react.vercel.app/"
          rep="https://github.com/saviovnn/basic-calc-react"
          target="_blank"
        />
      </div>
    </div>
  );
};

export default Portfolio;
