import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../components/GlobalContext";

const Hero = () => {
  const { language } = useContext(GlobalContext);
  const [text, setText] = useState({
    h1Line1: "",
    h1Line2: "",
    p: "",
  });

  const [isTyping, setIsTyping] = useState(false);
  const [showScrollIcon, setShowScrollIcon] = useState(false);
  const [hideContent, setHideContent] = useState(true);

  const translations = {
    en: {
      h1Line1: "Hello",
      h1Line2: "I’m Sávio Vianna",
      p: "I am a front-end developer who constantly seeks out innovative solutions to everyday problems.",
    },
    pt: {
      h1Line1: "Olá",
      h1Line2: "Sou Sávio Vianna",
      p: "Sou um desenvolvedor front-end que busca constantemente soluções inovadoras para problemas do dia a dia.",
    },
  };

  const typeText = (key, newText, callback) => {
    let index = 0;
    const typingEffect = () => {
      setText((prev) => ({
        ...prev,
        [key]: newText.slice(0, index),
      }));

      index++;
      if (index <= newText.length) {
        setTimeout(typingEffect, 55);
      } else if (callback) {
        callback();
      }
    };
    typingEffect();
  };

  useEffect(() => {
    if (!isTyping) {
      setHideContent(true);
      setShowScrollIcon(false);
      setTimeout(() => {
        setText({ h1Line1: "", h1Line2: "", p: "" });
        setIsTyping(true);
        setHideContent(false);
        typeText("h1Line1", translations[language].h1Line1, () => {
          typeText("h1Line2", translations[language].h1Line2, () => {
            typeText("p", translations[language].p, () => {
              setIsTyping(false);
              setShowScrollIcon(true);
            });
          });
        });
      }, 1000);
    }
  }, [language]);

  return (
    <div
      className={`container mx-auto px-6 max-w-[1024px] py-10 transition-opacity duration-500 ${
        hideContent ? "opacity-0" : "opacity-100"
      }`}
      id="home"
    >
      <div className="min-h-[100px] sm:min-h-[300px] flex flex-col justify-center">
        <h1 className="font-lora font-semibold mt-8 text-5xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-[7.5rem] text-center sm:text-end">
          {text.h1Line1}
        </h1>
        <h1 className="font-lora font-semibold mt-8 text-5xl sm:text-6xl md:text-8xl lg:text-8xl xl:text-[7.5rem] text-center sm:text-end">
          {text.h1Line2}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-20 md:mb-10 sm:mb-5">
        <div className="max-w-[485px] w-full text-justify mb-10 md:mb-0 md:mr-10 min-h-[120px]">
          <p className="font-pop font-light text-2xl sm:text-3xl md:text-3xl lg:text-3xl transition-all duration-500 transform scale-100 opacity-100">
            {text.p}
          </p>
        </div>

        <div
          className={`w-full flex items-center justify-center md:items-end md:justify-end px-24 transition-opacity duration-500 ${
            showScrollIcon ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src="../scrool.svg" alt="scroll" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
