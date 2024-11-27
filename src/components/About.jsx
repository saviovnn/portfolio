import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../components/GlobalContext";

const About = () => {
  const { language } = useContext(GlobalContext);
  const [text, setText] = useState({
    title: "",
    content: "",
  });
  const [isTyping, setIsTyping] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  const translations = {
    en: {
      title: "About",
      content:
        "I am a student in the fourth semester of Information Systems at University of Taubate (UNITAU) and I started my training in technology with a technical course in IT at the Tancredo Neves Professional Education Center (CEP), in Brazópolis. I focus on web and mobile development, always looking for innovations and new approaches.",
    },
    pt: {
      title: "Sobre",
      content:
        "Sou estudante do quarto semestre de Sistemas de Informação na Universidade de Taubaté (UNITAU) e iniciei minha formação em tecnologia com um curso técnico em informática no Centro de Educação Profissional Tancredo Neves (CEP), em Brazópolis. Foco no desenvolvimento web e mobile, sempre buscando inovações e novas abordagens.",
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
        setTimeout(typingEffect, 80);
      } else if (callback) {
        callback();
      }
    };
    typingEffect();
  };

  useEffect(() => {
    if (!isTyping) {
      setText({ title: "", content: "" });
      setIsTyping(true);
      setImageVisible(false);

      typeText("title", translations[language].title, () => {
        setTimeout(() => {
          setImageVisible(true);
          typeText("content", translations[language].content, () => {
            setIsTyping(false);
          });
        }, 500);
      });
    }
  }, [language]);

  return (
    <div
      className="flex flex-col container mx-auto px-6 max-w-[1024px] py-20 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-30"
      id="about"
    >
      <h1 className="flex font-lora text-5xl items-center justify-start font-semibold mx-auto mb-8">
        {text.title}
      </h1>

      <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 xl:gap-16">
        <img
          src="https://avatars.githubusercontent.com/u/68607129?v=4"
          alt="photo"
          className={`w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-70 lg:h-70 xl:w-76 xl:h-76 rounded-full transition-transform duration-1000 ease-in-out transform ${
            imageVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-20 opacity-0"
          }`}
        />

        <p
          className={`max-w-[500px] w-full text-justify font-pop text-xl font-light transition-opacity duration-1000 ease-in-out ${
            imageVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {text.content}
        </p>
      </div>
    </div>
  );
};

export default About;
